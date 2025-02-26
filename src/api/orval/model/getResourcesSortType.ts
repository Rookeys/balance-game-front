export type GetResourcesSortType = (typeof GetResourcesSortType)[keyof typeof GetResourcesSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetResourcesSortType = {
  winRateAsc: "winRateAsc",
  winRateDesc: "winRateDesc",
  idAsc: "idAsc",
  idDesc: "idDesc"
} as const
