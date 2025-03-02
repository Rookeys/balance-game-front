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
import type { CustomPageImplGameListResponse, GetResources1Params } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 메인 페이지 리스트 목록을 제공한다.
 * @summary 메인 페이지 리스트 발급 API
 */
export const getResources1 = (
  params?: GetResources1Params,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplGameListResponse>(
    { url: `/api/v1/games/list`, method: "GET", params, signal },
    options
  )
}

export const getGetResources1QueryKey = (params?: GetResources1Params) => {
  return [`/api/v1/games/list`, ...(params ? [params] : [])] as const
}

export const getGetResources1QueryOptions = <
  TData = Awaited<ReturnType<typeof getResources1>>,
  TError = ErrorType<unknown>
>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetResources1<TData = Awaited<ReturnType<typeof getResources1>>, TError = ErrorType<unknown>>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 메인 페이지 리스트 발급 API
 */

export function useGetResources1<TData = Awaited<ReturnType<typeof getResources1>>, TError = ErrorType<unknown>>(
  params?: GetResources1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetResources1QueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 메인 페이지 리스트 발급 API
 */
export const prefetchGetResources1 = async <
  TData = Awaited<ReturnType<typeof getResources1>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  params?: GetResources1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getResources1>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetResources1QueryOptions(params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}
