/**
 * 카테고리 설정
 */
export type GameResponseCategoriesItem = (typeof GameResponseCategoriesItem)[keyof typeof GameResponseCategoriesItem]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameResponseCategoriesItem = {
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
