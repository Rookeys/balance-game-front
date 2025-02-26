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
import type { GameResourceRequest, GetResourcesParams, PageGameResourceResponse } from ".././model"
import { customClientInstance } from "../../clientInstance"
import type { ErrorType, BodyType } from "../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

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
 * @summary 게임 리소스 리스트 발급 API
 */
export const getResources = (
  gameId: number,
  params?: GetResourcesParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<PageGameResourceResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources`, method: "GET", params, signal },
    options
  )
}

export const getGetResourcesQueryKey = (gameId: number, params?: GetResourcesParams) => {
  return [`/api/v1/games/${gameId}/resources`, ...(params ? [params] : [])] as const
}

export const getGetResourcesInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getResources>>, GetResourcesParams["cursorId"]>,
  TError = ErrorType<PageGameResourceResponse>
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
export type GetResourcesInfiniteQueryError = ErrorType<PageGameResourceResponse>

export function useGetResourcesInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResources>>, GetResourcesParams["cursorId"]>,
  TError = ErrorType<PageGameResourceResponse>
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
  TError = ErrorType<PageGameResourceResponse>
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
  TError = ErrorType<PageGameResourceResponse>
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
  TError = ErrorType<PageGameResourceResponse>
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
  TError = ErrorType<PageGameResourceResponse>
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
export type GetResourcesQueryError = ErrorType<PageGameResourceResponse>

export function useGetResources<
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<PageGameResourceResponse>
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
  TError = ErrorType<PageGameResourceResponse>
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
  TError = ErrorType<PageGameResourceResponse>
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
  TError = ErrorType<PageGameResourceResponse>
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
  TError = ErrorType<PageGameResourceResponse>
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
export type GetResourcesSuspenseQueryError = ErrorType<PageGameResourceResponse>

export function useGetResourcesSuspense<
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<PageGameResourceResponse>
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
  TError = ErrorType<PageGameResourceResponse>
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
  TError = ErrorType<PageGameResourceResponse>
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
  TError = ErrorType<PageGameResourceResponse>
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
