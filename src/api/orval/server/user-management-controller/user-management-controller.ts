import { useQuery } from "@tanstack/react-query"
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult
} from "@tanstack/react-query"
import type { ExistsByNicknameParams, LoginResponse, SignUpRequest } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType, BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 유저의 정보를 입력받아 회원 가입을 처리합니다.
 * @summary 회원 가입 API
 */
export const signUp = (
  signUpRequest: BodyType<SignUpRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<LoginResponse>(
    {
      url: `/api/v1/users/signup`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signUpRequest,
      signal
    },
    options
  )
}

/**
 * 회원 탈퇴 요청을 처리합니다.
 * @summary 회원 탈퇴 API
 */
export const resign = (options?: SecondParameter<typeof customServerInstance>, signal?: AbortSignal) => {
  return customServerInstance<boolean>({ url: `/api/v1/users/resign`, method: "POST", signal }, options)
}

/**
 * 회원 탈퇴 요청을 취소합니다.
 * @summary 회원 탈퇴 취소 API
 */
export const cancelResign = (
  cancelResignBody: BodyType<string>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/users/cancel/resign`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: cancelResignBody,
      signal
    },
    options
  )
}

/**
 * 이름이 중복되었다면 True, 아니면 False 를 반환합니다.
 * @summary 중복 이름 확인 API
 */
export const existsByNickname = (
  params: ExistsByNicknameParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>({ url: `/api/v1/users/exists`, method: "GET", params, signal }, options)
}

export const getExistsByNicknameQueryKey = (params: ExistsByNicknameParams) => {
  return [`/api/v1/users/exists`, ...(params ? [params] : [])] as const
}

export const getExistsByNicknameQueryOptions = <
  TData = Awaited<ReturnType<typeof existsByNickname>>,
  TError = ErrorType<unknown>
>(
  params: ExistsByNicknameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof existsByNickname>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getExistsByNicknameQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof existsByNickname>>> = ({ signal }) =>
    existsByNickname(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof existsByNickname>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type ExistsByNicknameQueryResult = NonNullable<Awaited<ReturnType<typeof existsByNickname>>>
export type ExistsByNicknameQueryError = ErrorType<unknown>

export function useExistsByNickname<TData = Awaited<ReturnType<typeof existsByNickname>>, TError = ErrorType<unknown>>(
  params: ExistsByNicknameParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof existsByNickname>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof existsByNickname>>,
          TError,
          Awaited<ReturnType<typeof existsByNickname>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useExistsByNickname<TData = Awaited<ReturnType<typeof existsByNickname>>, TError = ErrorType<unknown>>(
  params: ExistsByNicknameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof existsByNickname>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof existsByNickname>>,
          TError,
          Awaited<ReturnType<typeof existsByNickname>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useExistsByNickname<TData = Awaited<ReturnType<typeof existsByNickname>>, TError = ErrorType<unknown>>(
  params: ExistsByNicknameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof existsByNickname>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 중복 이름 확인 API
 */

export function useExistsByNickname<TData = Awaited<ReturnType<typeof existsByNickname>>, TError = ErrorType<unknown>>(
  params: ExistsByNicknameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof existsByNickname>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getExistsByNicknameQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 중복 이름 확인 API
 */
export const prefetchExistsByNickname = async <
  TData = Awaited<ReturnType<typeof existsByNickname>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  params: ExistsByNicknameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof existsByNickname>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getExistsByNicknameQueryOptions(params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}
