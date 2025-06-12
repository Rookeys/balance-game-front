import type { GameDetailResponseCategoriesItem } from "./gameDetailResponseCategoriesItem"
import type { UserMainResponse } from "./userMainResponse"
import type { GameListSelectionResponse } from "./gameListSelectionResponse"

export interface GameDetailResponse {
  /** 게임 타이틀 */
  title?: string
  /** 설명 */
  description?: string
  /** 썸네일 블라인드 여부 */
  existsBlind?: boolean
  /** 게임 제작자 본인 확인 */
  existsMine?: boolean
  /** 카테고리 */
  categories?: GameDetailResponseCategoriesItem[]
  /** 총 플레이 횟수 */
  totalPlayNums?: number
  /** 총 리소스 갯수 */
  totalResourceNums?: number
  /** 제작일 */
  createdAt?: string
  /** 수정일 */
  updatedAt?: string
  userResponse?: UserMainResponse
  leftSelection?: GameListSelectionResponse
  rightSelection?: GameListSelectionResponse
}
