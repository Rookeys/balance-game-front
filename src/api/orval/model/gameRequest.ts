import type { GameRequestAccessType } from "./gameRequestAccessType"
import type { GameRequestCategoriesItem } from "./gameRequestCategoriesItem"

export interface GameRequest {
  /** 방 제목 */
  title: string
  /** 방 설명 */
  description?: string
  /** 익명 여부 */
  isNamePrivate: boolean
  /** 썸네일 블라인드 여부 */
  isBlind: boolean
  /** 접근 레벨 설정 */
  accessType: GameRequestAccessType
  /** 초대 코드 */
  inviteCode?: string
  /** 카테고리 설정 */
  categories: GameRequestCategoriesItem[]
}
