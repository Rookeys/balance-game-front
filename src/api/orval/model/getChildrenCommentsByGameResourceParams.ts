import type { GetChildrenCommentsByGameResourceSortType } from "./getChildrenCommentsByGameResourceSortType"

export type GetChildrenCommentsByGameResourceParams = {
  /**
   * 커서 ID (페이징 처리용)
   */
  cursorId?: number
  /**
   * 한 페이지 당 출력 개수
   */
  size?: number
  /**
   * 검색할 댓글 내용
   */
  content?: string
  /**
   * 정렬 방식
   */
  sortType?: GetChildrenCommentsByGameResourceSortType
}
