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
  CustomBasedPageImplGameResourceResponse,
  CustomPageImplGameResourceResponse,
  GameResourceDeleteRequest,
  GameResourceRequest,
  GameResourceResponse,
  GetResourcesUsingCursorIdParams,
  GetResourcesUsingPageParams
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
 * @summary 게임 리소스 리스트 발급 API (CursorId)
 */
export const getResourcesUsingCursorId = (
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplGameResourceResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources`, method: "GET", params, signal },
    options
  )
}

export const getGetResourcesUsingCursorIdQueryKey = (gameId: number, params?: GetResourcesUsingCursorIdParams) => {
  return [`/api/v1/games/${gameId}/resources`, ...(params ? [params] : [])] as const
}

export const getGetResourcesUsingCursorIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingCursorId>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResourcesUsingCursorIdQueryKey(gameId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResourcesUsingCursorId>>> = ({ signal }) =>
    getResourcesUsingCursorId(gameId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResourcesUsingCursorIdQueryResult = NonNullable<Awaited<ReturnType<typeof getResourcesUsingCursorId>>>
export type GetResourcesUsingCursorIdQueryError = ErrorType<CustomPageImplGameResourceResponse>

export function useGetResourcesUsingCursorId<
  TData = Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params: undefined | GetResourcesUsingCursorIdParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingCursorId>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
          TError,
          Awaited<ReturnType<typeof getResourcesUsingCursorId>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourcesUsingCursorId<
  TData = Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingCursorId>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
          TError,
          Awaited<ReturnType<typeof getResourcesUsingCursorId>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourcesUsingCursorId<
  TData = Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingCursorId>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 리스트 발급 API (CursorId)
 */

export function useGetResourcesUsingCursorId<
  TData = Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingCursorId>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourcesUsingCursorIdQueryOptions(gameId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게임 리소스 리스트 발급 API (CursorId)
 */
export const prefetchGetResourcesUsingCursorId = async <
  TData = Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  queryClient: QueryClient,
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingCursorId>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetResourcesUsingCursorIdQueryOptions(gameId, params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 등록된 리소스를 선택 삭제할 수 있다.
 * @summary 게임 리소스 선택 삭제 API
 */
export const deleteSelectResources = (
  gameId: number,
  gameResourceDeleteRequest: BodyType<GameResourceDeleteRequest>,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources`,
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      data: gameResourceDeleteRequest
    },
    options
  )
}

/**
 * 해당 게임방의 리소스 목록을 제공한다.
 * @summary 게임 리소스 리스트 발급 API (Page)
 */
export const getResourcesUsingPage = (
  gameId: number,
  params?: GetResourcesUsingPageParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomBasedPageImplGameResourceResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/page`, method: "GET", params, signal },
    options
  )
}

export const getGetResourcesUsingPageQueryKey = (gameId: number, params?: GetResourcesUsingPageParams) => {
  return [`/api/v1/games/${gameId}/resources/page`, ...(params ? [params] : [])] as const
}

export const getGetResourcesUsingPageQueryOptions = <
  TData = Awaited<ReturnType<typeof getResourcesUsingPage>>,
  TError = ErrorType<CustomBasedPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingPageParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingPage>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResourcesUsingPageQueryKey(gameId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResourcesUsingPage>>> = ({ signal }) =>
    getResourcesUsingPage(gameId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getResourcesUsingPage>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResourcesUsingPageQueryResult = NonNullable<Awaited<ReturnType<typeof getResourcesUsingPage>>>
export type GetResourcesUsingPageQueryError = ErrorType<CustomBasedPageImplGameResourceResponse>

export function useGetResourcesUsingPage<
  TData = Awaited<ReturnType<typeof getResourcesUsingPage>>,
  TError = ErrorType<CustomBasedPageImplGameResourceResponse>
>(
  gameId: number,
  params: undefined | GetResourcesUsingPageParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingPage>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResourcesUsingPage>>,
          TError,
          Awaited<ReturnType<typeof getResourcesUsingPage>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourcesUsingPage<
  TData = Awaited<ReturnType<typeof getResourcesUsingPage>>,
  TError = ErrorType<CustomBasedPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingPageParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingPage>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResourcesUsingPage>>,
          TError,
          Awaited<ReturnType<typeof getResourcesUsingPage>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourcesUsingPage<
  TData = Awaited<ReturnType<typeof getResourcesUsingPage>>,
  TError = ErrorType<CustomBasedPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingPageParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingPage>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 리스트 발급 API (Page)
 */

export function useGetResourcesUsingPage<
  TData = Awaited<ReturnType<typeof getResourcesUsingPage>>,
  TError = ErrorType<CustomBasedPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingPageParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingPage>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourcesUsingPageQueryOptions(gameId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게임 리소스 리스트 발급 API (Page)
 */
export const prefetchGetResourcesUsingPage = async <
  TData = Awaited<ReturnType<typeof getResourcesUsingPage>>,
  TError = ErrorType<CustomBasedPageImplGameResourceResponse>
>(
  queryClient: QueryClient,
  gameId: number,
  params?: GetResourcesUsingPageParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingPage>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetResourcesUsingPageQueryOptions(gameId, params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 해당 게임방의 리소스 총 갯수를 반환함.
 * @summary 게임방 내 리소스 총 갯수 반환 API
 */
export const getCountResourcesInGames = (
  gameId: number,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<number>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/count`, method: "GET", signal },
    options
  )
}

export const getGetCountResourcesInGamesQueryKey = (gameId: number) => {
  return [`/api/v1/games/${gameId}/resources/count`] as const
}

export const getGetCountResourcesInGamesQueryOptions = <
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetCountResourcesInGamesQueryKey(gameId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getCountResourcesInGames>>> = ({ signal }) =>
    getCountResourcesInGames(gameId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getCountResourcesInGames>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetCountResourcesInGamesQueryResult = NonNullable<Awaited<ReturnType<typeof getCountResourcesInGames>>>
export type GetCountResourcesInGamesQueryError = ErrorType<unknown>

export function useGetCountResourcesInGames<
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCountResourcesInGames>>,
          TError,
          Awaited<ReturnType<typeof getCountResourcesInGames>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCountResourcesInGames<
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCountResourcesInGames>>,
          TError,
          Awaited<ReturnType<typeof getCountResourcesInGames>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCountResourcesInGames<
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임방 내 리소스 총 갯수 반환 API
 */

export function useGetCountResourcesInGames<
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetCountResourcesInGamesQueryOptions(gameId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게임방 내 리소스 총 갯수 반환 API
 */
export const prefetchGetCountResourcesInGames = async <
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetCountResourcesInGamesQueryOptions(gameId, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}
