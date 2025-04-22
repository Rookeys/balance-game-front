import type { GetResourcesUsingCursorIdSortType } from "./getResourcesUsingCursorIdSortType"

export type GetResourcesUsingCursorIdParams = {
  /**
   * 커서 ID (페이징 처리용)
   */
  cursorId?: number
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
  sortType?: GetResourcesUsingCursorIdSortType
}
