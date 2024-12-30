import { AuthOptions } from "next-auth"
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
    async session({ session }) {
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
}

export { authOptions }
