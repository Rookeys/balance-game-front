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
import type { CustomPageImplGameListResponse, GetResources1Params } from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 메인 페이지 리스트 목록을 제공한다.
 * @summary 메인 페이지 리스트 발급 API
 */
export const getResources1 = (
  params?: GetResources1Params,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<CustomPageImplGameListResponse>(
    { url: `/api/v1/games/list`, method: "GET", params, signal },
    options
  )
}

export const getGetResources1QueryKey = (params?: GetResources1Params) => {
  return [`/api/v1/games/list`, ...(params ? [params] : [])] as const
}

export const getGetResources1InfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getResources1>>, GetResources1Params["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResources1>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResources1>>,
        QueryKey,
        GetResources1Params["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResources1QueryKey(params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getResources1>>,
    QueryKey,
    GetResources1Params["cursorId"]
  > = ({ signal, pageParam }) =>
    getResources1({ ...params, cursorId: pageParam || params?.["cursorId"] }, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getResources1>>,
    TError,
    TData,
    Awaited<ReturnType<typeof getResources1>>,
    QueryKey,
    GetResources1Params["cursorId"]
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResources1InfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getResources1>>>
export type GetResources1InfiniteQueryError = ErrorType<unknown>

export function useGetResources1Infinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResources1>>, GetResources1Params["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params: undefined | GetResources1Params,
  options: {
    query: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResources1>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResources1>>,
        QueryKey,
        GetResources1Params["cursorId"]
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResources1>>,
          TError,
          Awaited<ReturnType<typeof getResources1>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResources1Infinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResources1>>, GetResources1Params["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResources1>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResources1>>,
        QueryKey,
        GetResources1Params["cursorId"]
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResources1>>,
          TError,
          Awaited<ReturnType<typeof getResources1>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResources1Infinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResources1>>, GetResources1Params["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResources1>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResources1>>,
        QueryKey,
        GetResources1Params["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 메인 페이지 리스트 발급 API
 */

export function useGetResources1Infinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getResources1>>, GetResources1Params["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getResources1>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getResources1>>,
        QueryKey,
        GetResources1Params["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResources1InfiniteQueryOptions(params, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetResources1QueryOptions = <
  TData = Awaited<ReturnType<typeof getResources1>>,
  TError = ErrorType<unknown>
>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResources1QueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResources1>>> = ({ signal }) =>
    getResources1(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getResources1>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResources1QueryResult = NonNullable<Awaited<ReturnType<typeof getResources1>>>
export type GetResources1QueryError = ErrorType<unknown>

export function useGetResources1<TData = Awaited<ReturnType<typeof getResources1>>, TError = ErrorType<unknown>>(
  params: undefined | GetResources1Params,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResources1>>,
          TError,
          Awaited<ReturnType<typeof getResources1>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResources1<TData = Awaited<ReturnType<typeof getResources1>>, TError = ErrorType<unknown>>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getResources1>>,
          TError,
          Awaited<ReturnType<typeof getResources1>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResources1<TData = Awaited<ReturnType<typeof getResources1>>, TError = ErrorType<unknown>>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 메인 페이지 리스트 발급 API
 */

export function useGetResources1<TData = Awaited<ReturnType<typeof getResources1>>, TError = ErrorType<unknown>>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResources1QueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetResources1SuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getResources1>>,
  TError = ErrorType<unknown>
>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetResources1QueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResources1>>> = ({ signal }) =>
    getResources1(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getResources1>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetResources1SuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getResources1>>>
export type GetResources1SuspenseQueryError = ErrorType<unknown>

export function useGetResources1Suspense<
  TData = Awaited<ReturnType<typeof getResources1>>,
  TError = ErrorType<unknown>
>(
  params: undefined | GetResources1Params,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResources1Suspense<
  TData = Awaited<ReturnType<typeof getResources1>>,
  TError = ErrorType<unknown>
>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResources1Suspense<
  TData = Awaited<ReturnType<typeof getResources1>>,
  TError = ErrorType<unknown>
>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 메인 페이지 리스트 발급 API
 */

export function useGetResources1Suspense<
  TData = Awaited<ReturnType<typeof getResources1>>,
  TError = ErrorType<unknown>
>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResources1SuspenseQueryOptions(params, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}
