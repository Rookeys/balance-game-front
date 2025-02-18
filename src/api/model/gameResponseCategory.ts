/**
 * 카테고리 설정
 */
export type GameResponseCategory = (typeof GameResponseCategory)[keyof typeof GameResponseCategory]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameResponseCategory = {
  FUN: "FUN",
  HORROR: "HORROR",
  HOT: "HOT"
} as const
