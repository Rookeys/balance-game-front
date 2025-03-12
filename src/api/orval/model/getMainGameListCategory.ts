export type GetMainGameListCategory = (typeof GetMainGameListCategory)[keyof typeof GetMainGameListCategory]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMainGameListCategory = {
  FUN: "FUN",
  HORROR: "HORROR",
  ACTION: "ACTION"
} as const
