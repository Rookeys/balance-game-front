import type { GameResourceResponseType } from "./gameResourceResponseType"

export interface GameResourceResponse {
  /** 리소스 ID */
  resourceId?: number
  /** 리소스 제목 */
  title?: string
  /** 미디어 타입 */
  type?: GameResourceResponseType
  /** 사진 / 유튜브 URL */
  content?: string
  /** 유튜브 URL 시작 초 */
  startSec?: number
  /** 유튜브 URL 끝 초 */
  endSec?: number
  /** 우승 횟수 */
  winningNums?: number
  /** 게임 진행 횟수 */
  totalPlayNums?: number
}
