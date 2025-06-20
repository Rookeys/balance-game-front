/**
 * 신고 유형
 */
export type UserReportRequestTargetType = (typeof UserReportRequestTargetType)[keyof typeof UserReportRequestTargetType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserReportRequestTargetType = {
  USER: "USER",
  GAME: "GAME",
  RESOURCE: "RESOURCE",
  RESULT_COMMENT: "RESULT_COMMENT",
  RESOURCE_COMMENT: "RESOURCE_COMMENT"
} as const
