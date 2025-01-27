import { axiosInstance, configuration } from "@/api/axios-instance"
import type {
  GameRoomControllerApiDeleteGameRequest,
  GameRoomControllerApiGetGameStatusRequest,
  GameRoomControllerApiSaveGameRequest,
  GameRoomControllerApiUpdateGameStatusRequest
} from "balance-game-api/dist/api/game-room-controller-api"
import { GameRoomControllerApi } from "balance-game-api/dist/api/game-room-controller-api"
import type { GameResponse } from "balance-game-api/dist/models/game-response"

export const getGamesRoom = async (payload: GameRoomControllerApiGetGameStatusRequest): Promise<GameResponse> => {
  return new GameRoomControllerApi(configuration, undefined, axiosInstance)
    .getGameStatus(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const putGamesRoom = async (payload: GameRoomControllerApiUpdateGameStatusRequest): Promise<boolean> => {
  return new GameRoomControllerApi(configuration, undefined, axiosInstance)
    .updateGameStatus(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postGamesRoom = async (payload: GameRoomControllerApiSaveGameRequest): Promise<number> => {
  return new GameRoomControllerApi(configuration, undefined, axiosInstance)
    .saveGame(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const deleteGamesRoom = async (payload: GameRoomControllerApiDeleteGameRequest): Promise<boolean> => {
  return new GameRoomControllerApi(configuration, undefined, axiosInstance)
    .deleteGame(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
