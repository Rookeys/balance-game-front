import type { GameListSelectionResponseType } from "./gameListSelectionResponseType"

/**
 * 오른쪽 선택지
 */
export interface GameListSelectionResponse {
  /** 리소스 ID */
  id?: number
  /** 선택지 타이틀 */
  title?: string
  /** 미디어 타입 */
  type?: GameListSelectionResponseType
  /** 이미지 / 유튜브 링크 URL */
  content?: string
}
