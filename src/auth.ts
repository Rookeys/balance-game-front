import { postUsersLoginResponseAllData } from "@/services/oauth"
import axios, { type AxiosResponse } from "axios"
import type { TokenResponse } from "balance-game-api/dist/models/token-response"
import type { Account, AuthOptions, Session, User } from "next-auth"
import type { JWT } from "next-auth/jwt"
import KakaoProvider from "next-auth/providers/kakao"

const authOptions: AuthOptions = {
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
    async jwt({ token, account, user }: { token: JWT; account: Account | null; user: User }) {
      console.log("=====\n🚀 ~ jwt ~ user", user)
      console.log("=====\n🚀 ~ jwt ~ account:", account)
      console.log("=====\n🚀 ~ jwt ~ token:", token)
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

          token.access_token = responseAccessToken
          token.refresh_token = responseRefreshToken

          if (responseAccessTokenExpiresAt) {
            token.access_token_expires_at = Date.now() + responseAccessTokenExpiresAt * 1000 // * 초 단위이므로 Date 형식에 맞게 1000을 곱함 (밀리초)
          }
          if (responseRefreshTokenExpiresAt) {
            token.refresh_token_expires_at = Date.now() + responseRefreshTokenExpiresAt * 1000
          }
        }

        if (Date.now() < token.access_token_expires_at) {
          return token
        } else {
          console.log("=====\n🚀리프레쉬 할때 토큰", token.refresh_token)
          const refreshResponse: AxiosResponse<TokenResponse> = await axios.post(
            `${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/users/refresh`,
            undefined,
            {
              headers: {
                // Authorization: token.access_token,
                RefreshToken: token.refresh_token,
                "Cache-Control": "no-store, no-cache, must-revalidate",
                Pragma: "no-cache",
                Expires: "0"
              }
            }
          )

          const refreshedAccessToken = refreshResponse.data.accessToken
          console.log("=====\n🚀 ~ jwt ~ 리프레쉬 후 액세스 토큰:", refreshedAccessToken)
          const refreshedRefreshToken = refreshResponse.data.refreshToken
          console.log("=====\n🚀 ~ jwt ~ 리프레쉬 후 리프레쉬 토큰:", refreshedRefreshToken)
          const refreshedAccessTokenExpiresAt = refreshResponse.data.accessTokenExpiresAt
          const refreshedRefreshTokenExpiresAt = refreshResponse.data.refreshTokenExpiresAt
          if (refreshResponse) {
            token.access_token = refreshedAccessToken
            token.refresh_token = refreshedRefreshToken
            if (refreshedAccessTokenExpiresAt) {
              token.access_token_expires_at = Date.now() + refreshedAccessTokenExpiresAt * 1000
            }
            if (refreshedRefreshTokenExpiresAt) {
              token.refresh_token_expires_at = Date.now() + refreshedRefreshTokenExpiresAt * 1000
            }
          }

          // start region fetch refresh
          // const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/users/refresh`, {
          //   method: "POST",
          //   headers: {
          //     RefreshToken: token.refresh_token as string
          //   }
          // })

          // const refreshResponse = await response.json()

          // if (refreshResponse) {
          //   const access = refreshResponse.accessToken
          //   const refresh = refreshResponse.refreshToken

          //   console.log("액세스", access)
          //   console.log('리프레쉬',refresh)
          //   token.access_token = access as string
          //   token.refresh_token = refresh as string
          //   if (!!refreshResponse.accessTokenExpiresAt) {
          //     token.access_token_expires_at = Date.now() + refreshResponse.accessTokenExpiresAt * 1000
          //   }
          //   if (!!refreshResponse.refreshTokenExpiresAt) {
          //     token.refresh_token_expires_at = Date.now() + refreshResponse.refreshTokenExpiresAt * 1000
          //   }
          // }
          // endregion fetch refresh
        }

        return token
      } catch (error: any) {
        console.log("==========\n에러!", error.response.data)
        return token
      }
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.access_token = token.access_token
      console.log("=====\n🚀 ~ session ~ 세션세팅 할때 액세스 토큰:", token.access_token)
      session.refresh_token = token.refresh_token
      console.log("=====\n🚀 ~ session ~ 세션세팅 할때 리프레쉬 토큰:", token.refresh_token)
      session.access_token_expires_at = token.access_token_expires_at
      session.refresh_token_expires_at = token.refresh_token_expires_at
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
  }
  // secret: process.env.NEXTAUTH_SECRET
}

export { authOptions }
