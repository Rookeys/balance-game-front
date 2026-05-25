import type { GetMainGameListCategory } from "./getMainGameListCategory"
import type { GetMainGameListSortType } from "./getMainGameListSortType"

export type GetMainGameListParams = {
  /**
   * 커서 ID (페이징 처리용)
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
  category?: GetMainGameListCategory
  /**
   * 정렬 방식
   */
  sortType?: GetMainGameListSortType
  /**
   * 팔로잉한 유저의 게임만 조회 (true: 팔로잉 게임만, false/null: 전체)
   */
  followingOnly?: boolean
}
