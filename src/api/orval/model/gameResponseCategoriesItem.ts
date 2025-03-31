/**
 * 카테고리 설정
 */
export type GameResponseCategoriesItem = (typeof GameResponseCategoriesItem)[keyof typeof GameResponseCategoriesItem]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameResponseCategoriesItem = {
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
