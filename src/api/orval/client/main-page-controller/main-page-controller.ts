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
  CustomPageImplGameListResponse,
  GameCategoryNumsResponse,
  GameDetailResponse,
  GetCategoryNumsParams,
  GetMainGameListParams
} from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 특정 게임방의 정보를 확인함.
 * @summary 게임방 정보 확인 API
 */
export const getGameStatus = (
  gameId: number,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<GameDetailResponse>(
    { url: `/api/v1/games/${encodeURIComponent(String(gameId))}`, method: "GET", signal },
    options
  )
}

export const getGetGameStatusQueryKey = (gameId: number) => {
  return [`/api/v1/games/${gameId}`] as const
}

export const getGetGameStatusInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getGameStatus>>>,
  TError = ErrorType<unknown>
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
export type GetGameStatusInfiniteQueryError = ErrorType<unknown>

export function useGetGameStatusInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getGameStatus>>>,
  TError = ErrorType<unknown>
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
  TError = ErrorType<unknown>
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
  TError = ErrorType<unknown>
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
  TError = ErrorType<unknown>
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
  TError = ErrorType<unknown>
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
export type GetGameStatusQueryError = ErrorType<unknown>

export function useGetGameStatus<TData = Awaited<ReturnType<typeof getGameStatus>>, TError = ErrorType<unknown>>(
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
export function useGetGameStatus<TData = Awaited<ReturnType<typeof getGameStatus>>, TError = ErrorType<unknown>>(
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
export function useGetGameStatus<TData = Awaited<ReturnType<typeof getGameStatus>>, TError = ErrorType<unknown>>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임방 정보 확인 API
 */

export function useGetGameStatus<TData = Awaited<ReturnType<typeof getGameStatus>>, TError = ErrorType<unknown>>(
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
  TError = ErrorType<unknown>
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
export type GetGameStatusSuspenseQueryError = ErrorType<unknown>

export function useGetGameStatusSuspense<
  TData = Awaited<ReturnType<typeof getGameStatus>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGameStatusSuspense<
  TData = Awaited<ReturnType<typeof getGameStatus>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetGameStatusSuspense<
  TData = Awaited<ReturnType<typeof getGameStatus>>,
  TError = ErrorType<unknown>
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
  TError = ErrorType<unknown>
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
 * 메인 페이지 리스트 목록을 제공한다.
 * @summary 메인 페이지 리스트 발급 API
 */
export const getMainGameList = (
  params?: GetMainGameListParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<CustomPageImplGameListResponse>(
    { url: `/api/v1/games/list`, method: "GET", params, signal },
    options
  )
}

export const getGetMainGameListQueryKey = (params?: GetMainGameListParams) => {
  return [`/api/v1/games/list`, ...(params ? [params] : [])] as const
}

export const getGetMainGameListInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getMainGameList>>, GetMainGameListParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getMainGameList>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getMainGameList>>,
        QueryKey,
        GetMainGameListParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetMainGameListQueryKey(params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getMainGameList>>,
    QueryKey,
    GetMainGameListParams["cursorId"]
  > = ({ signal, pageParam }) =>
    getMainGameList({ ...params, cursorId: pageParam || params?.["cursorId"] }, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getMainGameList>>,
    TError,
    TData,
    Awaited<ReturnType<typeof getMainGameList>>,
    QueryKey,
    GetMainGameListParams["cursorId"]
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetMainGameListInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getMainGameList>>>
export type GetMainGameListInfiniteQueryError = ErrorType<unknown>

export function useGetMainGameListInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getMainGameList>>, GetMainGameListParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params: undefined | GetMainGameListParams,
  options: {
    query: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getMainGameList>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getMainGameList>>,
        QueryKey,
        GetMainGameListParams["cursorId"]
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getMainGameList>>,
          TError,
          Awaited<ReturnType<typeof getMainGameList>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMainGameListInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getMainGameList>>, GetMainGameListParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getMainGameList>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getMainGameList>>,
        QueryKey,
        GetMainGameListParams["cursorId"]
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getMainGameList>>,
          TError,
          Awaited<ReturnType<typeof getMainGameList>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMainGameListInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getMainGameList>>, GetMainGameListParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getMainGameList>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getMainGameList>>,
        QueryKey,
        GetMainGameListParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 메인 페이지 리스트 발급 API
 */

export function useGetMainGameListInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getMainGameList>>, GetMainGameListParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getMainGameList>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getMainGameList>>,
        QueryKey,
        GetMainGameListParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetMainGameListInfiniteQueryOptions(params, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetMainGameListQueryOptions = <
  TData = Awaited<ReturnType<typeof getMainGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetMainGameListQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getMainGameList>>> = ({ signal }) =>
    getMainGameList(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getMainGameList>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetMainGameListQueryResult = NonNullable<Awaited<ReturnType<typeof getMainGameList>>>
export type GetMainGameListQueryError = ErrorType<unknown>

export function useGetMainGameList<TData = Awaited<ReturnType<typeof getMainGameList>>, TError = ErrorType<unknown>>(
  params: undefined | GetMainGameListParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getMainGameList>>,
          TError,
          Awaited<ReturnType<typeof getMainGameList>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMainGameList<TData = Awaited<ReturnType<typeof getMainGameList>>, TError = ErrorType<unknown>>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getMainGameList>>,
          TError,
          Awaited<ReturnType<typeof getMainGameList>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMainGameList<TData = Awaited<ReturnType<typeof getMainGameList>>, TError = ErrorType<unknown>>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 메인 페이지 리스트 발급 API
 */

export function useGetMainGameList<TData = Awaited<ReturnType<typeof getMainGameList>>, TError = ErrorType<unknown>>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetMainGameListQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetMainGameListSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getMainGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetMainGameListQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getMainGameList>>> = ({ signal }) =>
    getMainGameList(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getMainGameList>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetMainGameListSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getMainGameList>>>
export type GetMainGameListSuspenseQueryError = ErrorType<unknown>

export function useGetMainGameListSuspense<
  TData = Awaited<ReturnType<typeof getMainGameList>>,
  TError = ErrorType<unknown>
>(
  params: undefined | GetMainGameListParams,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMainGameListSuspense<
  TData = Awaited<ReturnType<typeof getMainGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMainGameListSuspense<
  TData = Awaited<ReturnType<typeof getMainGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 메인 페이지 리스트 발급 API
 */

export function useGetMainGameListSuspense<
  TData = Awaited<ReturnType<typeof getMainGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetMainGameListSuspenseQueryOptions(params, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 각 카테고리 별 게임 갯수를 출력한다.
 * @summary 각 카테고리 별 게임 갯수 출력 API
 */
export const getCategoryNums = (
  params?: GetCategoryNumsParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<GameCategoryNumsResponse>(
    { url: `/api/v1/games/categories`, method: "GET", params, signal },
    options
  )
}

export const getGetCategoryNumsQueryKey = (params?: GetCategoryNumsParams) => {
  return [`/api/v1/games/categories`, ...(params ? [params] : [])] as const
}

export const getGetCategoryNumsQueryOptions = <
  TData = Awaited<ReturnType<typeof getCategoryNums>>,
  TError = ErrorType<unknown>
>(
  params?: GetCategoryNumsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoryNums>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetCategoryNumsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getCategoryNums>>> = ({ signal }) =>
    getCategoryNums(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getCategoryNums>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetCategoryNumsQueryResult = NonNullable<Awaited<ReturnType<typeof getCategoryNums>>>
export type GetCategoryNumsQueryError = ErrorType<unknown>

export function useGetCategoryNums<TData = Awaited<ReturnType<typeof getCategoryNums>>, TError = ErrorType<unknown>>(
  params: undefined | GetCategoryNumsParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoryNums>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCategoryNums>>,
          TError,
          Awaited<ReturnType<typeof getCategoryNums>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCategoryNums<TData = Awaited<ReturnType<typeof getCategoryNums>>, TError = ErrorType<unknown>>(
  params?: GetCategoryNumsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoryNums>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCategoryNums>>,
          TError,
          Awaited<ReturnType<typeof getCategoryNums>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetCategoryNums<TData = Awaited<ReturnType<typeof getCategoryNums>>, TError = ErrorType<unknown>>(
  params?: GetCategoryNumsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoryNums>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 각 카테고리 별 게임 갯수 출력 API
 */

export function useGetCategoryNums<TData = Awaited<ReturnType<typeof getCategoryNums>>, TError = ErrorType<unknown>>(
  params?: GetCategoryNumsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getCategoryNums>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetCategoryNumsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}
