export type GetMyGameListCategory = (typeof GetMyGameListCategory)[keyof typeof GetMyGameListCategory]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMyGameListCategory = {
  FUN: "FUN",
  HORROR: "HORROR",
  ACTION: "ACTION"
} as const
