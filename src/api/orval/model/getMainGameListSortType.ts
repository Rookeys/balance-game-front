export type GetMainGameListSortType = (typeof GetMainGameListSortType)[keyof typeof GetMainGameListSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMainGameListSortType = {
  OLD: "OLD",
  RECENT: "RECENT",
  PLAY_DESC: "PLAY_DESC",
  WEEK: "WEEK",
  MONTH: "MONTH"
} as const
