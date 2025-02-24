import type { GamePlayResourceLinkResponse } from "./gamePlayResourceLinkResponse"

/**
 * 오른쪽 리소스 정보
 */
export interface GamePlayResourceResponse {
  /** 리소스 ID */
  resourceId?: number
  /** 리소스 제목 */
  title?: string
  /** 이미지 URL */
  fileUrl?: string
  gameResourceLink?: GamePlayResourceLinkResponse
}
