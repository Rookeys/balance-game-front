export type GetMyGameListSortType = (typeof GetMyGameListSortType)[keyof typeof GetMyGameListSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMyGameListSortType = {
  OLD: "OLD",
  RECENT: "RECENT",
  PLAY_DESC: "PLAY_DESC",
  WEEK: "WEEK",
  MONTH: "MONTH"
} as const
