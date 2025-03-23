import type { GameResponseAccessType } from "./gameResponseAccessType"
import type { GameResponseCategory } from "./gameResponseCategory"

export interface GameResponse {
  /** 게임방 ID */
  roomId?: number
  /** 게임 타이틀 */
  title?: string
  /** 설명 */
  description?: string
  /** 접근 권한 */
  accessType?: GameResponseAccessType
  /** 초대 코드 */
  inviteCode?: string
  /** 카테고리 설정 */
  category?: GameResponseCategory
  namePrivate?: boolean
  blind?: boolean
}
