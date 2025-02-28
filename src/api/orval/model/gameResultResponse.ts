import type { GameResultResponseType } from "./gameResultResponseType"

export interface GameResultResponse {
  /** 리소스 ID */
  resourceId?: number
  /** 리소스 제목 */
  title?: string
  /** Image 인지 Youtube Link 인지 구분하는 Enum */
  type?: GameResultResponseType
  /** Image / Youtube Link */
  content?: string
  /** Youtube Link 시작 시간 */
  startSec?: number
  /** Youtube Link 끝 시간 */
  endSec?: number
  /** 우승 횟수 */
  winningNums?: number
  /** 게임 진행 횟수 */
  totalPlayNums?: number
}
