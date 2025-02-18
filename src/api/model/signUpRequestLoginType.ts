/**
 * 로그인 타입
 */
export type SignUpRequestLoginType = (typeof SignUpRequestLoginType)[keyof typeof SignUpRequestLoginType]

export const SignUpRequestLoginType = {
  KAKAO: "KAKAO",
  GOOGLE: "GOOGLE"
} as const
