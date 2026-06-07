import type { GetMyGameListSearchType } from "./getMyGameListSearchType"
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
   * 검색어
   */
  search?: string
  /**
   * 검색 타입 (TITLE: 제목, NICKNAME: 닉네임)
   */
  searchType?: GetMyGameListSearchType
  /**
   * 카테고리
   */
  category?: GetMyGameListCategory
  /**
   * 정렬 방식
   */
  sortType?: GetMyGameListSortType
}
