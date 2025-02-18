import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseInfiniteQueryResult,
  DefinedUseQueryResult,
  InfiniteData,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult
} from "@tanstack/react-query"
import type { GetResultRankingParams, PageGameResultResponse } from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType } from ".././clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 게임방의 결과창을 출력함.
 * @summary 게임 결과창 출력 API
 */
export const getResultRanking = (
  gameId: number,
  params?: GetResultRankingParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<PageGameResultResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/results`, method: "GET", params, signal },
    options
  )
}

export const getGetResultRankingQueryKey = (gameId: number, params?: GetResultRankingParams) => {
  return [`/api/v1/games/${gameId}/results`, ...(params ? [params] : [])] as const
}

export const getGetResultRankingInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getResultRanking>>, GetResultRankingParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResultRanking>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResultRanking>>,
        QueryKey,
        GetResultRankingParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResultRankingQueryKey(gameId, params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getResultRanking>>,
    QueryKey,
    GetResultRankingParams["cursorId"]
  > = ({ signal, pageParam }) =>
    getResultRanking(gameId, { ...params, cursorId: pageParam || params?.["cursorId"] }, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getResultRanking>>,
    TError,
    TData,
    Awaited<ReturnType<typeof getResultRanking>>,
    QueryKey,
    GetResultRankingParams["cursorId"]
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResultRankingInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getResultRanking>>>
export type GetResultRankingInfiniteQueryError = ErrorType<unknown>

export function useGetResultRankingInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResultRanking>>, GetResultRankingParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params: undefined | GetResultRankingParams,
  options: {
    query: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResultRanking>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResultRanking>>,
        QueryKey,
        GetResultRankingParams["cursorId"]
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResultRanking>>,
          TError,
          Awaited<ReturnType<typeof getResultRanking>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResultRankingInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResultRanking>>, GetResultRankingParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResultRanking>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResultRanking>>,
        QueryKey,
        GetResultRankingParams["cursorId"]
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResultRanking>>,
          TError,
          Awaited<ReturnType<typeof getResultRanking>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResultRankingInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResultRanking>>, GetResultRankingParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResultRanking>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResultRanking>>,
        QueryKey,
        GetResultRankingParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 결과창 출력 API
 */

export function useGetResultRankingInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResultRanking>>, GetResultRankingParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResultRanking>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResultRanking>>,
        QueryKey,
        GetResultRankingParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResultRankingInfiniteQueryOptions(gameId, params, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetResultRankingQueryOptions = <
  TData = Awaited<ReturnType<typeof getResultRanking>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResultRankingQueryKey(gameId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResultRanking>>> = ({ signal }) =>
    getResultRanking(gameId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getResultRanking>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResultRankingQueryResult = NonNullable<Awaited<ReturnType<typeof getResultRanking>>>
export type GetResultRankingQueryError = ErrorType<unknown>

export function useGetResultRanking<TData = Awaited<ReturnType<typeof getResultRanking>>, TError = ErrorType<unknown>>(
  gameId: number,
  params: undefined | GetResultRankingParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResultRanking>>,
          TError,
          Awaited<ReturnType<typeof getResultRanking>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResultRanking<TData = Awaited<ReturnType<typeof getResultRanking>>, TError = ErrorType<unknown>>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResultRanking>>,
          TError,
          Awaited<ReturnType<typeof getResultRanking>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResultRanking<TData = Awaited<ReturnType<typeof getResultRanking>>, TError = ErrorType<unknown>>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 결과창 출력 API
 */

export function useGetResultRanking<TData = Awaited<ReturnType<typeof getResultRanking>>, TError = ErrorType<unknown>>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResultRankingQueryOptions(gameId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}
