export type GetMainGameListCategory = (typeof GetMainGameListCategory)[keyof typeof GetMainGameListCategory]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMainGameListCategory = {
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
