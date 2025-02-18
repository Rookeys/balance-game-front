export type GetMyGameListSortType = (typeof GetMyGameListSortType)[keyof typeof GetMyGameListSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMyGameListSortType = {
  winRateAsc: "winRateAsc",
  winRateDesc: "winRateDesc",
  idAsc: "idAsc",
  idDesc: "idDesc"
} as const
