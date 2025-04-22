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
  SURVIVAL: "SURVIVAL",
  EVERYDAY: "EVERYDAY",
  FOOD: "FOOD",
  LOVE: "LOVE",
  SONG: "SONG",
  CELEBRITY: "CELEBRITY",
  ANIMAL: "ANIMAL",
  ANIME: "ANIME",
  ETC: "ETC"
} as const
