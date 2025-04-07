/**
 * 카테고리
 */
export type GameDetailResponseCategoriesItem =
  (typeof GameDetailResponseCategoriesItem)[keyof typeof GameDetailResponseCategoriesItem]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameDetailResponseCategoriesItem = {
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
