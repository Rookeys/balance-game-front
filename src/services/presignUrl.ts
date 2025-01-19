import { axiosInstance, configuration } from "@/api/axios-instance"
import type {
  PresignedURLControllerApiGetPreSignedUrlForUserRequest,
  PresignedURLControllerApiGetPreSignedUrlRequest
} from "balance-game-api/dist/api/presigned-urlcontroller-api"
import { PresignedURLControllerApi } from "balance-game-api/dist/api/presigned-urlcontroller-api"

export const postMediaSingle = async (
  payload: PresignedURLControllerApiGetPreSignedUrlForUserRequest
): Promise<string> => {
  return new PresignedURLControllerApi(configuration, undefined, axiosInstance)
    .getPreSignedUrlForUser(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postMediaMultiple = async (
  payload: PresignedURLControllerApiGetPreSignedUrlRequest
): Promise<Array<string>> => {
  return new PresignedURLControllerApi(configuration, undefined, axiosInstance)
    .getPreSignedUrl(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
