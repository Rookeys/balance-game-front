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
import type { GetMyGameListParams, PageGameListResponse, UserRequest, UserResponse } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType, BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 프로필 정보를 출력합니다.
 * @summary 프로필 정보 출력 API
 */
export const getProfile = (options?: SecondParameter<typeof customServerInstance>, signal?: AbortSignal) => {
  return customServerInstance<UserResponse>({ url: `/api/v1/users/profile`, method: "GET", signal }, options)
}

export const getGetProfileQueryKey = () => {
  return [`/api/v1/users/profile`] as const
}

export const getGetProfileQueryOptions = <
  TData = Awaited<ReturnType<typeof getProfile>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customServerInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetProfileQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getProfile>>> = ({ signal }) =>
    getProfile(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getProfile>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetProfileQueryResult = NonNullable<Awaited<ReturnType<typeof getProfile>>>
export type GetProfileQueryError = ErrorType<unknown>

export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options: {
  query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>> &
    Pick<
      DefinedInitialDataOptions<Awaited<ReturnType<typeof getProfile>>, TError, Awaited<ReturnType<typeof getProfile>>>,
      "initialData"
    >
  request?: SecondParameter<typeof customServerInstance>
}): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>> &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getProfile>>,
        TError,
        Awaited<ReturnType<typeof getProfile>>
      >,
      "initialData"
    >
  request?: SecondParameter<typeof customServerInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customServerInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 프로필 정보 출력 API
 */

export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customServerInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetProfileQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 프로필 정보 출력 API
 */
export const prefetchGetProfile = async <TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(
  queryClient: QueryClient,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetProfileQueryOptions(options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 프로필 정보를 수정합니다.
 * @summary 프로필 정보 수정 API
 */
export const updateProfile = (
  userRequest: BodyType<UserRequest>,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<string>(
    { url: `/api/v1/users/profile`, method: "PUT", headers: { "Content-Type": "application/json" }, data: userRequest },
    options
  )
}

/**
 * 내가 만든 게임들을 무한 스크롤 형식으로 확인 가능.
 * @summary 내가 만든 게임 리스트 확인 API
 */
export const getMyGameList = (
  params?: GetMyGameListParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<PageGameListResponse>(
    { url: `/api/v1/users/games`, method: "GET", params, signal },
    options
  )
}

export const getGetMyGameListQueryKey = (params?: GetMyGameListParams) => {
  return [`/api/v1/users/games`, ...(params ? [params] : [])] as const
}

export const getGetMyGameListQueryOptions = <
  TData = Awaited<ReturnType<typeof getMyGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetMyGameListQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getMyGameList>>> = ({ signal }) =>
    getMyGameList(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getMyGameList>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetMyGameListQueryResult = NonNullable<Awaited<ReturnType<typeof getMyGameList>>>
export type GetMyGameListQueryError = ErrorType<unknown>

export function useGetMyGameList<TData = Awaited<ReturnType<typeof getMyGameList>>, TError = ErrorType<unknown>>(
  params: undefined | GetMyGameListParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getMyGameList>>,
          TError,
          Awaited<ReturnType<typeof getMyGameList>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMyGameList<TData = Awaited<ReturnType<typeof getMyGameList>>, TError = ErrorType<unknown>>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getMyGameList>>,
          TError,
          Awaited<ReturnType<typeof getMyGameList>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMyGameList<TData = Awaited<ReturnType<typeof getMyGameList>>, TError = ErrorType<unknown>>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 내가 만든 게임 리스트 확인 API
 */

export function useGetMyGameList<TData = Awaited<ReturnType<typeof getMyGameList>>, TError = ErrorType<unknown>>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetMyGameListQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 내가 만든 게임 리스트 확인 API
 */
export const prefetchGetMyGameList = async <
  TData = Awaited<ReturnType<typeof getMyGameList>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetMyGameListQueryOptions(params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}
