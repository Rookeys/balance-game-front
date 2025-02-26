import { useMutation } from "@tanstack/react-query"
import type { MutationFunction, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import type { KakaoRequest, LoginRequest, LoginResponse, TokenResponse } from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType, BodyType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 토큰을 발급합니다.
 * @summary 테스트 전용 로그인 API
 */
export const testLogin = (options?: SecondParameter<typeof customClientInstance>, signal?: AbortSignal) => {
  return customClientInstance<LoginResponse>({ url: `/api/v1/users/test/login`, method: "POST", signal }, options)
}

export const getTestLoginMutationOptions = <TError = ErrorType<LoginResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof testLogin>>, TError, void, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof testLogin>>, TError, void, TContext> => {
  const mutationKey = ["testLogin"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof testLogin>>, void> = () => {
    return testLogin(requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type TestLoginMutationResult = NonNullable<Awaited<ReturnType<typeof testLogin>>>

export type TestLoginMutationError = ErrorType<LoginResponse>

/**
 * @summary 테스트 전용 로그인 API
 */
export const useTestLogin = <TError = ErrorType<LoginResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof testLogin>>, TError, void, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<Awaited<ReturnType<typeof testLogin>>, TError, void, TContext> => {
  const mutationOptions = getTestLoginMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * RefreshToken 으로 AccessToken 을 재발급합니다.
 * @summary 토큰 재발급 API
 */
export const refresh = (options?: SecondParameter<typeof customClientInstance>, signal?: AbortSignal) => {
  return customClientInstance<TokenResponse>({ url: `/api/v1/users/refresh`, method: "POST", signal }, options)
}

export const getRefreshMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof refresh>>, TError, void, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof refresh>>, TError, void, TContext> => {
  const mutationKey = ["refresh"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof refresh>>, void> = () => {
    return refresh(requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type RefreshMutationResult = NonNullable<Awaited<ReturnType<typeof refresh>>>

export type RefreshMutationError = ErrorType<unknown>

/**
 * @summary 토큰 재발급 API
 */
export const useRefresh = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof refresh>>, TError, void, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<Awaited<ReturnType<typeof refresh>>, TError, void, TContext> => {
  const mutationOptions = getRefreshMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 사용자를 로그 아웃 시킵니다.
 * @summary 로그 아웃 API
 */
export const logout = (options?: SecondParameter<typeof customClientInstance>, signal?: AbortSignal) => {
  return customClientInstance<boolean>({ url: `/api/v1/users/logout`, method: "POST", signal }, options)
}

export const getLogoutMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext> => {
  const mutationKey = ["logout"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof logout>>, void> = () => {
    return logout(requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type LogoutMutationResult = NonNullable<Awaited<ReturnType<typeof logout>>>

export type LogoutMutationError = ErrorType<unknown>

/**
 * @summary 로그 아웃 API
 */
export const useLogout = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<Awaited<ReturnType<typeof logout>>, TError, void, TContext> => {
  const mutationOptions = getLogoutMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 사용자의 로그인 정보를 받아 토큰을 발급합니다.
 * @summary 로그인(Next-Auth) API
 */
export const login = (
  loginRequest: BodyType<LoginRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<LoginResponse>(
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

export const getLoginMutationOptions = <TError = ErrorType<LoginResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, { data: BodyType<LoginRequest> }, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, { data: BodyType<LoginRequest> }, TContext> => {
  const mutationKey = ["login"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof login>>, { data: BodyType<LoginRequest> }> = (props) => {
    const { data } = props ?? {}

    return login(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>
export type LoginMutationBody = BodyType<LoginRequest>
export type LoginMutationError = ErrorType<LoginResponse>

/**
 * @summary 로그인(Next-Auth) API
 */
export const useLogin = <TError = ErrorType<LoginResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, { data: BodyType<LoginRequest> }, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<Awaited<ReturnType<typeof login>>, TError, { data: BodyType<LoginRequest> }, TContext> => {
  const mutationOptions = getLoginMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 사용자의 로그인 정보를 받아 토큰을 발급합니다.
 * @summary 카카오 로그인(서버 처리) API
 */
export const kakaoLogin = (
  kakaoRequest: BodyType<KakaoRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<LoginResponse>(
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

export const getKakaoLoginMutationOptions = <TError = ErrorType<LoginResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof kakaoLogin>>,
    TError,
    { data: BodyType<KakaoRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof kakaoLogin>>, TError, { data: BodyType<KakaoRequest> }, TContext> => {
  const mutationKey = ["kakaoLogin"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof kakaoLogin>>, { data: BodyType<KakaoRequest> }> = (
    props
  ) => {
    const { data } = props ?? {}

    return kakaoLogin(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type KakaoLoginMutationResult = NonNullable<Awaited<ReturnType<typeof kakaoLogin>>>
export type KakaoLoginMutationBody = BodyType<KakaoRequest>
export type KakaoLoginMutationError = ErrorType<LoginResponse>

/**
 * @summary 카카오 로그인(서버 처리) API
 */
export const useKakaoLogin = <TError = ErrorType<LoginResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof kakaoLogin>>,
    TError,
    { data: BodyType<KakaoRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<Awaited<ReturnType<typeof kakaoLogin>>, TError, { data: BodyType<KakaoRequest> }, TContext> => {
  const mutationOptions = getKakaoLoginMutationOptions(options)

  return useMutation(mutationOptions)
}
