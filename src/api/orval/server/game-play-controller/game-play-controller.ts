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
  ContinuePlayRoomParams,
  GameInfoResponse,
  GamePlayRequest,
  GamePlayResponse,
  GamePlayRoundRequest
} from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType, BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 진행했던 게임을 다시 이어 할 수 있다.
 * @summary 게임 이어 하기
 */
export const continuePlayRoom = (
  gameId: number,
  playId: number,
  params?: ContinuePlayRoomParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<GamePlayResponse>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/play/${encodeURIComponent(String(playId))}`,
      method: "GET",
      params,
      signal
    },
    options
  )
}

export const getContinuePlayRoomQueryKey = (gameId: number, playId: number, params?: ContinuePlayRoomParams) => {
  return [`/api/v1/games/${gameId}/play/${playId}`, ...(params ? [params] : [])] as const
}

export const getContinuePlayRoomQueryOptions = <
  TData = Awaited<ReturnType<typeof continuePlayRoom>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  playId: number,
  params?: ContinuePlayRoomParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getContinuePlayRoomQueryKey(gameId, playId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof continuePlayRoom>>> = ({ signal }) =>
    continuePlayRoom(gameId, playId, params, requestOptions, signal)

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
  params: undefined | ContinuePlayRoomParams,
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
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useContinuePlayRoom<TData = Awaited<ReturnType<typeof continuePlayRoom>>, TError = ErrorType<unknown>>(
  gameId: number,
  playId: number,
  params?: ContinuePlayRoomParams,
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
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useContinuePlayRoom<TData = Awaited<ReturnType<typeof continuePlayRoom>>, TError = ErrorType<unknown>>(
  gameId: number,
  playId: number,
  params?: ContinuePlayRoomParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 이어 하기
 */

export function useContinuePlayRoom<TData = Awaited<ReturnType<typeof continuePlayRoom>>, TError = ErrorType<unknown>>(
  gameId: number,
  playId: number,
  params?: ContinuePlayRoomParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getContinuePlayRoomQueryOptions(gameId, playId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게임 이어 하기
 */
export const prefetchContinuePlayRoom = async <
  TData = Awaited<ReturnType<typeof continuePlayRoom>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  gameId: number,
  playId: number,
  params?: ContinuePlayRoomParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof continuePlayRoom>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getContinuePlayRoomQueryOptions(gameId, playId, params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 선택한 리소스를 업데이트하고 다음 페어를 반환.
 * @summary 플레이룸 결과 반영 API
 */
export const updatePlayRoom = (
  gameId: number,
  playId: number,
  gamePlayRequest: BodyType<GamePlayRequest>,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<GamePlayResponse>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/play/${encodeURIComponent(String(playId))}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: gamePlayRequest
    },
    options
  )
}

/**
 * 게임의 전반적인 명세 데이터 출력한다.
 * @summary 게임의 전반적인 명세 데이터 출력
 */
export const getGameDetails = (
  gameId: number,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<GameInfoResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/play`, method: "GET", signal },
    options
  )
}

export const getGetGameDetailsQueryKey = (gameId: number) => {
  return [`/api/v1/games/${gameId}/play`] as const
}

export const getGetGameDetailsQueryOptions = <
  TData = Awaited<ReturnType<typeof getGameDetails>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameDetails>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetGameDetailsQueryKey(gameId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getGameDetails>>> = ({ signal }) =>
    getGameDetails(gameId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getGameDetails>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetGameDetailsQueryResult = NonNullable<Awaited<ReturnType<typeof getGameDetails>>>
export type GetGameDetailsQueryError = ErrorType<unknown>

export function useGetGameDetails<TData = Awaited<ReturnType<typeof getGameDetails>>, TError = ErrorType<unknown>>(
  gameId: number,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameDetails>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getGameDetails>>,
          TError,
          Awaited<ReturnType<typeof getGameDetails>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGameDetails<TData = Awaited<ReturnType<typeof getGameDetails>>, TError = ErrorType<unknown>>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameDetails>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getGameDetails>>,
          TError,
          Awaited<ReturnType<typeof getGameDetails>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGameDetails<TData = Awaited<ReturnType<typeof getGameDetails>>, TError = ErrorType<unknown>>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameDetails>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임의 전반적인 명세 데이터 출력
 */

export function useGetGameDetails<TData = Awaited<ReturnType<typeof getGameDetails>>, TError = ErrorType<unknown>>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameDetails>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetGameDetailsQueryOptions(gameId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게임의 전반적인 명세 데이터 출력
 */
export const prefetchGetGameDetails = async <
  TData = Awaited<ReturnType<typeof getGameDetails>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameDetails>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetGameDetailsQueryOptions(gameId, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * n강만큼 데이터가 준비되고 첫 2개의 데이터를 반환.
 * @summary 플레이룸 생성 및 게임 시작 API
 */
export const createPlayRoom = (
  gameId: number,
  gamePlayRoundRequest: BodyType<GamePlayRoundRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<GamePlayResponse>(
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
