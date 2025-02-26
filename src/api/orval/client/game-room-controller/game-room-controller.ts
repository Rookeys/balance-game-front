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
import type { GameRequest, GameResponse } from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType, BodyType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 특정 게임방의 설정을 확인함.
 * @summary 게임방 정보 확인 API
 */
export const getGameStatus = (
  gameId: number,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<GameResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}`, method: "GET", signal },
    options
  )
}

export const getGetGameStatusQueryKey = (gameId: number) => {
  return [`/api/v1/games/${gameId}`] as const
}

export const getGetGameStatusInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getGameStatus>>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetGameStatusQueryKey(gameId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getGameStatus>>> = ({ signal }) =>
    getGameStatus(gameId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getGameStatus>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetGameStatusInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getGameStatus>>>
export type GetGameStatusInfiniteQueryError = ErrorType<GameResponse>

export function useGetGameStatusInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getGameStatus>>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options: {
    query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getGameStatus>>,
          TError,
          Awaited<ReturnType<typeof getGameStatus>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGameStatusInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getGameStatus>>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getGameStatus>>,
          TError,
          Awaited<ReturnType<typeof getGameStatus>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGameStatusInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getGameStatus>>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임방 정보 확인 API
 */

export function useGetGameStatusInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getGameStatus>>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetGameStatusInfiniteQueryOptions(gameId, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetGameStatusQueryOptions = <
  TData = Awaited<ReturnType<typeof getGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetGameStatusQueryKey(gameId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getGameStatus>>> = ({ signal }) =>
    getGameStatus(gameId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getGameStatus>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetGameStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getGameStatus>>>
export type GetGameStatusQueryError = ErrorType<GameResponse>

export function useGetGameStatus<TData = Awaited<ReturnType<typeof getGameStatus>>, TError = ErrorType<GameResponse>>(
  gameId: number,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getGameStatus>>,
          TError,
          Awaited<ReturnType<typeof getGameStatus>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGameStatus<TData = Awaited<ReturnType<typeof getGameStatus>>, TError = ErrorType<GameResponse>>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getGameStatus>>,
          TError,
          Awaited<ReturnType<typeof getGameStatus>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGameStatus<TData = Awaited<ReturnType<typeof getGameStatus>>, TError = ErrorType<GameResponse>>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임방 정보 확인 API
 */

export function useGetGameStatus<TData = Awaited<ReturnType<typeof getGameStatus>>, TError = ErrorType<GameResponse>>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetGameStatusQueryOptions(gameId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetGameStatusSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetGameStatusQueryKey(gameId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getGameStatus>>> = ({ signal }) =>
    getGameStatus(gameId, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getGameStatus>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetGameStatusSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getGameStatus>>>
export type GetGameStatusSuspenseQueryError = ErrorType<GameResponse>

export function useGetGameStatusSuspense<
  TData = Awaited<ReturnType<typeof getGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGameStatusSuspense<
  TData = Awaited<ReturnType<typeof getGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGameStatusSuspense<
  TData = Awaited<ReturnType<typeof getGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임방 정보 확인 API
 */

export function useGetGameStatusSuspense<
  TData = Awaited<ReturnType<typeof getGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetGameStatusSuspenseQueryOptions(gameId, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 게임방의 설정들을 변경 가능.
 * @summary 게임방 설정 업데이트 API
 */
export const updateGameStatus = (
  gameId: number,
  gameRequest: BodyType<GameRequest>,
  options?: SecondParameter<typeof customClientInstance>
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: gameRequest
    },
    options
  )
}

export const getUpdateGameStatusMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateGameStatus>>,
    TError,
    { gameId: number; data: BodyType<GameRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateGameStatus>>,
  TError,
  { gameId: number; data: BodyType<GameRequest> },
  TContext
> => {
  const mutationKey = ["updateGameStatus"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateGameStatus>>,
    { gameId: number; data: BodyType<GameRequest> }
  > = (props) => {
    const { gameId, data } = props ?? {}

    return updateGameStatus(gameId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateGameStatusMutationResult = NonNullable<Awaited<ReturnType<typeof updateGameStatus>>>
export type UpdateGameStatusMutationBody = BodyType<GameRequest>
export type UpdateGameStatusMutationError = ErrorType<boolean>

/**
 * @summary 게임방 설정 업데이트 API
 */
export const useUpdateGameStatus = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateGameStatus>>,
    TError,
    { gameId: number; data: BodyType<GameRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof updateGameStatus>>,
  TError,
  { gameId: number; data: BodyType<GameRequest> },
  TContext
> => {
  const mutationOptions = getUpdateGameStatusMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 게임방을 삭제 가능.
 * @summary 게임방 삭제 API
 */
export const deleteGame = (gameId: number, options?: SecondParameter<typeof customClientInstance>) => {
  return customClientInstance<boolean>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}`, method: "DELETE" },
    options
  )
}

export const getDeleteGameMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGame>>, TError, { gameId: number }, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof deleteGame>>, TError, { gameId: number }, TContext> => {
  const mutationKey = ["deleteGame"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteGame>>, { gameId: number }> = (props) => {
    const { gameId } = props ?? {}

    return deleteGame(gameId, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteGameMutationResult = NonNullable<Awaited<ReturnType<typeof deleteGame>>>

export type DeleteGameMutationError = ErrorType<boolean>

/**
 * @summary 게임방 삭제 API
 */
export const useDeleteGame = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteGame>>, TError, { gameId: number }, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<Awaited<ReturnType<typeof deleteGame>>, TError, { gameId: number }, TContext> => {
  const mutationOptions = getDeleteGameMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 게임방의 기본적인 설정들을 받아 생성함.
 * @summary 게임방 생성 API
 */
export const saveGame = (
  gameRequest: BodyType<GameRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<number>(
    {
      url: `/api/v1/games`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameRequest,
      signal
    },
    options
  )
}

export const getSaveGameMutationOptions = <TError = ErrorType<number>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveGame>>, TError, { data: BodyType<GameRequest> }, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof saveGame>>, TError, { data: BodyType<GameRequest> }, TContext> => {
  const mutationKey = ["saveGame"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof saveGame>>, { data: BodyType<GameRequest> }> = (
    props
  ) => {
    const { data } = props ?? {}

    return saveGame(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type SaveGameMutationResult = NonNullable<Awaited<ReturnType<typeof saveGame>>>
export type SaveGameMutationBody = BodyType<GameRequest>
export type SaveGameMutationError = ErrorType<number>

/**
 * @summary 게임방 생성 API
 */
export const useSaveGame = <TError = ErrorType<number>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveGame>>, TError, { data: BodyType<GameRequest> }, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<Awaited<ReturnType<typeof saveGame>>, TError, { data: BodyType<GameRequest> }, TContext> => {
  const mutationOptions = getSaveGameMutationOptions(options)

  return useMutation(mutationOptions)
}
