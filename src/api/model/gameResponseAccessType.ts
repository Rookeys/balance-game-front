/**
 * 접근 권한
 */
export type GameResponseAccessType = (typeof GameResponseAccessType)[keyof typeof GameResponseAccessType]

export const GameResponseAccessType = {
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE",
  PROTECTED: "PROTECTED"
} as const
