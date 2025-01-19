import { axiosInstance, configuration } from "@/api/axios-instance"
import type { OAuthControllerApiLoginRequest } from "balance-game-api/dist/api/oauth-controller-api"
import { OAuthControllerApi } from "balance-game-api/dist/api/oauth-controller-api"

export const postUserLogin = async (payload: OAuthControllerApiLoginRequest): Promise<string> => {
  return new OAuthControllerApi(configuration, undefined, axiosInstance)
    .login(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postUserReissue = async (): Promise<string> => {
  return new OAuthControllerApi(configuration, undefined, axiosInstance)
    .reissue()
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postUserLogout = async (): Promise<string> => {
  return new OAuthControllerApi(configuration, undefined, axiosInstance)
    .logout()
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
