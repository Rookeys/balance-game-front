export type GetParentCommentsByGameResourceSortType =
  (typeof GetParentCommentsByGameResourceSortType)[keyof typeof GetParentCommentsByGameResourceSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetParentCommentsByGameResourceSortType = {
  LIKE_ASC: "LIKE_ASC",
  LIKE_DESC: "LIKE_DESC",
  OLD: "OLD",
  RECENT: "RECENT"
} as const
