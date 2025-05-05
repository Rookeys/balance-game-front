import type { GameCommentReportRequestTargetType } from "./gameCommentReportRequestTargetType"

export interface GameCommentReportRequest {
  /** 부모 ID */
  parentId?: number
  /** 신고 타겟 ID */
  targetId: number
  /** 신고 유형 */
  targetType: GameCommentReportRequestTargetType
  /**
   * 신고 사유 리스트
   * @minItems 1
   * @maxItems 2147483647
   */
  reasons?: string[]
  /** 기타 상세 내용 */
  etcReason?: string
}
