export type GetParentCommentsByGameResourceSortType =
  (typeof GetParentCommentsByGameResourceSortType)[keyof typeof GetParentCommentsByGameResourceSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetParentCommentsByGameResourceSortType = {
  likeAsc: "likeAsc",
  likeDesc: "likeDesc",
  idAsc: "idAsc",
  idDesc: "idDesc"
} as const
