import { axiosInstance, configuration } from "@/api/axios-instance"
import type { AxiosResponse } from "axios"
import {
  OAuthControllerApi,
  type OAuthControllerApiKakaoLoginRequest
} from "balance-game-api/dist/api/oauth-controller-api"
import type { TokenResponse } from "balance-game-api/dist/models/token-response"

export const postUsersLogin = async (payload: OAuthControllerApiKakaoLoginRequest): Promise<TokenResponse> => {
  return new OAuthControllerApi(configuration, undefined, axiosInstance)
    .kakaoLogin(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postUsersLoginResponseAllData = async (
  payload: OAuthControllerApiKakaoLoginRequest
): Promise<AxiosResponse<TokenResponse>> => {
  return new OAuthControllerApi(configuration, undefined, axiosInstance)
    .kakaoLogin(payload)
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
