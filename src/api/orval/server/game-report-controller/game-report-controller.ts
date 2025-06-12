import type { GameCommentReportRequest, GameReportRequest } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 정책에 맞지 않는 리소스를 신고함.
 * @summary 리소스 신고 API
 */
export const submitGameResourcesReport = (
  gameId: number,
  resourceId: number,
  gameReportRequest: BodyType<GameReportRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}/report`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameReportRequest,
      signal
    },
    options
  )
}

/**
 * 정책에 맞지 않는 게임방을 신고함.
 * @summary 게임방 신고 API
 */
export const submitGamesReport = (
  gameId: number,
  gameReportRequest: BodyType<GameReportRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/report`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameReportRequest,
      signal
    },
    options
  )
}

/**
 * 정책에 맞지 않는 댓글을 신고함.
 * @summary 댓글 신고 API
 */
export const submitGameCommentsReport = (
  gameId: number,
  gameCommentReportRequest: BodyType<GameCommentReportRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/comments/report`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameCommentReportRequest,
      signal
    },
    options
  )
}
