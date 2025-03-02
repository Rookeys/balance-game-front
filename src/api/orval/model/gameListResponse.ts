import type { GameListSelectionResponse } from "./gameListSelectionResponse"

export interface GameListResponse {
  /** 게임방 ID */
  roomId?: number
  /** 게임 타이틀 */
  title?: string
  /** 설명 */
  description?: string
  leftSelection?: GameListSelectionResponse
  rightSelection?: GameListSelectionResponse
}
