export type GetUserGameListByEmailSortType =
  (typeof GetUserGameListByEmailSortType)[keyof typeof GetUserGameListByEmailSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUserGameListByEmailSortType = {
  OLD: "OLD",
  RECENT: "RECENT",
  PLAY_DESC: "PLAY_DESC",
  WEEK: "WEEK",
  MONTH: "MONTH"
} as const
