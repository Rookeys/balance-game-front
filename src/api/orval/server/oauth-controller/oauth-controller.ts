import type { KakaoRequest, LoginRequest, LoginResponse, TokenResponse } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 토큰을 발급합니다.
 * @summary 테스트 전용 로그인 API
 */
export const testLogin = (options?: SecondParameter<typeof customServerInstance>, signal?: AbortSignal) => {
  return customServerInstance<LoginResponse>({ url: `/api/v1/users/test/login`, method: "POST", signal }, options)
}

/**
 * RefreshToken 으로 AccessToken 을 재발급합니다.
 * @summary 토큰 재발급 API
 */
export const refresh = (options?: SecondParameter<typeof customServerInstance>, signal?: AbortSignal) => {
  return customServerInstance<TokenResponse>({ url: `/api/v1/users/refresh`, method: "POST", signal }, options)
}

/**
 * 사용자를 로그 아웃 시킵니다.
 * @summary 로그 아웃 API
 */
export const logout = (options?: SecondParameter<typeof customServerInstance>, signal?: AbortSignal) => {
  return customServerInstance<boolean>({ url: `/api/v1/users/logout`, method: "POST", signal }, options)
}

/**
 * 사용자의 로그인 정보를 받아 토큰을 발급합니다.
 * @summary 로그인(Next-Auth) API
 */
export const login = (
  loginRequest: BodyType<LoginRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<LoginResponse>(
    {
      url: `/api/v1/users/login`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: loginRequest,
      signal
    },
    options
  )
}

/**
 * 사용자의 로그인 정보를 받아 토큰을 발급합니다.
 * @summary 카카오 로그인(서버 처리) API
 */
export const kakaoLogin = (
  kakaoRequest: BodyType<KakaoRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<LoginResponse>(
    {
      url: `/api/v1/users/login/kakao`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: kakaoRequest,
      signal
    },
    options
  )
}
