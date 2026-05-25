import type { RecentPlayListResponseCategoriesItem } from "./recentPlayListResponseCategoriesItem"
import type { RecentPlayListResponseThumbnailType } from "./recentPlayListResponseThumbnailType"

export interface RecentPlayListResponse {
  /** 게임방 ID */
  roomId?: number
  /** 게임 타이틀 */
  title?: string
  /** 내가 선택한 리소스 ID */
  resourceId?: number
  /** 내가 선택한 리소스 타이틀 */
  resourceTitle?: string
  /** 썸네일 블라인드 여부 */
  existsBlind?: boolean
  /** 설명 */
  description?: string
  /** 카테고리 */
  categories?: RecentPlayListResponseCategoriesItem[]
  /** 썸네일 이미지 URL */
  thumbnailImageUrl?: string
  /** 썸네일 유튜브 URL */
  thumbnailLinkUrl?: string
  /** 썸네일 타입 (IMAGE, LINK) */
  thumbnailType?: RecentPlayListResponseThumbnailType
}
