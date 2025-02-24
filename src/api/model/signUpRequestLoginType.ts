/**
 * 로그인 타입
 */
export type SignUpRequestLoginType = (typeof SignUpRequestLoginType)[keyof typeof SignUpRequestLoginType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SignUpRequestLoginType = {
  KAKAO: "KAKAO",
  GOOGLE: "GOOGLE"
} as const
