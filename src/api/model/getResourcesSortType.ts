export type GetResourcesSortType = (typeof GetResourcesSortType)[keyof typeof GetResourcesSortType]

export const GetResourcesSortType = {
  winRateAsc: "winRateAsc",
  winRateDesc: "winRateDesc",
  idAsc: "idAsc",
  idDesc: "idDesc"
} as const
