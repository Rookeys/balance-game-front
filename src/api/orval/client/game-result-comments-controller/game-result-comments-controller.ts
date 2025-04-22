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
  CustomPageImplGameResultCommentResponse,
  GameResultCommentRequest,
  GetCommentsByGameResultParams
} from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType, BodyType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 댓글을 수정할 수 있다.
 * @summary 게임 결과 댓글 수정 API
 */
export const updateResultComment = (
  gameId: number,
  commentId: number,
  gameResultCommentRequest: BodyType<GameResultCommentRequest>,
  options?: SecondParameter<typeof customClientInstance>
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/results/comments/${encodeURIComponent(String(commentId))}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: gameResultCommentRequest
    },
    options
  )
}

export const getUpdateResultCommentMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateResultComment>>,
    TError,
    { gameId: number; commentId: number; data: BodyType<GameResultCommentRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateResultComment>>,
  TError,
  { gameId: number; commentId: number; data: BodyType<GameResultCommentRequest> },
  TContext
> => {
  const mutationKey = ["updateResultComment"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateResultComment>>,
    { gameId: number; commentId: number; data: BodyType<GameResultCommentRequest> }
  > = (props) => {
    const { gameId, commentId, data } = props ?? {}

    return updateResultComment(gameId, commentId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateResultCommentMutationResult = NonNullable<Awaited<ReturnType<typeof updateResultComment>>>
export type UpdateResultCommentMutationBody = BodyType<GameResultCommentRequest>
export type UpdateResultCommentMutationError = ErrorType<boolean>

/**
 * @summary 게임 결과 댓글 수정 API
 */
export const useUpdateResultComment = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateResultComment>>,
    TError,
    { gameId: number; commentId: number; data: BodyType<GameResultCommentRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof updateResultComment>>,
  TError,
  { gameId: number; commentId: number; data: BodyType<GameResultCommentRequest> },
  TContext
> => {
  const mutationOptions = getUpdateResultCommentMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 해당 댓글을 삭제할 수 있다.
 * @summary 게임 결과 댓글 삭제 API
 */
export const deleteResourceComment = (
  gameId: number,
  commentId: number,
  options?: SecondParameter<typeof customClientInstance>
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/results/comments/${encodeURIComponent(String(commentId))}`,
      method: "DELETE"
    },
    options
  )
}

export const getDeleteResourceCommentMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteResourceComment>>,
    TError,
    { gameId: number; commentId: number },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteResourceComment>>,
  TError,
  { gameId: number; commentId: number },
  TContext
> => {
  const mutationKey = ["deleteResourceComment"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteResourceComment>>,
    { gameId: number; commentId: number }
  > = (props) => {
    const { gameId, commentId } = props ?? {}

    return deleteResourceComment(gameId, commentId, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteResourceCommentMutationResult = NonNullable<Awaited<ReturnType<typeof deleteResourceComment>>>

export type DeleteResourceCommentMutationError = ErrorType<boolean>

/**
 * @summary 게임 결과 댓글 삭제 API
 */
export const useDeleteResourceComment = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteResourceComment>>,
    TError,
    { gameId: number; commentId: number },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteResourceComment>>,
  TError,
  { gameId: number; commentId: number },
  TContext
> => {
  const mutationOptions = getDeleteResourceCommentMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 게임 결과 댓글 리스트 목록을 제공한다.
 * @summary 게임 결과 댓글 리스트 발급 API
 */
export const getCommentsByGameResult = (
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<CustomPageImplGameResultCommentResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/results/comments`, method: "GET", params, signal },
    options
  )
}

export const getGetCommentsByGameResultQueryKey = (gameId: number, params?: GetCommentsByGameResultParams) => {
  return [`/api/v1/games/${gameId}/results/comments`, ...(params ? [params] : [])] as const
}

export const getGetCommentsByGameResultInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getCommentsByGameResult>>, GetCommentsByGameResultParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getCommentsByGameResult>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getCommentsByGameResult>>,
        QueryKey,
        GetCommentsByGameResultParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetCommentsByGameResultQueryKey(gameId, params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getCommentsByGameResult>>,
    QueryKey,
    GetCommentsByGameResultParams["cursorId"]
  > = ({ signal, pageParam }) =>
    getCommentsByGameResult(gameId, { ...params, cursorId: pageParam || params?.["cursorId"] }, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getCommentsByGameResult>>,
    TError,
    TData,
    Awaited<ReturnType<typeof getCommentsByGameResult>>,
    QueryKey,
    GetCommentsByGameResultParams["cursorId"]
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetCommentsByGameResultInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof getCommentsByGameResult>>
>
export type GetCommentsByGameResultInfiniteQueryError = ErrorType<unknown>

export function useGetCommentsByGameResultInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getCommentsByGameResult>>, GetCommentsByGameResultParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params: undefined | GetCommentsByGameResultParams,
  options: {
    query: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getCommentsByGameResult>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getCommentsByGameResult>>,
        QueryKey,
        GetCommentsByGameResultParams["cursorId"]
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCommentsByGameResult>>,
          TError,
          Awaited<ReturnType<typeof getCommentsByGameResult>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCommentsByGameResultInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getCommentsByGameResult>>, GetCommentsByGameResultParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getCommentsByGameResult>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getCommentsByGameResult>>,
        QueryKey,
        GetCommentsByGameResultParams["cursorId"]
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCommentsByGameResult>>,
          TError,
          Awaited<ReturnType<typeof getCommentsByGameResult>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCommentsByGameResultInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getCommentsByGameResult>>, GetCommentsByGameResultParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getCommentsByGameResult>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getCommentsByGameResult>>,
        QueryKey,
        GetCommentsByGameResultParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 결과 댓글 리스트 발급 API
 */

export function useGetCommentsByGameResultInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getCommentsByGameResult>>, GetCommentsByGameResultParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getCommentsByGameResult>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getCommentsByGameResult>>,
        QueryKey,
        GetCommentsByGameResultParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetCommentsByGameResultInfiniteQueryOptions(gameId, params, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetCommentsByGameResultQueryOptions = <
  TData = Awaited<ReturnType<typeof getCommentsByGameResult>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCommentsByGameResult>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetCommentsByGameResultQueryKey(gameId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getCommentsByGameResult>>> = ({ signal }) =>
    getCommentsByGameResult(gameId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getCommentsByGameResult>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetCommentsByGameResultQueryResult = NonNullable<Awaited<ReturnType<typeof getCommentsByGameResult>>>
export type GetCommentsByGameResultQueryError = ErrorType<unknown>

export function useGetCommentsByGameResult<
  TData = Awaited<ReturnType<typeof getCommentsByGameResult>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params: undefined | GetCommentsByGameResultParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCommentsByGameResult>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCommentsByGameResult>>,
          TError,
          Awaited<ReturnType<typeof getCommentsByGameResult>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCommentsByGameResult<
  TData = Awaited<ReturnType<typeof getCommentsByGameResult>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCommentsByGameResult>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCommentsByGameResult>>,
          TError,
          Awaited<ReturnType<typeof getCommentsByGameResult>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCommentsByGameResult<
  TData = Awaited<ReturnType<typeof getCommentsByGameResult>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCommentsByGameResult>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 결과 댓글 리스트 발급 API
 */

export function useGetCommentsByGameResult<
  TData = Awaited<ReturnType<typeof getCommentsByGameResult>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCommentsByGameResult>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetCommentsByGameResultQueryOptions(gameId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetCommentsByGameResultSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getCommentsByGameResult>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCommentsByGameResult>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetCommentsByGameResultQueryKey(gameId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getCommentsByGameResult>>> = ({ signal }) =>
    getCommentsByGameResult(gameId, params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getCommentsByGameResult>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetCommentsByGameResultSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof getCommentsByGameResult>>
>
export type GetCommentsByGameResultSuspenseQueryError = ErrorType<unknown>

export function useGetCommentsByGameResultSuspense<
  TData = Awaited<ReturnType<typeof getCommentsByGameResult>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params: undefined | GetCommentsByGameResultParams,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCommentsByGameResult>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCommentsByGameResultSuspense<
  TData = Awaited<ReturnType<typeof getCommentsByGameResult>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCommentsByGameResult>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCommentsByGameResultSuspense<
  TData = Awaited<ReturnType<typeof getCommentsByGameResult>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCommentsByGameResult>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 결과 댓글 리스트 발급 API
 */

export function useGetCommentsByGameResultSuspense<
  TData = Awaited<ReturnType<typeof getCommentsByGameResult>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetCommentsByGameResultParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getCommentsByGameResult>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetCommentsByGameResultSuspenseQueryOptions(gameId, params, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 해당 게임 결과에 댓글을 등록할 수 있다.
 * @summary 게임 결과 댓글 등록 API
 */
export const addResultComment = (
  gameId: number,
  gameResultCommentRequest: BodyType<GameResultCommentRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<boolean>(
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

export const getAddResultCommentMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addResultComment>>,
    TError,
    { gameId: number; data: BodyType<GameResultCommentRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof addResultComment>>,
  TError,
  { gameId: number; data: BodyType<GameResultCommentRequest> },
  TContext
> => {
  const mutationKey = ["addResultComment"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof addResultComment>>,
    { gameId: number; data: BodyType<GameResultCommentRequest> }
  > = (props) => {
    const { gameId, data } = props ?? {}

    return addResultComment(gameId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AddResultCommentMutationResult = NonNullable<Awaited<ReturnType<typeof addResultComment>>>
export type AddResultCommentMutationBody = BodyType<GameResultCommentRequest>
export type AddResultCommentMutationError = ErrorType<boolean>

/**
 * @summary 게임 결과 댓글 등록 API
 */
export const useAddResultComment = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addResultComment>>,
    TError,
    { gameId: number; data: BodyType<GameResultCommentRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof addResultComment>>,
  TError,
  { gameId: number; data: BodyType<GameResultCommentRequest> },
  TContext
> => {
  const mutationOptions = getAddResultCommentMutationOptions(options)

  return useMutation(mutationOptions)
}
