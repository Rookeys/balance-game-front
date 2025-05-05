/**
 * 카테고리 설정
 */
export type GameRequestCategoriesItem = (typeof GameRequestCategoriesItem)[keyof typeof GameRequestCategoriesItem]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameRequestCategoriesItem = {
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
