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
  CustomPageImplGameResultCommentResponse,
  GameResultCommentRequest,
  GetParentCommentsByGameResourceParams
} from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType, BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 댓글을 수정할 수 있다.
 * @summary 게임 결과 댓글 수정 API
 */
export const updateResultComment = (
  gameId: number,
  commentId: number,
  gameResultCommentRequest: BodyType<GameResultCommentRequest>,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/results/comments/${encodeURIComponent(String(commentId))}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: gameResultCommentRequest
    },
    options
  )
}

/**
 * 해당 댓글을 삭제할 수 있다.
 * @summary 게임 결과 댓글 삭제 API
 */
export const deleteResourceComment = (
  gameId: number,
  commentId: number,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/results/comments/${encodeURIComponent(String(commentId))}`,
      method: "DELETE"
    },
    options
  )
}

/**
 * 게임 결과 댓글 리스트 목록을 제공한다.
 * @summary 게임 결과 댓글 리스트 발급 API
 */
export const getParentCommentsByGameResource = (
  gameId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplGameResultCommentResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/results/comments`, method: "GET", params, signal },
    options
  )
}

export const getGetParentCommentsByGameResourceQueryKey = (
  gameId: number,
  params?: GetParentCommentsByGameResourceParams
) => {
  return [`/api/v1/games/${gameId}/results/comments`, ...(params ? [params] : [])] as const
}

export const getGetParentCommentsByGameResourceQueryOptions = <
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetParentCommentsByGameResourceQueryKey(gameId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getParentCommentsByGameResource>>> = ({ signal }) =>
    getParentCommentsByGameResource(gameId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseQueryOptions<
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
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 결과 댓글 리스트 발급 API
 */

export function useGetParentCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetParentCommentsByGameResourceQueryOptions(gameId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게임 결과 댓글 리스트 발급 API
 */
export const prefetchGetParentCommentsByGameResource = async <
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  gameId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetParentCommentsByGameResourceQueryOptions(gameId, params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 해당 게임 결과에 댓글을 등록할 수 있다.
 * @summary 게임 결과 댓글 등록 API
 */
export const addResultComment = (
  gameId: number,
  gameResultCommentRequest: BodyType<GameResultCommentRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/results/comments`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameResultCommentRequest,
      signal
    },
    options
  )
}
