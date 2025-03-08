import type { GameListSelectionResponse } from "./gameListSelectionResponse"

export interface GameListResponse {
  /** 게임방 ID */
  roomId?: number
  /** 제작자 닉네임 */
  nickname?: string
  /** 게임 타이틀 */
  title?: string
  /** 설명 */
  description?: string
  /** 총 플레이 횟수 */
  totalPlayNums?: number
  leftSelection?: GameListSelectionResponse
  rightSelection?: GameListSelectionResponse
}
