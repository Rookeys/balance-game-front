import type { GameCommentLikeRequestSortType } from "./gameCommentLikeRequestSortType"

export interface GameCommentLikeRequest {
  /** 댓글 종류 */
  sortType: GameCommentLikeRequestSortType
  liked?: boolean
}
