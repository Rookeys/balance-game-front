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
  CustomBasedPageImplGameResourceResponse,
  CustomPageImplGameResourceResponse,
  GameResourceDeleteRequest,
  GameResourceRequest,
  GameResourceResponse,
  GetResourcesUsingCursorIdParams,
  GetResourcesUsingPageParams
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
 * 등록된 리소스를 삭제할 수 있다.
 * @summary 게임 리소스 삭제 API
 */
export const deleteResource = (
  gameId: number,
  resourceId: number,
  options?: SecondParameter<typeof customClientInstance>
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}`,
      method: "DELETE"
    },
    options
  )
}

export const getDeleteResourceMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteResource>>,
    TError,
    { gameId: number; resourceId: number },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteResource>>,
  TError,
  { gameId: number; resourceId: number },
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
    { gameId: number; resourceId: number }
  > = (props) => {
    const { gameId, resourceId } = props ?? {}

    return deleteResource(gameId, resourceId, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteResourceMutationResult = NonNullable<Awaited<ReturnType<typeof deleteResource>>>

export type DeleteResourceMutationError = ErrorType<boolean>

/**
 * @summary 게임 리소스 삭제 API
 */
export const useDeleteResource = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteResource>>,
    TError,
    { gameId: number; resourceId: number },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteResource>>,
  TError,
  { gameId: number; resourceId: number },
  TContext
> => {
  const mutationOptions = getDeleteResourceMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 해당 게임방의 리소스 목록을 제공한다.
 * @summary 게임 리소스 리스트 발급 API (CursorId)
 */
export const getResourcesUsingCursorId = (
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<CustomPageImplGameResourceResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources`, method: "GET", params, signal },
    options
  )
}

export const getGetResourcesUsingCursorIdQueryKey = (gameId: number, params?: GetResourcesUsingCursorIdParams) => {
  return [`/api/v1/games/${gameId}/resources`, ...(params ? [params] : [])] as const
}

export const getGetResourcesUsingCursorIdInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
    GetResourcesUsingCursorIdParams["cursorId"]
  >,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
        QueryKey,
        GetResourcesUsingCursorIdParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResourcesUsingCursorIdQueryKey(gameId, params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
    QueryKey,
    GetResourcesUsingCursorIdParams["cursorId"]
  > = ({ signal, pageParam }) =>
    getResourcesUsingCursorId(
      gameId,
      { ...params, cursorId: pageParam || params?.["cursorId"] },
      requestOptions,
      signal
    )

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
    TError,
    TData,
    Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
    QueryKey,
    GetResourcesUsingCursorIdParams["cursorId"]
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResourcesUsingCursorIdInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof getResourcesUsingCursorId>>
>
export type GetResourcesUsingCursorIdInfiniteQueryError = ErrorType<CustomPageImplGameResourceResponse>

export function useGetResourcesUsingCursorIdInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
    GetResourcesUsingCursorIdParams["cursorId"]
  >,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params: undefined | GetResourcesUsingCursorIdParams,
  options: {
    query: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
        QueryKey,
        GetResourcesUsingCursorIdParams["cursorId"]
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
          TError,
          Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourcesUsingCursorIdInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
    GetResourcesUsingCursorIdParams["cursorId"]
  >,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
        QueryKey,
        GetResourcesUsingCursorIdParams["cursorId"]
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
          TError,
          Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourcesUsingCursorIdInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
    GetResourcesUsingCursorIdParams["cursorId"]
  >,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
        QueryKey,
        GetResourcesUsingCursorIdParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 리스트 발급 API (CursorId)
 */

export function useGetResourcesUsingCursorIdInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
    GetResourcesUsingCursorIdParams["cursorId"]
  >,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
        QueryKey,
        GetResourcesUsingCursorIdParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourcesUsingCursorIdInfiniteQueryOptions(gameId, params, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetResourcesUsingCursorIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingCursorId>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourcesUsingCursorIdQueryOptions(gameId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetResourcesUsingCursorIdSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingCursorId>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResourcesUsingCursorIdQueryKey(gameId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResourcesUsingCursorId>>> = ({ signal }) =>
    getResourcesUsingCursorId(gameId, params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResourcesUsingCursorIdSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof getResourcesUsingCursorId>>
>
export type GetResourcesUsingCursorIdSuspenseQueryError = ErrorType<CustomPageImplGameResourceResponse>

export function useGetResourcesUsingCursorIdSuspense<
  TData = Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params: undefined | GetResourcesUsingCursorIdParams,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingCursorId>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourcesUsingCursorIdSuspense<
  TData = Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingCursorId>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResourcesUsingCursorIdSuspense<
  TData = Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingCursorId>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 리스트 발급 API (CursorId)
 */

export function useGetResourcesUsingCursorIdSuspense<
  TData = Awaited<ReturnType<typeof getResourcesUsingCursorId>>,
  TError = ErrorType<CustomPageImplGameResourceResponse>
>(
  gameId: number,
  params?: GetResourcesUsingCursorIdParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResourcesUsingCursorId>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourcesUsingCursorIdSuspenseQueryOptions(gameId, params, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 등록된 리소스를 선택 삭제할 수 있다.
 * @summary 게임 리소스 선택 삭제 API
 */
export const deleteSelectResources = (
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

export const getDeleteSelectResourcesMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteSelectResources>>,
    TError,
    { gameId: number; data: BodyType<GameResourceDeleteRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteSelectResources>>,
  TError,
  { gameId: number; data: BodyType<GameResourceDeleteRequest> },
  TContext
> => {
  const mutationKey = ["deleteSelectResources"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteSelectResources>>,
    { gameId: number; data: BodyType<GameResourceDeleteRequest> }
  > = (props) => {
    const { gameId, data } = props ?? {}

    return deleteSelectResources(gameId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteSelectResourcesMutationResult = NonNullable<Awaited<ReturnType<typeof deleteSelectResources>>>
export type DeleteSelectResourcesMutationBody = BodyType<GameResourceDeleteRequest>
export type DeleteSelectResourcesMutationError = ErrorType<boolean>

/**
 * @summary 게임 리소스 선택 삭제 API
 */
export const useDeleteSelectResources = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteSelectResources>>,
    TError,
    { gameId: number; data: BodyType<GameResourceDeleteRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteSelectResources>>,
  TError,
  { gameId: number; data: BodyType<GameResourceDeleteRequest> },
  TContext
> => {
  const mutationOptions = getDeleteSelectResourcesMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 해당 게임방의 리소스 목록을 제공한다.
 * @summary 게임 리소스 리스트 발급 API (Page)
 */
export const getResourcesUsingPage = (
  gameId: number,
  params?: GetResourcesUsingPageParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<CustomBasedPageImplGameResourceResponse>(
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResourcesUsingPageQueryOptions(gameId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 해당 게임방의 리소스 총 갯수를 반환함.
 * @summary 게임방 내 리소스 총 갯수 반환 API
 */
export const getCountResourcesInGames = (
  gameId: number,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<number>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/count`, method: "GET", signal },
    options
  )
}

export const getGetCountResourcesInGamesQueryKey = (gameId: number) => {
  return [`/api/v1/games/${gameId}/resources/count`] as const
}

export const getGetCountResourcesInGamesInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getCountResourcesInGames>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetCountResourcesInGamesQueryKey(gameId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getCountResourcesInGames>>> = ({ signal }) =>
    getCountResourcesInGames(gameId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getCountResourcesInGames>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetCountResourcesInGamesInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof getCountResourcesInGames>>
>
export type GetCountResourcesInGamesInfiniteQueryError = ErrorType<unknown>

export function useGetCountResourcesInGamesInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getCountResourcesInGames>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options: {
    query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCountResourcesInGames>>,
          TError,
          Awaited<ReturnType<typeof getCountResourcesInGames>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCountResourcesInGamesInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getCountResourcesInGames>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCountResourcesInGames>>,
          TError,
          Awaited<ReturnType<typeof getCountResourcesInGames>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCountResourcesInGamesInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getCountResourcesInGames>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임방 내 리소스 총 갯수 반환 API
 */

export function useGetCountResourcesInGamesInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getCountResourcesInGames>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetCountResourcesInGamesInfiniteQueryOptions(gameId, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetCountResourcesInGamesQueryOptions = <
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCountResourcesInGames<
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetCountResourcesInGamesQueryOptions(gameId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetCountResourcesInGamesSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetCountResourcesInGamesQueryKey(gameId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getCountResourcesInGames>>> = ({ signal }) =>
    getCountResourcesInGames(gameId, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getCountResourcesInGames>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetCountResourcesInGamesSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof getCountResourcesInGames>>
>
export type GetCountResourcesInGamesSuspenseQueryError = ErrorType<unknown>

export function useGetCountResourcesInGamesSuspense<
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCountResourcesInGamesSuspense<
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCountResourcesInGamesSuspense<
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임방 내 리소스 총 갯수 반환 API
 */

export function useGetCountResourcesInGamesSuspense<
  TData = Awaited<ReturnType<typeof getCountResourcesInGames>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCountResourcesInGames>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetCountResourcesInGamesSuspenseQueryOptions(gameId, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}
