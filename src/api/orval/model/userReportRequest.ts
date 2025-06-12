import type { UserReportRequestTargetType } from "./userReportRequestTargetType"

export interface UserReportRequest {
  /** 신고 유저 닉네임 */
  nickname: string
  /** 신고 유형 */
  targetType: UserReportRequestTargetType
  /**
   * 신고 사유 리스트
   * @minItems 1
   * @maxItems 2147483647
   */
  reasons?: string[]
  /** 기타 상세 내용 */
  etcReason?: string
}
