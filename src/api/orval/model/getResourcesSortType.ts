export type GetResourcesSortType = (typeof GetResourcesSortType)[keyof typeof GetResourcesSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetResourcesSortType = {
  WIN_RATE_ASC: "WIN_RATE_ASC",
  WIN_RATE_DESC: "WIN_RATE_DESC",
  OLD: "OLD",
  RESENT: "RESENT"
} as const
