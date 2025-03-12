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
import type { CustomPageImplGameListResponse, GetMainGameListParams } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 메인 페이지 리스트 목록을 제공한다.
 * @summary 메인 페이지 리스트 발급 API
 */
export const getMainGameList = (
  params?: GetMainGameListParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplGameListResponse>(
    { url: `/api/v1/games/list`, method: "GET", params, signal },
    options
  )
}

export const getGetMainGameListQueryKey = (params?: GetMainGameListParams) => {
  return [`/api/v1/games/list`, ...(params ? [params] : [])] as const
}

export const getGetMainGameListQueryOptions = <
  TData = Awaited<ReturnType<typeof getMainGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMainGameList<TData = Awaited<ReturnType<typeof getMainGameList>>, TError = ErrorType<unknown>>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 메인 페이지 리스트 발급 API
 */

export function useGetMainGameList<TData = Awaited<ReturnType<typeof getMainGameList>>, TError = ErrorType<unknown>>(
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetMainGameListQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 메인 페이지 리스트 발급 API
 */
export const prefetchGetMainGameList = async <
  TData = Awaited<ReturnType<typeof getMainGameList>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  params?: GetMainGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMainGameList>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetMainGameListQueryOptions(params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}
