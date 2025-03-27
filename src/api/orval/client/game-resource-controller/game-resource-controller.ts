import { useInfiniteQuery, useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query"
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseInfiniteQueryResult,
  DefinedUseQueryResult,
  InfiniteData,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult
} from "@tanstack/react-query"
import type {
  CustomPageImplGameResourceResponse,
  GameResourceDeleteRequest,
  GameResourceRequest,
  GameResourceResponse,
  GetResourcesParams
} from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType, BodyType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 리소스의 데이터를 제공한다.
 * @summary 특정 게임 리소스 데이터 발급 API
 */
export const getResource = (
  gameId: number,
  resourceId: number,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<GameResourceResponse>(
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

export const getGetResourceInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getResource>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResourceQueryKey(gameId, resourceId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResource>>> = ({ signal }) =>
    getResource(gameId, resourceId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!(gameId && resourceId), ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getResource>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResourceInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getResource>>>
export type GetResourceInfiniteQueryError = ErrorType<unknown>

export function useGetResourceInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResource>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  options: {
    query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResource>>,
          TError,
          Awaited<ReturnType<typeof getResource>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourceInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResource>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResource>>,
          TError,
          Awaited<ReturnType<typeof getResource>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourceInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResource>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 특정 게임 리소스 데이터 발급 API
 */

export function useGetResourceInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResource>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourceInfiniteQueryOptions(gameId, resourceId, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetResourceQueryOptions = <
  TData = Awaited<ReturnType<typeof getResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResource<TData = Awaited<ReturnType<typeof getResource>>, TError = ErrorType<unknown>>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourceQueryOptions(gameId, resourceId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetResourceSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResourceQueryKey(gameId, resourceId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResource>>> = ({ signal }) =>
    getResource(gameId, resourceId, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getResource>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResourceSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getResource>>>
export type GetResourceSuspenseQueryError = ErrorType<unknown>

export function useGetResourceSuspense<TData = Awaited<ReturnType<typeof getResource>>, TError = ErrorType<unknown>>(
  gameId: number,
  resourceId: number,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourceSuspense<TData = Awaited<ReturnType<typeof getResource>>, TError = ErrorType<unknown>>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourceSuspense<TData = Awaited<ReturnType<typeof getResource>>, TError = ErrorType<unknown>>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 특정 게임 리소스 데이터 발급 API
 */

export function useGetResourceSuspense<TData = Awaited<ReturnType<typeof getResource>>, TError = ErrorType<unknown>>(
  gameId: number,
  resourceId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourceSuspenseQueryOptions(gameId, resourceId, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 리소스의 제목이나 URL 등을 수정할 수 있다.
 * @summary 게임 리소스 수정 API
 */
export const updateResource = (
  gameId: number,
  resourceId: number,
  gameResourceRequest: BodyType<GameResourceRequest>,
  options?: SecondParameter<typeof customClientInstance>
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: gameResourceRequest
    },
    options
  )
}

export const getUpdateResourceMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateResource>>,
    TError,
    { gameId: number; resourceId: number; data: BodyType<GameResourceRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateResource>>,
  TError,
  { gameId: number; resourceId: number; data: BodyType<GameResourceRequest> },
  TContext
> => {
  const mutationKey = ["updateResource"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateResource>>,
    { gameId: number; resourceId: number; data: BodyType<GameResourceRequest> }
  > = (props) => {
    const { gameId, resourceId, data } = props ?? {}

    return updateResource(gameId, resourceId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateResourceMutationResult = NonNullable<Awaited<ReturnType<typeof updateResource>>>
export type UpdateResourceMutationBody = BodyType<GameResourceRequest>
export type UpdateResourceMutationError = ErrorType<boolean>

/**
 * @summary 게임 리소스 수정 API
 */
export const useUpdateResource = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateResource>>,
    TError,
    { gameId: number; resourceId: number; data: BodyType<GameResourceRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof updateResource>>,
  TError,
  { gameId: number; resourceId: number; data: BodyType<GameResourceRequest> },
  TContext
> => {
  const mutationOptions = getUpdateResourceMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 해당 게임방의 리소스 목록을 제공한다.
 * @summary 게임 리소스 리스트 발급 API
 */
export const getResources = (
  gameId: number,
  params?: GetResourcesParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<CustomPageImplGameResourceResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources`, method: "GET", params, signal },
    options
  )
}

export const getGetResourcesQueryKey = (gameId: number, params?: GetResourcesParams) => {
  return [`/api/v1/games/${gameId}/resources`, ...(params ? [params] : [])] as const
}

export const getGetResourcesInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getResources>>, GetResourcesParams["cursorId"]>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResources>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResources>>,
        QueryKey,
        GetResourcesParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResourcesQueryKey(gameId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResources>>, QueryKey, GetResourcesParams["cursorId"]> = ({
    signal,
    pageParam
  }) => getResources(gameId, { ...params, cursorId: pageParam || params?.["cursorId"] }, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getResources>>,
    TError,
    TData,
    Awaited<ReturnType<typeof getResources>>,
    QueryKey,
    GetResourcesParams["cursorId"]
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResourcesInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getResources>>>
export type GetResourcesInfiniteQueryError = ErrorType<CustomPageImplGameResourceResponse>

export function useGetResourcesInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResources>>, GetResourcesParams["cursorId"]>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params: undefined | GetResourcesParams,
  options: {
    query: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResources>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResources>>,
        QueryKey,
        GetResourcesParams["cursorId"]
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResources>>,
          TError,
          Awaited<ReturnType<typeof getResources>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourcesInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResources>>, GetResourcesParams["cursorId"]>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResources>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResources>>,
        QueryKey,
        GetResourcesParams["cursorId"]
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResources>>,
          TError,
          Awaited<ReturnType<typeof getResources>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourcesInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResources>>, GetResourcesParams["cursorId"]>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResources>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResources>>,
        QueryKey,
        GetResourcesParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 리스트 발급 API
 */

export function useGetResourcesInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResources>>, GetResourcesParams["cursorId"]>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResources>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResources>>,
        QueryKey,
        GetResourcesParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourcesInfiniteQueryOptions(gameId, params, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetResourcesQueryOptions = <
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourcesQueryOptions(gameId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetResourcesSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResourcesQueryKey(gameId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResources>>> = ({ signal }) =>
    getResources(gameId, params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getResources>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResourcesSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getResources>>>
export type GetResourcesSuspenseQueryError = ErrorType<CustomPageImplGameResourceResponse>

export function useGetResourcesSuspense<
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params: undefined | GetResourcesParams,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourcesSuspense<
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourcesSuspense<
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 리스트 발급 API
 */

export function useGetResourcesSuspense<
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourcesSuspenseQueryOptions(gameId, params, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 등록된 리소스를 삭제할 수 있다.
 * @summary 게임 리소스 삭제 API
 */
export const deleteResource = (
  gameId: number,
  gameResourceDeleteRequest: BodyType<GameResourceDeleteRequest>,
  options?: SecondParameter<typeof customClientInstance>
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources`,
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      data: gameResourceDeleteRequest
    },
    options
  )
}

export const getDeleteResourceMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteResource>>,
    TError,
    { gameId: number; data: BodyType<GameResourceDeleteRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteResource>>,
  TError,
  { gameId: number; data: BodyType<GameResourceDeleteRequest> },
  TContext
> => {
  const mutationKey = ["deleteResource"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteResource>>,
    { gameId: number; data: BodyType<GameResourceDeleteRequest> }
  > = (props) => {
    const { gameId, data } = props ?? {}

    return deleteResource(gameId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteResourceMutationResult = NonNullable<Awaited<ReturnType<typeof deleteResource>>>
export type DeleteResourceMutationBody = BodyType<GameResourceDeleteRequest>
export type DeleteResourceMutationError = ErrorType<boolean>

/**
 * @summary 게임 리소스 삭제 API
 */
export const useDeleteResource = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteResource>>,
    TError,
    { gameId: number; data: BodyType<GameResourceDeleteRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteResource>>,
  TError,
  { gameId: number; data: BodyType<GameResourceDeleteRequest> },
  TContext
> => {
  const mutationOptions = getDeleteResourceMutationOptions(options)

  return useMutation(mutationOptions)
}
