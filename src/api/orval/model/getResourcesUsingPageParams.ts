import type { GetResourcesUsingPageSortType } from "./getResourcesUsingPageSortType"

export type GetResourcesUsingPageParams = {
  /**
   * 페이지 넘버
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
  sortType?: GetResourcesUsingPageSortType
}
