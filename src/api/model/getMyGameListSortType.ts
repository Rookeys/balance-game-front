export type GetMyGameListSortType = (typeof GetMyGameListSortType)[keyof typeof GetMyGameListSortType]

export const GetMyGameListSortType = {
  winRateAsc: "winRateAsc",
  winRateDesc: "winRateDesc",
  idAsc: "idAsc",
  idDesc: "idDesc"
} as const
