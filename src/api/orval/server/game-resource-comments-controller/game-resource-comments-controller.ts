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
  CustomPageImplGameResourceChildrenCommentResponse,
  CustomPageImplGameResourceParentCommentResponse,
  GameResourceCommentRequest,
  GameResourceCommentUpdateRequest,
  GetChildrenCommentsByGameResourceParams,
  GetParentCommentsByGameResourceParams
} from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType, BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 댓글을 수정할 수 있다.
 * @summary 게임 리소스 댓글 수정 API
 */
export const updateResourceComment = (
  gameId: number,
  resourceId: number,
  commentId: number,
  gameResourceCommentUpdateRequest: BodyType<GameResourceCommentUpdateRequest>,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}/comments/${encodeURIComponent(String(commentId))}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: gameResourceCommentUpdateRequest
    },
    options
  )
}

/**
 * 해당 댓글을 삭제할 수 있다.
 * @summary 게임 리소스 댓글 삭제 API
 */
export const deleteResourceComment = (
  gameId: number,
  resourceId: number,
  commentId: number,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}/comments/${encodeURIComponent(String(commentId))}`,
      method: "DELETE"
    },
    options
  )
}

/**
 * 게임 리소스 부모 댓글 리스트 목록을 제공한다.
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */
export const getParentCommentsByGameResource = (
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplGameResourceParentCommentResponse>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}/comments`,
      method: "GET",
      params,
      signal
    },
    options
  )
}

export const getGetParentCommentsByGameResourceQueryKey = (
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams
) => {
  return [`/api/v1/games/${gameId}/resources/${resourceId}/comments`, ...(params ? [params] : [])] as const
}

export const getGetParentCommentsByGameResourceQueryOptions = <
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetParentCommentsByGameResourceQueryKey(gameId, resourceId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getParentCommentsByGameResource>>> = ({ signal }) =>
    getParentCommentsByGameResource(gameId, resourceId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!(gameId && resourceId), ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetParentCommentsByGameResourceQueryResult = NonNullable<
  Awaited<ReturnType<typeof getParentCommentsByGameResource>>
>
export type GetParentCommentsByGameResourceQueryError = ErrorType<unknown>

export function useGetParentCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params: undefined | GetParentCommentsByGameResourceParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
          TError,
          Awaited<ReturnType<typeof getParentCommentsByGameResource>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
          TError,
          Awaited<ReturnType<typeof getParentCommentsByGameResource>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */

export function useGetParentCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetParentCommentsByGameResourceQueryOptions(gameId, resourceId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */
export const prefetchGetParentCommentsByGameResource = async <
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetParentCommentsByGameResourceQueryOptions(gameId, resourceId, params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 해당 리소스에 댓글을 등록할 수 있다.
 * @summary 게임 리소스 댓글 등록 API
 */
export const addResourceComment = (
  gameId: number,
  resourceId: number,
  gameResourceCommentRequest: BodyType<GameResourceCommentRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}/comments`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameResourceCommentRequest,
      signal
    },
    options
  )
}

/**
 * 게임 리소스 대댓글 리스트 목록을 제공한다.
 * @summary 게임 리소스 대댓글 리스트 발급 API
 */
export const getChildrenCommentsByGameResource = (
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplGameResourceChildrenCommentResponse>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}/comments/${encodeURIComponent(String(parentId))}`,
      method: "GET",
      params,
      signal
    },
    options
  )
}

export const getGetChildrenCommentsByGameResourceQueryKey = (
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams
) => {
  return [`/api/v1/games/${gameId}/resources/${resourceId}/comments/${parentId}`, ...(params ? [params] : [])] as const
}

export const getGetChildrenCommentsByGameResourceQueryOptions = <
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetChildrenCommentsByGameResourceQueryKey(gameId, resourceId, parentId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>> = ({ signal }) =>
    getChildrenCommentsByGameResource(gameId, resourceId, parentId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!(gameId && resourceId && parentId), ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetChildrenCommentsByGameResourceQueryResult = NonNullable<
  Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>
>
export type GetChildrenCommentsByGameResourceQueryError = ErrorType<unknown>

export function useGetChildrenCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params: undefined | GetChildrenCommentsByGameResourceParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
          TError,
          Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChildrenCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
          TError,
          Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChildrenCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 대댓글 리스트 발급 API
 */

export function useGetChildrenCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetChildrenCommentsByGameResourceQueryOptions(gameId, resourceId, parentId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게임 리소스 대댓글 리스트 발급 API
 */
export const prefetchGetChildrenCommentsByGameResource = async <
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetChildrenCommentsByGameResourceQueryOptions(gameId, resourceId, parentId, params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}
