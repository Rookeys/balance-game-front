import { axiosInstance, configuration } from "@/api/axios-instance"
import type {
  PresignedUrlControllerApiGetPreSignedUrlForUserRequest,
  PresignedUrlControllerApiGetPreSignedUrlRequest
} from "balance-game-api/dist/api/presigned-url-controller-api"
import { PresignedUrlControllerApi } from "balance-game-api/dist/api/presigned-url-controller-api"

export const postMediaSingle = async (
  payload: PresignedUrlControllerApiGetPreSignedUrlForUserRequest
): Promise<string> => {
  return new PresignedUrlControllerApi(configuration, undefined, axiosInstance)
    .getPreSignedUrlForUser(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postMediaMultiple = async (
  payload: PresignedUrlControllerApiGetPreSignedUrlRequest
): Promise<Array<string>> => {
  return new PresignedUrlControllerApi(configuration, undefined, axiosInstance)
    .getPreSignedUrl(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
