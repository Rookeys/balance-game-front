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
import type { GameRequest, GameResponse } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType, BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 특정 게임방의 설정을 확인함.
 * @summary 게임방 정보 확인 API
 */
export const getGameStatus = (
  gameId: number,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<GameResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}`, method: "GET", signal },
    options
  )
}

export const getGetGameStatusQueryKey = (gameId: number) => {
  return [`/api/v1/games/${gameId}`] as const
}

export const getGetGameStatusQueryOptions = <
  TData = Awaited<ReturnType<typeof getGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGameStatus<TData = Awaited<ReturnType<typeof getGameStatus>>, TError = ErrorType<GameResponse>>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임방 정보 확인 API
 */

export function useGetGameStatus<TData = Awaited<ReturnType<typeof getGameStatus>>, TError = ErrorType<GameResponse>>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetGameStatusQueryOptions(gameId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게임방 정보 확인 API
 */
export const prefetchGetGameStatus = async <
  TData = Awaited<ReturnType<typeof getGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  queryClient: QueryClient,
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetGameStatusQueryOptions(gameId, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 게임방의 설정들을 변경 가능.
 * @summary 게임방 설정 업데이트 API
 */
export const updateGameStatus = (
  gameId: number,
  gameRequest: BodyType<GameRequest>,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: gameRequest
    },
    options
  )
}

/**
 * 게임방을 삭제 가능.
 * @summary 게임방 삭제 API
 */
export const deleteGame = (gameId: number, options?: SecondParameter<typeof customServerInstance>) => {
  return customServerInstance<boolean>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}`, method: "DELETE" },
    options
  )
}

/**
 * 게임방의 기본적인 설정들을 받아 생성함.
 * @summary 게임방 생성 API
 */
export const saveGame = (
  gameRequest: BodyType<GameRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<number>(
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
