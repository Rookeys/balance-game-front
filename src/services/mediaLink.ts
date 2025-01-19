import { axiosInstance, configuration } from "@/api/axios-instance"
import { LinkControllerApi } from 'balance-game-api/dist/api/link-controller-api'
import type { LinkControllerApiSaveLinkRequest } from "balance-game-api/dist/api/link-controller-api"

export const postImage = async (payload: LinkControllerApiSaveLinkRequest): Promise<string> => {
  return new LinkControllerApi(configuration, undefined, axiosInstance)
    .saveLink(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
