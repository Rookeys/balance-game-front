/**
 * 카테고리
 */
export type GameListResponseCategoriesItem =
  (typeof GameListResponseCategoriesItem)[keyof typeof GameListResponseCategoriesItem]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameListResponseCategoriesItem = {
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
