/**
 * 접근 권한
 */
export type GameInfoResponseAccessType = (typeof GameInfoResponseAccessType)[keyof typeof GameInfoResponseAccessType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameInfoResponseAccessType = {
  PUBLIC: "PUBLIC",
  PRIVATE: "PRIVATE",
  PROTECTED: "PROTECTED"
} as const
