/**
 * 카테고리
 */
export type GameListResponseCategory = (typeof GameListResponseCategory)[keyof typeof GameListResponseCategory]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameListResponseCategory = {
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
