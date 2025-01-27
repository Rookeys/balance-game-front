import { axiosInstance, configuration } from "@/api/axios-instance"
import type { MediaLinkControllerApiSaveLinkRequest } from "balance-game-api/dist/api/media-link-controller-api"
import { MediaLinkControllerApi } from "balance-game-api/dist/api/media-link-controller-api"

export const postLinks = async (payload: MediaLinkControllerApiSaveLinkRequest): Promise<boolean> => {
  return new MediaLinkControllerApi(configuration, undefined, axiosInstance)
    .saveLink(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
