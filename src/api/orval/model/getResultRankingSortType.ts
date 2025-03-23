export type GetResultRankingSortType = (typeof GetResultRankingSortType)[keyof typeof GetResultRankingSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetResultRankingSortType = {
  WIN_RATE_ASC: "WIN_RATE_ASC",
  WIN_RATE_DESC: "WIN_RATE_DESC",
  OLD: "OLD",
  RESENT: "RESENT"
} as const
