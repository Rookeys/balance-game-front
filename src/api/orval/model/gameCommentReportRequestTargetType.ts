/**
 * 신고 유형
 */
export type GameCommentReportRequestTargetType =
  (typeof GameCommentReportRequestTargetType)[keyof typeof GameCommentReportRequestTargetType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameCommentReportRequestTargetType = {
  USER: "USER",
  GAME: "GAME",
  RESOURCE: "RESOURCE",
  RESULT_COMMENT: "RESULT_COMMENT",
  RESOURCE_COMMENT: "RESOURCE_COMMENT"
} as const
