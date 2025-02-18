/**
 * 접근 레벨 설정
 */
export type GameRequestAccessType = (typeof GameRequestAccessType)[keyof typeof GameRequestAccessType]

export const GameRequestAccessType = {
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE",
  PROTECTED: "PROTECTED"
} as const
