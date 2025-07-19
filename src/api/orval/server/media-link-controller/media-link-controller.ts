import type { AutoLinkRequest, LinkRequest } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 유튜브 URL과 시작, 끝 초를 저장함.
 * @summary 유튜브 링크 저장 API
 */
export const saveLink = (
  gameId: number,
  linkRequest: BodyType<LinkRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/media/links`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: linkRequest,
      signal
    },
    options
  )
}

/**
 * 자동으로 유튜브 URL과 시작, 끝 초를 저장함.
 * @summary 유튜브 링크 자동 저장 API
 */
export const autoSaveLink = (
  gameId: number,
  autoLinkRequest: BodyType<AutoLinkRequest[]>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/media/links/auto`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: autoLinkRequest,
      signal
    },
    options
  )
}
