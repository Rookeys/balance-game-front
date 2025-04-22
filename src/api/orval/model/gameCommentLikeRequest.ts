import type { GameCommentLikeRequestSortType } from "./gameCommentLikeRequestSortType"

export interface GameCommentLikeRequest {
  /** 좋아요 신청/취소 */
  existsLiked: boolean
  /** 댓글 종류 */
  sortType: GameCommentLikeRequestSortType
}
