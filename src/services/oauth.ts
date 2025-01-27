import { axiosInstance, configuration } from "@/api/axios-instance"
import {
  OAuthControllerApi,
  type OAuthControllerApiKakaoLoginRequest,
  type OAuthControllerApiLoginRequest
} from "balance-game-api/dist/api/oauth-controller-api"
import { LoginResponse } from "balance-game-api/dist/models/login-response"
import type { TokenResponse } from "balance-game-api/dist/models/token-response"

export const postUsersLogin = async (payload: OAuthControllerApiLoginRequest): Promise<LoginResponse> => {
  return new OAuthControllerApi(configuration, undefined, axiosInstance)
    .login(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postUsersLoginKakao = async (payload: OAuthControllerApiKakaoLoginRequest): Promise<LoginResponse> => {
  return new OAuthControllerApi(configuration, undefined, axiosInstance)
    .kakaoLogin(payload)
    .then((res) => res.data)
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
