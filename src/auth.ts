import { refreshAccessToken } from "@/api/auth/refreshAccessToken"
import { LoginRequest } from "@/api/orval/model/loginRequest"
import { LoginResponse } from "@/api/orval/model/loginResponse"
import axios from "axios"
import { AuthOptions, type Session } from "next-auth"
import type { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"
import KakaoProvider from "next-auth/providers/kakao"
import { SignUpRequest } from "./api/orval/model/signUpRequest"
import { SignUpRequestLoginType } from "./api/orval/model/signUpRequestLoginType"
import { generateRandomNickname } from "./utils/generateRandomNickname"

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: "Demo Login",
      credentials: {
        accessToken: { type: "text" },
        refreshToken: { type: "text" },
        accessTokenExpiresAt: { type: "text" },
        refreshTokenExpiresAt: { type: "text" },
        nickname: { type: "text" },
        image: { type: "text" }
      },
      async authorize(credentials) {
        if (!credentials) return null

        return {
          id: "demo-user",
          accessToken: credentials.accessToken,
          refreshToken: credentials.refreshToken,
          accessTokenExpiresAt: credentials.accessTokenExpiresAt,
          refreshTokenExpiresAt: credentials.refreshTokenExpiresAt,
          nickname: credentials.nickname,
          image: credentials.image
        }
      }
    })
  ],
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out"
  },
  session: {
    strategy: "jwt"
    // maxAge: 60 * 60 * 24 * 30
  },
  callbacks: {
    // authorized: async ({ auth }) => {
    //   return !!auth
    // },
    async jwt({ token, account, user, trigger, session }) {
      try {
        if (trigger === "update" && session.nickname) {
          token.nickname = session.nickname
          token.image = session.image
        }

        // demo 로그인 처리
        if (account?.type === "credentials" && user) {
          return {
            ...token,
            access_token: (user as any).accessToken,
            refresh_token: (user as any).refreshToken,
            access_token_expires_at: Date.now() + Number((user as any).accessTokenExpiresAt) * 1000,
            refresh_token_expires_at: Date.now() + Number((user as any).refreshTokenExpiresAt) * 1000,
            nickname: (user as any).nickname,
            image: (user as any).image
          }
        }

        if (account && user) {
          try {
            const { data } = await axios.post<LoginResponse>(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/users/login`, {
              email: token.email as string,
              loginType: SignUpRequestLoginType.KAKAO,
              accessToken: account.access_token as string
            } as LoginRequest)

            const accessToken = data.accessToken
            const refreshToken = data.refreshToken
            const accessTokenExpiresAt = data.accessTokenExpiresAt
            const refreshTokenExpiresAt = data.refreshTokenExpiresAt
            const nickname = data.nickname
            const image = data.fileUrl

            const newToken: JWT = {
              ...token,
              access_token: accessToken,
              refresh_token: refreshToken,
              nickname: nickname,
              image: image
            }

            if (accessTokenExpiresAt) {
              newToken.access_token_expires_at = Date.now() + accessTokenExpiresAt * 1000 // * 초 단위이므로 Date 형식에 맞게 1000을 곱함 (밀리초)
            }
            if (refreshTokenExpiresAt) {
              newToken.refresh_token_expires_at = Date.now() + refreshTokenExpiresAt * 1000
            }
            return newToken
          } catch (error: any) {
            if (error.status === 404) {
              // 신규 회원일때
              const { data } = await axios.post<LoginResponse>(
                `${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/users/signup`,
                {
                  nickname: generateRandomNickname(),
                  email: token.email as string,
                  loginType: SignUpRequestLoginType.KAKAO,
                  accessToken: account.access_token as string,
                  image: token.picture
                } as SignUpRequest
              )

              const accessToken = data.accessToken
              const refreshToken = data.refreshToken
              const accessTokenExpiresAt = data.accessTokenExpiresAt
              const refreshTokenExpiresAt = data.refreshTokenExpiresAt
              const nickname = data.nickname
              const image = data.fileUrl

              const newToken: JWT = {
                ...token,
                access_token: accessToken,
                refresh_token: refreshToken,
                nickname: nickname,
                image: image
              }

              if (accessTokenExpiresAt) {
                newToken.access_token_expires_at = Date.now() + accessTokenExpiresAt * 1000 // * 초 단위이므로 Date 형식에 맞게 1000을 곱함 (밀리초)
              }
              if (refreshTokenExpiresAt) {
                newToken.refresh_token_expires_at = Date.now() + refreshTokenExpiresAt * 1000
              }
              return newToken
            }
          }
        }

        const EXPIRY_BUFFER_MS = 60 * 1000

        if (Date.now() < token.access_token_expires_at - EXPIRY_BUFFER_MS) {
          return token
        } else {
          const {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            accessTokenExpiresAt: newAccessTokenExpiresAt,
            refreshTokenExpiresAt: newRefreshTokenExpiresAt
          } = await refreshAccessToken(token.refresh_token as string)

          const newToken: JWT = {
            ...token,
            access_token: newAccessToken,
            refresh_token: newRefreshToken
          }

          if (newAccessTokenExpiresAt) {
            newToken.access_token_expires_at = Date.now() + newAccessTokenExpiresAt * 1000
          }
          if (newRefreshTokenExpiresAt) {
            newToken.refresh_token_expires_at = Date.now() + newRefreshTokenExpiresAt * 1000
          }
          return newToken
        }
      } catch {
        throw new Error("Refresh token expired")
      }
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.access_token) {
        session.access_token = token.access_token
        session.refresh_token = token.refresh_token
        session.access_token_expires_at = token.access_token_expires_at
        session.refresh_token_expires_at = token.refresh_token_expires_at
        session.user.nickname = token.nickname
        session.user.image = token.image
      }
      return session
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`
      }

      if (url.startsWith(`${baseUrl}/sign-in?callbackUrl=`)) {
        const callbackUrl = new URL(url).searchParams.get("callbackUrl")
        if (callbackUrl) {
          const path = new URL(callbackUrl).pathname
          return path
        }
      }
      return baseUrl
    }
  },
  secret: process.env.AUTH_SECRET
}
