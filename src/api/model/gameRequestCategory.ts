/**
 * 카테고리 설정
 */
export type GameRequestCategory = (typeof GameRequestCategory)[keyof typeof GameRequestCategory]

export const GameRequestCategory = {
  FUN: "FUN",
  HORROR: "HORROR",
  HOT: "HOT"
} as const
