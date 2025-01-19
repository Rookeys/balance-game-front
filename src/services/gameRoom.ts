import { axiosInstance, configuration } from "@/api/axios-instance"
import type {
  GameRoomControllerApiDeleteGameRequest,
  GameRoomControllerApiGetGameStatusRequest,
  GameRoomControllerApiGetMyGameListRequest,
  GameRoomControllerApiSaveGameRequest,
  GameRoomControllerApiUpdateGameStatusRequest
} from "balance-game-api/dist/api/game-room-controller-api"
import { GameRoomControllerApi } from "balance-game-api/dist/api/game-room-controller-api"
import type { GameResponse } from "balance-game-api/dist/models/game-response"
import type { PageGameListResponse } from "balance-game-api/dist/models/page-game-list-response"

export const getGameRoom = async (payload: GameRoomControllerApiGetGameStatusRequest): Promise<GameResponse> => {
  return new GameRoomControllerApi(configuration, undefined, axiosInstance)
    .getGameStatus(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const putGameRoom = async (payload: GameRoomControllerApiUpdateGameStatusRequest): Promise<string> => {
  return new GameRoomControllerApi(configuration, undefined, axiosInstance)
    .updateGameStatus(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postGameRoom = async (payload: GameRoomControllerApiSaveGameRequest): Promise<number> => {
  return new GameRoomControllerApi(configuration, undefined, axiosInstance)
    .saveGame(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const deleteGameRoom = async (payload: GameRoomControllerApiDeleteGameRequest): Promise<string> => {
  return new GameRoomControllerApi(configuration, undefined, axiosInstance)
    .deleteGame(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const getGameRoomList = async (
  payload: GameRoomControllerApiGetMyGameListRequest
): Promise<PageGameListResponse> => {
  return new GameRoomControllerApi(configuration, undefined, axiosInstance)
    .getMyGameList(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
