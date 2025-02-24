import { refreshAccessToken } from "@/api/auth/refreshAccessToken"
import axios from "axios"
import { AuthOptions, type Session } from "next-auth"
import type { JWT } from "next-auth/jwt"
import KakaoProvider from "next-auth/providers/kakao"
import { LoginRequest, LoginResponse } from "./api/model"

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string
    })
  ],
  pages: {
    signIn: "/sign-in"
  },
  callbacks: {
    // authorized: async ({ auth }) => {
    //   return !!auth
    // },
    async jwt({ token, account, user }) {
      try {
        if (account && user) {
          const { data } = await axios.post<LoginResponse>(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/users/login`, {
            email: token.email as string,
            loginType: "KAKAO",
            accessToken: account.access_token as string
          } as LoginRequest)

          const accessToken = data.accessToken
          const refreshToken = data.refreshToken
          const accessTokenExpiresAt = data.accessTokenExpiresAt
          const refreshTokenExpiresAt = data.refreshTokenExpiresAt

          const newToken: JWT = {
            ...token,
            access_token: accessToken,
            refresh_token: refreshToken
          }

          if (accessTokenExpiresAt) {
            newToken.access_token_expires_at = Date.now() + accessTokenExpiresAt * 1000 // * 초 단위이므로 Date 형식에 맞게 1000을 곱함 (밀리초)
          }
          if (refreshTokenExpiresAt) {
            newToken.refresh_token_expires_at = Date.now() + refreshTokenExpiresAt * 1000
          }
          return newToken
        }

        if (Date.now() < token.access_token_expires_at) {
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
      } catch (error: any) {
        console.log(error)
        return { ...token, access_token: undefined, refresh_token: undefined }
      }
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.access_token) {
        session.access_token = token.access_token
        session.refresh_token = token.refresh_token
        session.access_token_expires_at = token.access_token_expires_at
        session.refresh_token_expires_at = token.refresh_token_expires_at
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
