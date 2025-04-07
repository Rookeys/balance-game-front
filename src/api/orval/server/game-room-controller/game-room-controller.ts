import type { GameRequest } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 게임방의 설정들을 변경 가능.
 * @summary 게임방 설정 업데이트 API
 */
export const updateGameStatus = (
  gameId: number,
  gameRequest: BodyType<GameRequest>,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: gameRequest
    },
    options
  )
}

/**
 * 게임방을 삭제 가능.
 * @summary 게임방 삭제 API
 */
export const deleteGame = (gameId: number, options?: SecondParameter<typeof customServerInstance>) => {
  return customServerInstance<boolean>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}`, method: "DELETE" },
    options
  )
}

/**
 * 게임방의 기본적인 설정들을 받아 생성함.
 * @summary 게임방 생성 API
 */
export const saveGame = (
  gameRequest: BodyType<GameRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<number>(
    {
      url: `/api/v1/games`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameRequest,
      signal
    },
    options
  )
}
