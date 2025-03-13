import type { GameCommentLikeRequest } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 댓글의 좋아요를 올리거나 취소한다.
 * @summary 댓글 좋아요 처리 API
 */
export const toggleLike = (
  commentId: number,
  gameCommentLikeRequest: BodyType<GameCommentLikeRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/comments/${encodeURIComponent(String(commentId))}/likes`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameCommentLikeRequest,
      signal
    },
    options
  )
}
