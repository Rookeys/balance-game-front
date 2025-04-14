/**
 * 카테고리 설정
 */
export type GameRequestCategoriesItem = (typeof GameRequestCategoriesItem)[keyof typeof GameRequestCategoriesItem]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameRequestCategoriesItem = {
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
