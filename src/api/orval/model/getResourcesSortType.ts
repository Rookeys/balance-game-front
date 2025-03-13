export type GetResourcesSortType = (typeof GetResourcesSortType)[keyof typeof GetResourcesSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetResourcesSortType = {
  winRateAsc: "winRateAsc",
  winRateDesc: "winRateDesc",
  old: "old",
  resent: "resent"
} as const
