/**
 * 로그인 종류
 */
export type LoginRequestLoginType = (typeof LoginRequestLoginType)[keyof typeof LoginRequestLoginType]

export const LoginRequestLoginType = {
  KAKAO: "KAKAO",
  GOOGLE: "GOOGLE"
} as const
