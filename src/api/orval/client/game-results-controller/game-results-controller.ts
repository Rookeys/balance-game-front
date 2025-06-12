import { useInfiniteQuery, useQuery, useSuspenseQuery } from "@tanstack/react-query"
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
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult
} from "@tanstack/react-query"
import type {
  CustomBasedPageImplGameResultResponse,
  CustomPageImplGameResultResponse,
  GetResultRankingParams,
  GetResultRankingUsingPageParams
} from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 게임방의 리소스 별 승률 목록을 출력함.
 * @summary 각 리소스 별 승률 목록 출력 API
 */
export const getResultRanking = (
  gameId: number,
  params?: GetResultRankingParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<CustomPageImplGameResultResponse>(
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 각 리소스 별 승률 목록 출력 API
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResultRanking<TData = Awaited<ReturnType<typeof getResultRanking>>, TError = ErrorType<unknown>>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 각 리소스 별 승률 목록 출력 API
 */

export function useGetResultRanking<TData = Awaited<ReturnType<typeof getResultRanking>>, TError = ErrorType<unknown>>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResultRankingQueryOptions(gameId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetResultRankingSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getResultRanking>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResultRankingQueryKey(gameId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResultRanking>>> = ({ signal }) =>
    getResultRanking(gameId, params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getResultRanking>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResultRankingSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getResultRanking>>>
export type GetResultRankingSuspenseQueryError = ErrorType<unknown>

export function useGetResultRankingSuspense<
  TData = Awaited<ReturnType<typeof getResultRanking>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params: undefined | GetResultRankingParams,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResultRankingSuspense<
  TData = Awaited<ReturnType<typeof getResultRanking>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResultRankingSuspense<
  TData = Awaited<ReturnType<typeof getResultRanking>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 각 리소스 별 승률 목록 출력 API
 */

export function useGetResultRankingSuspense<
  TData = Awaited<ReturnType<typeof getResultRanking>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResultRanking>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResultRankingSuspenseQueryOptions(gameId, params, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 해당 게임방의 리소스 별 승률 목록을 출력함.
 * @summary 각 리소스 별 승률 목록 출력 API (page 기반)
 */
export const getResultRankingUsingPage = (
  gameId: number,
  params?: GetResultRankingUsingPageParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<CustomBasedPageImplGameResultResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}/results/page`, method: "GET", params, signal },
    options
  )
}

export const getGetResultRankingUsingPageQueryKey = (gameId: number, params?: GetResultRankingUsingPageParams) => {
  return [`/api/v1/games/${gameId}/results/page`, ...(params ? [params] : [])] as const
}

export const getGetResultRankingUsingPageQueryOptions = <
  TData = Awaited<ReturnType<typeof getResultRankingUsingPage>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingUsingPageParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRankingUsingPage>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResultRankingUsingPageQueryKey(gameId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResultRankingUsingPage>>> = ({ signal }) =>
    getResultRankingUsingPage(gameId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getResultRankingUsingPage>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResultRankingUsingPageQueryResult = NonNullable<Awaited<ReturnType<typeof getResultRankingUsingPage>>>
export type GetResultRankingUsingPageQueryError = ErrorType<unknown>

export function useGetResultRankingUsingPage<
  TData = Awaited<ReturnType<typeof getResultRankingUsingPage>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params: undefined | GetResultRankingUsingPageParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRankingUsingPage>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResultRankingUsingPage>>,
          TError,
          Awaited<ReturnType<typeof getResultRankingUsingPage>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResultRankingUsingPage<
  TData = Awaited<ReturnType<typeof getResultRankingUsingPage>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingUsingPageParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRankingUsingPage>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResultRankingUsingPage>>,
          TError,
          Awaited<ReturnType<typeof getResultRankingUsingPage>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResultRankingUsingPage<
  TData = Awaited<ReturnType<typeof getResultRankingUsingPage>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingUsingPageParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRankingUsingPage>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 각 리소스 별 승률 목록 출력 API (page 기반)
 */

export function useGetResultRankingUsingPage<
  TData = Awaited<ReturnType<typeof getResultRankingUsingPage>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  params?: GetResultRankingUsingPageParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResultRankingUsingPage>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResultRankingUsingPageQueryOptions(gameId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}
