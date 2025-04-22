import type { GetResultRankingUsingPageSortType } from "./getResultRankingUsingPageSortType"

export type GetResultRankingUsingPageParams = {
  /**
   * 페이지 번호
   */
  page?: number
  /**
   * 한 페이지 당 출력 개수
   */
  size?: number
  /**
   * 검색할 리소스 제목
   */
  title?: string
  /**
   * 정렬 방식
   */
  sortType?: GetResultRankingUsingPageSortType
}
