import { AuthOptions } from "next-auth"
import KakaoProvider from "next-auth/providers/kakao"

const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string
    })
  ]
}

export { authOptions }
