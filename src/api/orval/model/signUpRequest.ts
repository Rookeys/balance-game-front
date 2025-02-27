import type { SignUpRequestLoginType } from "./signUpRequestLoginType"

export interface SignUpRequest {
  /**
   * 닉네임
   * @pattern ^[a-zA-Z0-9가-힣]+$
   */
  nickname: string
  /** 이메일 */
  email: string
  /** 로그인 타입 */
  loginType: SignUpRequestLoginType
  /** 소셜 로그인 측 서버에서 발급받은 토큰 */
  accessToken: string
  /** 사진 URL */
  image?: string
}
