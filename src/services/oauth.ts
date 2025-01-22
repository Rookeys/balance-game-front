import { axiosInstance, configuration } from "@/api/axios-instance"
import type { AxiosResponse } from "axios"
import type { OAuthControllerApiLoginRequest } from "balance-game-api/dist/api/oauth-controller-api"
import { OAuthControllerApi } from "balance-game-api/dist/api/oauth-controller-api"
import type { TokenResponse } from "balance-game-api/dist/models/token-response"

export const postUsersLogin = async (payload: OAuthControllerApiLoginRequest): Promise<TokenResponse> => {
  return new OAuthControllerApi(configuration, undefined, axiosInstance)
    .login(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postUsersLoginResponseAllData = async (
  payload: OAuthControllerApiLoginRequest
): Promise<AxiosResponse<TokenResponse>> => {
  return new OAuthControllerApi(configuration, undefined, axiosInstance)
    .login(payload)
    .then((res) => res) // headers 값 조회를 위해 res.data
    .catch((error: any) => {
      throw error
    })
}

export const postUsersRefresh = async (): Promise<TokenResponse> => {
  return new OAuthControllerApi(configuration, undefined, axiosInstance)
    .refresh()
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postUsersLogout = async (): Promise<boolean> => {
  return new OAuthControllerApi(configuration, undefined, axiosInstance)
    .logout()
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
