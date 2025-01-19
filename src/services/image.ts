import { axiosInstance, configuration } from "@/api/axios-instance"
import type { ImageControllerApiSaveImageForGameRequest } from "balance-game-api/dist/api/image-controller-api"
import { ImageControllerApi } from "balance-game-api/dist/api/image-controller-api"

export const postImage = async (payload: ImageControllerApiSaveImageForGameRequest): Promise<string> => {
  return new ImageControllerApi(configuration, undefined, axiosInstance)
    .saveImageForGame(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
