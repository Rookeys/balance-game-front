export type GetUserGameListByEmailCategory =
  (typeof GetUserGameListByEmailCategory)[keyof typeof GetUserGameListByEmailCategory]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserGameListByEmailCategory = {
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
  ETC: "ETC",
  FOLLOWING: "FOLLOWING"
} as const
