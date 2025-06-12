/**
 * 신고 유형
 */
export type GameReportRequestTargetType = (typeof GameReportRequestTargetType)[keyof typeof GameReportRequestTargetType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GameReportRequestTargetType = {
  USER: "USER",
  GAME: "GAME",
  RESOURCE: "RESOURCE",
  RESULT_COMMENT: "RESULT_COMMENT",
  RESOURCE_COMMENT: "RESOURCE_COMMENT"
} as const
