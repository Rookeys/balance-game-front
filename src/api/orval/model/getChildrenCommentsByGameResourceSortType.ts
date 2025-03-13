export type GetChildrenCommentsByGameResourceSortType =
  (typeof GetChildrenCommentsByGameResourceSortType)[keyof typeof GetChildrenCommentsByGameResourceSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetChildrenCommentsByGameResourceSortType = {
  likeAsc: "likeAsc",
  likeDesc: "likeDesc",
  old: "old",
  resent: "resent"
} as const
