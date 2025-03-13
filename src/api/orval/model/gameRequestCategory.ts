/**
 * 카테고리 설정
 */
export type GameRequestCategory = (typeof GameRequestCategory)[keyof typeof GameRequestCategory]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameRequestCategory = {
  FUN: "FUN",
  HORROR: "HORROR",
  HOT: "HOT",
  ACTION: "ACTION",
  ADVENTURE: "ADVENTURE",
  MYSTERY: "MYSTERY",
  FANTASY: "FANTASY",
  THRILLER: "THRILLER",
  SF: "SF",
  DRAMA: "DRAMA",
  ROMANCE: "ROMANCE",
  CRIME: "CRIME",
  SURVIVAL: "SURVIVAL"
} as const
