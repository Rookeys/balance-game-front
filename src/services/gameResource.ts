import { axiosInstance, configuration } from "@/api/axios-instance"
import type {
  GameResourceControllerApiDeleteResourceRequest,
  GameResourceControllerApiGetResourcesRequest,
  GameResourceControllerApiUpdateResourceRequest
} from "balance-game-api/dist/api/game-resource-controller-api"
import { GameResourceControllerApi } from "balance-game-api/dist/api/game-resource-controller-api"
import type { PageGameResourceResponse } from "balance-game-api/dist/models/page-game-resource-response"

export const getGamesResource = async (
  payload: GameResourceControllerApiGetResourcesRequest
): Promise<PageGameResourceResponse> => {
  return new GameResourceControllerApi(configuration, undefined, axiosInstance)
    .getResources(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const putGamesResource = async (payload: GameResourceControllerApiUpdateResourceRequest): Promise<boolean> => {
  return new GameResourceControllerApi(configuration, undefined, axiosInstance)
    .updateResource(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const deleteGamesResource = async (
  payload: GameResourceControllerApiDeleteResourceRequest
): Promise<boolean> => {
  return new GameResourceControllerApi(configuration, undefined, axiosInstance)
    .deleteResource(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
