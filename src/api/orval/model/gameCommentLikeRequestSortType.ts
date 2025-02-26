/**
 * 댓글 종류
 */
export type GameCommentLikeRequestSortType =
  (typeof GameCommentLikeRequestSortType)[keyof typeof GameCommentLikeRequestSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameCommentLikeRequestSortType = {
  RESOURCE: "RESOURCE",
  RESULT: "RESULT"
} as const
