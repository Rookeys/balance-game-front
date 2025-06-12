export type GetCommentsByGameResultSortType =
  (typeof GetCommentsByGameResultSortType)[keyof typeof GetCommentsByGameResultSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetCommentsByGameResultSortType = {
  LIKE_ASC: "LIKE_ASC",
  LIKE_DESC: "LIKE_DESC",
  OLD: "OLD",
  RECENT: "RECENT"
} as const
