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
   * 검색할 내용
   */
  title?: string
  /**
   * 카테고리
   */
  category?: GetUserGameListByEmailCategory
  /**
   * 정렬 방식
   */
  sortType?: GetUserGameListByEmailSortType
}
