export type GetResultRankingSortType = (typeof GetResultRankingSortType)[keyof typeof GetResultRankingSortType]

export const GetResultRankingSortType = {
  winRateAsc: "winRateAsc",
  winRateDesc: "winRateDesc",
  idAsc: "idAsc",
  idDesc: "idDesc"
} as const
