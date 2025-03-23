import type { GameRequestAccessType } from "./gameRequestAccessType"
import type { GameRequestCategory } from "./gameRequestCategory"

export interface GameRequest {
  /** 방 제목 */
  title: string
  /** 방 설명 */
  description?: string
  /** 접근 레벨 설정 */
  accessType: GameRequestAccessType
  /** 초대 코드 */
  inviteCode?: string
  /** 카테고리 설정 */
  category: GameRequestCategory
  namePrivate?: boolean
  blind?: boolean
}
