export type GetResultRankingSortType = (typeof GetResultRankingSortType)[keyof typeof GetResultRankingSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetResultRankingSortType = {
  winRateAsc: "winRateAsc",
  winRateDesc: "winRateDesc",
  idAsc: "idAsc",
  idDesc: "idDesc"
} as const
