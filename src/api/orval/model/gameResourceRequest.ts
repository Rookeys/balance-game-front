import type { GameResourceRequestType } from "./gameResourceRequestType"

export interface GameResourceRequest {
  /** 리소스 제목 */
  title?: string
  /** 미디어 타입 */
  type?: GameResourceRequestType
  /** 이미지 / 유튜브 링크 URL */
  content?: string
  /** 유튜브 URL 시작 초 설정 */
  startSec?: number
  /** 유튜브 URL 끝 초 설정 */
  endSec?: number
}
