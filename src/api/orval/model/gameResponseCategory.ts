/**
 * 카테고리 설정
 */
export type GameResponseCategory = (typeof GameResponseCategory)[keyof typeof GameResponseCategory]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameResponseCategory = {
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
