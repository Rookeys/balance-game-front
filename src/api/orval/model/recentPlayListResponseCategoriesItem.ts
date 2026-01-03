/**
 * 카테고리
 */
export type RecentPlayListResponseCategoriesItem =
  (typeof RecentPlayListResponseCategoriesItem)[keyof typeof RecentPlayListResponseCategoriesItem]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const RecentPlayListResponseCategoriesItem = {
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
