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
import type {
  CustomPageImplGameResourceResponse,
  GameResourceRequest,
  GameResourceResponse,
  GetResourcesParams
} from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType, BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 리소스의 데이터를 제공한다.
 * @summary 특정 게임 리소스 데이터 발급 API
 */
export const getResource = (
  gameId: number,
  resourceId: number,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<GameResourceResponse>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}`,
      method: "GET",
      signal
    },
    options
  )
}

export const getGetResourceQueryKey = (gameId: number, resourceId: number) => {
  return [`/api/v1/games/${gameId}/resources/${resourceId}`] as const
}

export const getGetResourceQueryOptions = <
  TData = Awaited<ReturnType<typeof getResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResourceQueryKey(gameId, resourceId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResource>>> = ({ signal }) =>
    getResource(gameId, resourceId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!(gameId && resourceId), ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getResource>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResourceQueryResult = NonNullable<Awaited<ReturnType<typeof getResource>>>
export type GetResourceQueryError = ErrorType<unknown>

export function useGetResource<TData = Awaited<ReturnType<typeof getResource>>, TError = ErrorType<unknown>>(
  gameId: number,
  resourceId: number,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResource>>,
          TError,
          Awaited<ReturnType<typeof getResource>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResource<TData = Awaited<ReturnType<typeof getResource>>, TError = ErrorType<unknown>>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResource>>,
          TError,
          Awaited<ReturnType<typeof getResource>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResource<TData = Awaited<ReturnType<typeof getResource>>, TError = ErrorType<unknown>>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 특정 게임 리소스 데이터 발급 API
 */

export function useGetResource<TData = Awaited<ReturnType<typeof getResource>>, TError = ErrorType<unknown>>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourceQueryOptions(gameId, resourceId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 특정 게임 리소스 데이터 발급 API
 */
export const prefetchGetResource = async <TData = Awaited<ReturnType<typeof getResource>>, TError = ErrorType<unknown>>(
  queryClient: QueryClient,
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetResourceQueryOptions(gameId, resourceId, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 리소스의 제목이나 URL 등을 수정할 수 있다.
 * @summary 게임 리소스 수정 API
 */
export const updateResource = (
  gameId: number,
  resourceId: number,
  gameResourceRequest: BodyType<GameResourceRequest>,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: gameResourceRequest
    },
    options
  )
}

/**
 * 등록된 리소스를 삭제할 수 있다.
 * @summary 게임 리소스 삭제 API
 */
export const deleteResource = (
  gameId: number,
  resourceId: number,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}`,
      method: "DELETE"
    },
    options
  )
}

/**
 * 해당 게임방의 리소스 목록을 제공한다.
 * @summary 게임 리소스 리스트 발급 API
 */
export const getResources = (
  gameId: number,
  params?: GetResourcesParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplGameResourceResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources`, method: "GET", params, signal },
    options
  )
}

export const getGetResourcesQueryKey = (gameId: number, params?: GetResourcesParams) => {
  return [`/api/v1/games/${gameId}/resources`, ...(params ? [params] : [])] as const
}

export const getGetResourcesQueryOptions = <
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResourcesQueryKey(gameId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResources>>> = ({ signal }) =>
    getResources(gameId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getResources>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResourcesQueryResult = NonNullable<Awaited<ReturnType<typeof getResources>>>
export type GetResourcesQueryError = ErrorType<CustomPageImplGameResourceResponse>

export function useGetResources<
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params: undefined | GetResourcesParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResources>>,
          TError,
          Awaited<ReturnType<typeof getResources>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResources<
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResources>>,
          TError,
          Awaited<ReturnType<typeof getResources>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResources<
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 리스트 발급 API
 */

export function useGetResources<
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourcesQueryOptions(gameId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게임 리소스 리스트 발급 API
 */
export const prefetchGetResources = async <
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  queryClient: QueryClient,
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetResourcesQueryOptions(gameId, params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}
