export type GetResourcesUsingPageSortType =
  (typeof GetResourcesUsingPageSortType)[keyof typeof GetResourcesUsingPageSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetResourcesUsingPageSortType = {
  WIN_RATE_ASC: "WIN_RATE_ASC",
  WIN_RATE_DESC: "WIN_RATE_DESC",
  OLD: "OLD",
  RESENT: "RESENT"
} as const
