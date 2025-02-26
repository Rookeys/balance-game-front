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
  GameResourceCommentRequest,
  GameResourceCommentUpdateRequest,
  GetChildrenCommentsByGameResourceParams,
  GetParentCommentsByGameResource1Params,
  PageGameResourceChildrenCommentResponse,
  PageGameResourceParentCommentResponse
} from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType, BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 댓글을 수정할 수 있다.
 * @summary 게임 리소스 댓글 수정 API
 */
export const updateResourceComment = (
  resourceId: number,
  commentId: number,
  gameResourceCommentUpdateRequest: BodyType<GameResourceCommentUpdateRequest>,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/resources/${encodeURIComponent(String(resourceId))}/comments/${encodeURIComponent(String(commentId))}`,
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
export const deleteResourceComment1 = (
  resourceId: number,
  commentId: number,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/resources/${encodeURIComponent(String(resourceId))}/comments/${encodeURIComponent(String(commentId))}`,
      method: "DELETE"
    },
    options
  )
}

/**
 * 게임 리소스 부모 댓글 리스트 목록을 제공한다.
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */
export const getParentCommentsByGameResource1 = (
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<PageGameResourceParentCommentResponse>(
    {
      url: `/api/v1/games/resources/${encodeURIComponent(String(resourceId))}/comments`,
      method: "GET",
      params,
      signal
    },
    options
  )
}

export const getGetParentCommentsByGameResource1QueryKey = (
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params
) => {
  return [`/api/v1/games/resources/${resourceId}/comments`, ...(params ? [params] : [])] as const
}

export const getGetParentCommentsByGameResource1QueryOptions = <
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetParentCommentsByGameResource1QueryKey(resourceId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>> = ({ signal }) =>
    getParentCommentsByGameResource1(resourceId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!resourceId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetParentCommentsByGameResource1QueryResult = NonNullable<
  Awaited<ReturnType<typeof getParentCommentsByGameResource1>>
>
export type GetParentCommentsByGameResource1QueryError = ErrorType<unknown>

export function useGetParentCommentsByGameResource1<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params: undefined | GetParentCommentsByGameResource1Params,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
          TError,
          Awaited<ReturnType<typeof getParentCommentsByGameResource1>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResource1<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
          TError,
          Awaited<ReturnType<typeof getParentCommentsByGameResource1>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResource1<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */

export function useGetParentCommentsByGameResource1<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetParentCommentsByGameResource1QueryOptions(resourceId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */
export const prefetchGetParentCommentsByGameResource1 = async <
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetParentCommentsByGameResource1QueryOptions(resourceId, params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 해당 리소스에 댓글을 등록할 수 있다.
 * @summary 게임 리소스 댓글 등록 API
 */
export const addResourceComment = (
  resourceId: number,
  gameResourceCommentRequest: BodyType<GameResourceCommentRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/resources/${encodeURIComponent(String(resourceId))}/comments`,
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
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<PageGameResourceChildrenCommentResponse>(
    {
      url: `/api/v1/games/resources/${encodeURIComponent(String(resourceId))}/comments/${encodeURIComponent(String(parentId))}`,
      method: "GET",
      params,
      signal
    },
    options
  )
}

export const getGetChildrenCommentsByGameResourceQueryKey = (
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams
) => {
  return [`/api/v1/games/resources/${resourceId}/comments/${parentId}`, ...(params ? [params] : [])] as const
}

export const getGetChildrenCommentsByGameResourceQueryOptions = <
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetChildrenCommentsByGameResourceQueryKey(resourceId, parentId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>> = ({ signal }) =>
    getChildrenCommentsByGameResource(resourceId, parentId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!(resourceId && parentId), ...queryOptions } as UseQueryOptions<
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
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetChildrenCommentsByGameResourceQueryOptions(resourceId, parentId, params, options)

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
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetChildrenCommentsByGameResourceQueryOptions(resourceId, parentId, params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}
