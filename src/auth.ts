import { postUsersLoginResponseAllData } from "@/services/oauth"
import NextAuth, { type Session } from "next-auth"
import type { JWT } from "next-auth/jwt"
import KakaoProvider from "next-auth/providers/kakao"
import { refreshAccessToken } from "./api/auth/refreshAccessToken"

export const { handlers, auth, signIn, signOut } = NextAuth({
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
    authorized: async ({ auth }) => {
      return !!auth
    },
    async jwt({ token, account, user }) {
      try {
        if (account && user) {
          const response = await postUsersLoginResponseAllData({
            loginRequest: {
              email: token.email as string,
              loginType: "KAKAO",
              accessToken: account.access_token as string
            }
          })

          const responseAccessToken = response.data.accessToken
          const responseRefreshToken = response.data.refreshToken
          const responseAccessTokenExpiresAt = response.data.accessTokenExpiresAt
          const responseRefreshTokenExpiresAt = response.data.refreshTokenExpiresAt

          const newToken: JWT = {
            ...token,
            access_token: responseAccessToken,
            refresh_token: responseRefreshToken
          }

          if (responseAccessTokenExpiresAt) {
            newToken.access_token_expires_at = Date.now() + responseAccessTokenExpiresAt * 1000 // * 초 단위이므로 Date 형식에 맞게 1000을 곱함 (밀리초)
          }
          if (responseRefreshTokenExpiresAt) {
            newToken.refresh_token_expires_at = Date.now() + responseRefreshTokenExpiresAt * 1000
          }
          return newToken
        }

        if (Date.now() < token.access_token_expires_at) {
          return token
        } else {
          const {
            accessToken: refreshedAccessToken,
            refreshToken: refreshedRefreshToken,
            accessTokenExpiresAt: refreshedAccessTokenExpiresAt,
            refreshTokenExpiresAt: refreshedRefreshTokenExpiresAt
          } = await refreshAccessToken(token.refresh_token as string)

          const newToken: JWT = {
            ...token,
            access_token: refreshedAccessToken,
            refresh_token: refreshedRefreshToken
          }

          if (refreshedAccessTokenExpiresAt) {
            newToken.access_token_expires_at = Date.now() + refreshedAccessTokenExpiresAt * 1000
          }
          if (refreshedRefreshTokenExpiresAt) {
            newToken.refresh_token_expires_at = Date.now() + refreshedRefreshTokenExpiresAt * 1000
          }
          return newToken
        }
      } catch (error: any) {
        console.log(error)
        return token
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
})
