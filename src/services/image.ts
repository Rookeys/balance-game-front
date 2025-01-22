import { axiosInstance, configuration } from "@/api/axios-instance"
import {
  ImageControllerApi,
  type ImageControllerApiSaveImageForGameRequest
} from "balance-game-api/dist/api/image-controller-api"

export const postImages = async (payload: ImageControllerApiSaveImageForGameRequest): Promise<boolean> => {
  return new ImageControllerApi(configuration, undefined, axiosInstance)
    .saveImageForGame(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
