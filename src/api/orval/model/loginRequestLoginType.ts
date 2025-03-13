/**
 * 로그인 종류
 */
export type LoginRequestLoginType = (typeof LoginRequestLoginType)[keyof typeof LoginRequestLoginType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LoginRequestLoginType = {
  KAKAO: "KAKAO",
  GOOGLE: "GOOGLE"
} as const
