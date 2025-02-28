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
import type { GamePlayRequest, GamePlayResponse, GamePlayRoundRequest } from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType, BodyType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 진행했던 게임을 다시 이어 할 수 있다.
 * @summary 게임 이어 하기
 */
export const continuePlayRoom = (
  gameId: number,
  playId: number,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<GamePlayResponse>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/play/${encodeURIComponent(String(playId))}`,
      method: "GET",
      signal
    },
    options
  )
}

export const getContinuePlayRoomQueryKey = (gameId: number, playId: number) => {
  return [`/api/v1/games/${gameId}/play/${playId}`] as const
}

export const getContinuePlayRoomInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof continuePlayRoom>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  playId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getContinuePlayRoomQueryKey(gameId, playId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof continuePlayRoom>>> = ({ signal }) =>
    continuePlayRoom(gameId, playId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!(gameId && playId), ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof continuePlayRoom>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type ContinuePlayRoomInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof continuePlayRoom>>>
export type ContinuePlayRoomInfiniteQueryError = ErrorType<unknown>

export function useContinuePlayRoomInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof continuePlayRoom>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  playId: number,
  options: {
    query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof continuePlayRoom>>,
          TError,
          Awaited<ReturnType<typeof continuePlayRoom>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useContinuePlayRoomInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof continuePlayRoom>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  playId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof continuePlayRoom>>,
          TError,
          Awaited<ReturnType<typeof continuePlayRoom>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useContinuePlayRoomInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof continuePlayRoom>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  playId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 이어 하기
 */

export function useContinuePlayRoomInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof continuePlayRoom>>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  playId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getContinuePlayRoomInfiniteQueryOptions(gameId, playId, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getContinuePlayRoomQueryOptions = <
  TData = Awaited<ReturnType<typeof continuePlayRoom>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  playId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getContinuePlayRoomQueryKey(gameId, playId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof continuePlayRoom>>> = ({ signal }) =>
    continuePlayRoom(gameId, playId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!(gameId && playId), ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof continuePlayRoom>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type ContinuePlayRoomQueryResult = NonNullable<Awaited<ReturnType<typeof continuePlayRoom>>>
export type ContinuePlayRoomQueryError = ErrorType<unknown>

export function useContinuePlayRoom<TData = Awaited<ReturnType<typeof continuePlayRoom>>, TError = ErrorType<unknown>>(
  gameId: number,
  playId: number,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof continuePlayRoom>>,
          TError,
          Awaited<ReturnType<typeof continuePlayRoom>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useContinuePlayRoom<TData = Awaited<ReturnType<typeof continuePlayRoom>>, TError = ErrorType<unknown>>(
  gameId: number,
  playId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof continuePlayRoom>>,
          TError,
          Awaited<ReturnType<typeof continuePlayRoom>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useContinuePlayRoom<TData = Awaited<ReturnType<typeof continuePlayRoom>>, TError = ErrorType<unknown>>(
  gameId: number,
  playId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 이어 하기
 */

export function useContinuePlayRoom<TData = Awaited<ReturnType<typeof continuePlayRoom>>, TError = ErrorType<unknown>>(
  gameId: number,
  playId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getContinuePlayRoomQueryOptions(gameId, playId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getContinuePlayRoomSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof continuePlayRoom>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  playId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getContinuePlayRoomQueryKey(gameId, playId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof continuePlayRoom>>> = ({ signal }) =>
    continuePlayRoom(gameId, playId, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof continuePlayRoom>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type ContinuePlayRoomSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof continuePlayRoom>>>
export type ContinuePlayRoomSuspenseQueryError = ErrorType<unknown>

export function useContinuePlayRoomSuspense<
  TData = Awaited<ReturnType<typeof continuePlayRoom>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  playId: number,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useContinuePlayRoomSuspense<
  TData = Awaited<ReturnType<typeof continuePlayRoom>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  playId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useContinuePlayRoomSuspense<
  TData = Awaited<ReturnType<typeof continuePlayRoom>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  playId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 이어 하기
 */

export function useContinuePlayRoomSuspense<
  TData = Awaited<ReturnType<typeof continuePlayRoom>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  playId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getContinuePlayRoomSuspenseQueryOptions(gameId, playId, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 선택한 리소스를 업데이트하고 다음 페어를 반환.
 * @summary 플레이룸 결과 반영 API
 */
export const updatePlayRoom = (
  gameId: number,
  playId: number,
  gamePlayRequest: BodyType<GamePlayRequest>,
  options?: SecondParameter<typeof customClientInstance>
) => {
  return customClientInstance<GamePlayResponse>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/play/${encodeURIComponent(String(playId))}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: gamePlayRequest
    },
    options
  )
}

export const getUpdatePlayRoomMutationOptions = <TError = ErrorType<GamePlayResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePlayRoom>>,
    TError,
    { gameId: number; playId: number; data: BodyType<GamePlayRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updatePlayRoom>>,
  TError,
  { gameId: number; playId: number; data: BodyType<GamePlayRequest> },
  TContext
> => {
  const mutationKey = ["updatePlayRoom"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updatePlayRoom>>,
    { gameId: number; playId: number; data: BodyType<GamePlayRequest> }
  > = (props) => {
    const { gameId, playId, data } = props ?? {}

    return updatePlayRoom(gameId, playId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdatePlayRoomMutationResult = NonNullable<Awaited<ReturnType<typeof updatePlayRoom>>>
export type UpdatePlayRoomMutationBody = BodyType<GamePlayRequest>
export type UpdatePlayRoomMutationError = ErrorType<GamePlayResponse>

/**
 * @summary 플레이룸 결과 반영 API
 */
export const useUpdatePlayRoom = <TError = ErrorType<GamePlayResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePlayRoom>>,
    TError,
    { gameId: number; playId: number; data: BodyType<GamePlayRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof updatePlayRoom>>,
  TError,
  { gameId: number; playId: number; data: BodyType<GamePlayRequest> },
  TContext
> => {
  const mutationOptions = getUpdatePlayRoomMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * n강만큼 데이터가 준비되고 첫 2개의 데이터를 반환.
 * @summary 플레이룸 생성 및 게임 시작 API
 */
export const createPlayRoom = (
  gameId: number,
  gamePlayRoundRequest: BodyType<GamePlayRoundRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<GamePlayResponse>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/play`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gamePlayRoundRequest,
      signal
    },
    options
  )
}

export const getCreatePlayRoomMutationOptions = <TError = ErrorType<GamePlayResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPlayRoom>>,
    TError,
    { gameId: number; data: BodyType<GamePlayRoundRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPlayRoom>>,
  TError,
  { gameId: number; data: BodyType<GamePlayRoundRequest> },
  TContext
> => {
  const mutationKey = ["createPlayRoom"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPlayRoom>>,
    { gameId: number; data: BodyType<GamePlayRoundRequest> }
  > = (props) => {
    const { gameId, data } = props ?? {}

    return createPlayRoom(gameId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreatePlayRoomMutationResult = NonNullable<Awaited<ReturnType<typeof createPlayRoom>>>
export type CreatePlayRoomMutationBody = BodyType<GamePlayRoundRequest>
export type CreatePlayRoomMutationError = ErrorType<GamePlayResponse>

/**
 * @summary 플레이룸 생성 및 게임 시작 API
 */
export const useCreatePlayRoom = <TError = ErrorType<GamePlayResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPlayRoom>>,
    TError,
    { gameId: number; data: BodyType<GamePlayRoundRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof createPlayRoom>>,
  TError,
  { gameId: number; data: BodyType<GamePlayRoundRequest> },
  TContext
> => {
  const mutationOptions = getCreatePlayRoomMutationOptions(options)

  return useMutation(mutationOptions)
}
