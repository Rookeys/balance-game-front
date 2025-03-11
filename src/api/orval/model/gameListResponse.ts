import type { UserMainResponse } from "./userMainResponse"
import type { GameListSelectionResponse } from "./gameListSelectionResponse"

export interface GameListResponse {
  /** 게임방 ID */
  roomId?: number
  /** 게임 타이틀 */
  title?: string
  /** 설명 */
  description?: string
  /** 총 플레이 횟수 */
  totalPlayNums?: number
  /** HOT 태그를 위한 플레이 횟수 */
  weekPlayNums?: number
  /** 제작일 */
  createdAt?: string
  userResponse?: UserMainResponse
  leftSelection?: GameListSelectionResponse
  rightSelection?: GameListSelectionResponse
}
