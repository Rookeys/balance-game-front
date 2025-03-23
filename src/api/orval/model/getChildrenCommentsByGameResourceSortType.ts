export type GetChildrenCommentsByGameResourceSortType =
  (typeof GetChildrenCommentsByGameResourceSortType)[keyof typeof GetChildrenCommentsByGameResourceSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetChildrenCommentsByGameResourceSortType = {
  LIKE_ASC: "LIKE_ASC",
  LIKE_DESC: "LIKE_DESC",
  OLD: "OLD",
  RECENT: "RECENT"
} as const
