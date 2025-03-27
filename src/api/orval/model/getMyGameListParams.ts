import type { GetMyGameListCategory } from "./getMyGameListCategory"
import type { GetMyGameListSortType } from "./getMyGameListSortType"

export type GetMyGameListParams = {
  /**
   * 커서 ID
   */
  cursorId?: number
  /**
   * 한 페이지 당 출력 개수
   */
  size?: number
  /**
   * 검색할 내용
   */
  title?: string
  /**
   * 카테고리
   */
  category?: GetMyGameListCategory
  /**
   * 정렬 방식
   */
  sortType?: GetMyGameListSortType
}
