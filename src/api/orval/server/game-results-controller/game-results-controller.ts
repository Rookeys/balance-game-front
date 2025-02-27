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
import type { CustomPageImplGameResultResponse, GetResultRankingParams } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 게임방의 결과창을 출력함.
 * @summary 게임 결과창 출력 API
 */
export const getResultRanking = (
  gameId: number,
  params?: GetResultRankingParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplGameResultResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/results`, method: "GET", params, signal },
    options
  )
}

export const getGetResultRankingQueryKey = (gameId: number, params?: GetResultRankingParams) => {
  return [`/api/v1/games/${gameId}/results`, ...(params ? [params] : [])] as const
}

export const getGetResultRankingQueryOptions = <
  TData = Awaited<ReturnType<typeof getResultRanking>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResultRanking<TData = Awaited<ReturnType<typeof getResultRanking>>, TError = ErrorType<unknown>>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResultRankingQueryOptions(gameId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 게임 결과창 출력 API
 */
export const prefetchGetResultRanking = async <
  TData = Awaited<ReturnType<typeof getResultRanking>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetResultRankingQueryOptions(gameId, params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}
