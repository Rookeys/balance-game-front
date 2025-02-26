import type { LoginRequestLoginType } from "./loginRequestLoginType"

export interface LoginRequest {
  /** 이메일 */
  email: string
  /** 로그인 종류 */
  loginType: LoginRequestLoginType
  /** 인증 토큰 */
  accessToken: string
}
