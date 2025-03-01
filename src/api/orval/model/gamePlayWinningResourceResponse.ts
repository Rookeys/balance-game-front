import type { GamePlayWinningResourceResponseType } from "./gamePlayWinningResourceResponseType"

/**
 * 오른쪽 리소스 정보
 */
export interface GamePlayWinningResourceResponse {
  /** 리소스 ID */
  resourceId?: number
  /** 리소스 제목 */
  title?: string
  /** 미디어 타입 */
  type?: GamePlayWinningResourceResponseType
  /** 이미지 / 유튜브 링크 URL */
  content?: string
  /** 유튜브 URL 시작 초 */
  startSec?: number
  /** 유튜브 URL 끝 초 */
  endSec?: number
}
