export type GetMainGameListCategory = (typeof GetMainGameListCategory)[keyof typeof GetMainGameListCategory]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMainGameListCategory = {
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
