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
      if (account && user) {
        token.token_type = account.token_type
        token.access_token = account.access_token
        token.refresh_token = account.refresh_token

        if (account.expires_at) token.accessTokenExpires = Date.now() + account.expires_at * 1000
      }

      return token
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.access_token = token.access_token
      // session.refresh_token = token.refresh_token
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
