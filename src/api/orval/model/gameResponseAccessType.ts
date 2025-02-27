/**
 * 접근 권한
 */
export type GameResponseAccessType = (typeof GameResponseAccessType)[keyof typeof GameResponseAccessType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameResponseAccessType = {
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE",
  PROTECTED: "PROTECTED"
} as const
