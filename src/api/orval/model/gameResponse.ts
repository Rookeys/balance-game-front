import type { GameResponseAccessType } from "./gameResponseAccessType"
import type { GameResponseCategoriesItem } from "./gameResponseCategoriesItem"

export interface GameResponse {
  /** 게임방 ID */
  roomId?: number
  /** 게임 타이틀 */
  title?: string
  /** 설명 */
  description?: string
  /** 익명 여부 */
  existsNamePrivate?: boolean
  /** 썸네일 블라인드 여부 */
  existsBlind?: boolean
  /** 접근 권한 */
  accessType?: GameResponseAccessType
  /** 초대 코드 */
  inviteCode?: string
  /** 카테고리 설정 */
  categories?: GameResponseCategoriesItem[]
}
