import { axiosInstance, configuration } from "@/api/axios-instance"
import type {
  GameResourceControllerApiDeleteResourceRequest,
  GameResourceControllerApiGetResourcesRequest,
  GameResourceControllerApiUpdateResourceRequest
} from "balance-game-api/dist/api/game-resource-controller-api"
import { GameResourceControllerApi } from "balance-game-api/dist/api/game-resource-controller-api"
import type { PageGameResourceResponse } from "balance-game-api/dist/models/page-game-resource-response"

export const getGameResource = async (
  payload: GameResourceControllerApiGetResourcesRequest
): Promise<PageGameResourceResponse> => {
  return new GameResourceControllerApi(configuration, undefined, axiosInstance)
    .getResources(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const putGameResource = async (payload: GameResourceControllerApiUpdateResourceRequest): Promise<string> => {
  return new GameResourceControllerApi(configuration, undefined, axiosInstance)
    .updateResource(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const deleteGameResource = async (payload: GameResourceControllerApiDeleteResourceRequest): Promise<string> => {
  return new GameResourceControllerApi(configuration, undefined, axiosInstance)
    .deleteResource(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
