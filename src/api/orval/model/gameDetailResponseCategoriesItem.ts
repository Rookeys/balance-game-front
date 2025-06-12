/**
 * 카테고리
 */
export type GameDetailResponseCategoriesItem =
  (typeof GameDetailResponseCategoriesItem)[keyof typeof GameDetailResponseCategoriesItem]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameDetailResponseCategoriesItem = {
  FUN: "FUN",
  DAILY: "DAILY",
  FOOD: "FOOD",
  LOVE: "LOVE",
  DRAMA: "DRAMA",
  SONG: "SONG",
  CELEBRITY: "CELEBRITY",
  ANIMAL: "ANIMAL",
  ANIMATION: "ANIMATION",
  HORROR: "HORROR",
  MOVIE: "MOVIE",
  ETC: "ETC"
} as const
