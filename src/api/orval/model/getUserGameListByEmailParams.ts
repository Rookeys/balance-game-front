import type { GetUserGameListByEmailSearchType } from "./getUserGameListByEmailSearchType"
import type { GetUserGameListByEmailCategory } from "./getUserGameListByEmailCategory"
import type { GetUserGameListByEmailSortType } from "./getUserGameListByEmailSortType"

export type GetUserGameListByEmailParams = {
  /**
   * 조회할 사용자 이메일
   */
  email: string
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
  searchType?: GetUserGameListByEmailSearchType
  /**
   * 카테고리
   */
  category?: GetUserGameListByEmailCategory
  /**
   * 정렬 방식
   */
  sortType?: GetUserGameListByEmailSortType
}
