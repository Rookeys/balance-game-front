import type { GameReportRequestTargetType } from "./gameReportRequestTargetType"

export interface GameReportRequest {
  /** 신고 유형 */
  targetType: GameReportRequestTargetType
  /**
   * 신고 사유 리스트
   * @minItems 1
   * @maxItems 2147483647
   */
  reasons?: string[]
  /** 기타 상세 내용 */
  etcReason?: string
}
