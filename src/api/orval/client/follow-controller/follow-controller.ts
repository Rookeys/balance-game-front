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
import type {
  FollowCountResponse,
  FollowRequest,
  FollowUserResponse,
  GetFollowCountsParams,
  GetFollowersParams,
  GetFollowingsParams,
  IsFollowingParams
} from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType, BodyType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 특정 사용자를 팔로우합니다.
 * @summary 팔로워 등록 API
 */
export const addFollow = (
  followRequest: BodyType<FollowRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/follows`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: followRequest,
      signal
    },
    options
  )
}

export const getAddFollowMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addFollow>>,
    TError,
    { data: BodyType<FollowRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof addFollow>>, TError, { data: BodyType<FollowRequest> }, TContext> => {
  const mutationKey = ["addFollow"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof addFollow>>, { data: BodyType<FollowRequest> }> = (
    props
  ) => {
    const { data } = props ?? {}

    return addFollow(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AddFollowMutationResult = NonNullable<Awaited<ReturnType<typeof addFollow>>>
export type AddFollowMutationBody = BodyType<FollowRequest>
export type AddFollowMutationError = ErrorType<boolean>

/**
 * @summary 팔로워 등록 API
 */
export const useAddFollow = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addFollow>>,
    TError,
    { data: BodyType<FollowRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<Awaited<ReturnType<typeof addFollow>>, TError, { data: BodyType<FollowRequest> }, TContext> => {
  const mutationOptions = getAddFollowMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 랜덤으로 팔로우하지 않은 6명의 사용자를 추천합니다.
 * @summary 추천 프로필 목록 조회 API
 */
export const getRecommendedProfiles = (
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<FollowUserResponse[]>(
    { url: `/api/v1/follows/recommended`, method: "GET", signal },
    options
  )
}

export const getGetRecommendedProfilesQueryKey = () => {
  return [`/api/v1/follows/recommended`] as const
}

export const getGetRecommendedProfilesQueryOptions = <
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetRecommendedProfilesQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getRecommendedProfiles>>> = ({ signal }) =>
    getRecommendedProfiles(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getRecommendedProfiles>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetRecommendedProfilesQueryResult = NonNullable<Awaited<ReturnType<typeof getRecommendedProfiles>>>
export type GetRecommendedProfilesQueryError = ErrorType<unknown>

export function useGetRecommendedProfiles<
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(options: {
  query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>> &
    Pick<
      DefinedInitialDataOptions<
        Awaited<ReturnType<typeof getRecommendedProfiles>>,
        TError,
        Awaited<ReturnType<typeof getRecommendedProfiles>>
      >,
      "initialData"
    >
  request?: SecondParameter<typeof customClientInstance>
}): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetRecommendedProfiles<
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>> &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getRecommendedProfiles>>,
        TError,
        Awaited<ReturnType<typeof getRecommendedProfiles>>
      >,
      "initialData"
    >
  request?: SecondParameter<typeof customClientInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetRecommendedProfiles<
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 추천 프로필 목록 조회 API
 */

export function useGetRecommendedProfiles<
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetRecommendedProfilesQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetRecommendedProfilesSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetRecommendedProfilesQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getRecommendedProfiles>>> = ({ signal }) =>
    getRecommendedProfiles(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getRecommendedProfiles>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetRecommendedProfilesSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getRecommendedProfiles>>>
export type GetRecommendedProfilesSuspenseQueryError = ErrorType<unknown>

export function useGetRecommendedProfilesSuspense<
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(options: {
  query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetRecommendedProfilesSuspense<
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetRecommendedProfilesSuspense<
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 추천 프로필 목록 조회 API
 */

export function useGetRecommendedProfilesSuspense<
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetRecommendedProfilesSuspenseQueryOptions(options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 특정 사용자의 팔로잉 목록을 조회합니다.
 * @summary 팔로잉 목록 조회 API
 */
export const getFollowings = (
  params: GetFollowingsParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<FollowUserResponse[]>(
    { url: `/api/v1/follows/followings`, method: "GET", params, signal },
    options
  )
}

export const getGetFollowingsQueryKey = (params: GetFollowingsParams) => {
  return [`/api/v1/follows/followings`, ...(params ? [params] : [])] as const
}

export const getGetFollowingsInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getFollowings>>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowingsParams,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetFollowingsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getFollowings>>> = ({ signal }) =>
    getFollowings(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getFollowings>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetFollowingsInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getFollowings>>>
export type GetFollowingsInfiniteQueryError = ErrorType<FollowUserResponse[]>

export function useGetFollowingsInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getFollowings>>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowingsParams,
  options: {
    query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollowings>>,
          TError,
          Awaited<ReturnType<typeof getFollowings>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowingsInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getFollowings>>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowingsParams,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollowings>>,
          TError,
          Awaited<ReturnType<typeof getFollowings>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowingsInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getFollowings>>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowingsParams,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 팔로잉 목록 조회 API
 */

export function useGetFollowingsInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getFollowings>>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowingsParams,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetFollowingsInfiniteQueryOptions(params, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetFollowingsQueryOptions = <
  TData = Awaited<ReturnType<typeof getFollowings>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowingsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetFollowingsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getFollowings>>> = ({ signal }) =>
    getFollowings(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getFollowings>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetFollowingsQueryResult = NonNullable<Awaited<ReturnType<typeof getFollowings>>>
export type GetFollowingsQueryError = ErrorType<FollowUserResponse[]>

export function useGetFollowings<
  TData = Awaited<ReturnType<typeof getFollowings>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowingsParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollowings>>,
          TError,
          Awaited<ReturnType<typeof getFollowings>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowings<
  TData = Awaited<ReturnType<typeof getFollowings>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowingsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollowings>>,
          TError,
          Awaited<ReturnType<typeof getFollowings>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowings<
  TData = Awaited<ReturnType<typeof getFollowings>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowingsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 팔로잉 목록 조회 API
 */

export function useGetFollowings<
  TData = Awaited<ReturnType<typeof getFollowings>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowingsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetFollowingsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 특정 사용자의 팔로워 목록을 조회합니다.
 * @summary 팔로워 목록 조회 API
 */
export const getFollowers = (
  params: GetFollowersParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<FollowUserResponse[]>(
    { url: `/api/v1/follows/followers`, method: "GET", params, signal },
    options
  )
}

export const getGetFollowersQueryKey = (params: GetFollowersParams) => {
  return [`/api/v1/follows/followers`, ...(params ? [params] : [])] as const
}

export const getGetFollowersInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getFollowers>>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowersParams,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetFollowersQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getFollowers>>> = ({ signal }) =>
    getFollowers(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getFollowers>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetFollowersInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getFollowers>>>
export type GetFollowersInfiniteQueryError = ErrorType<FollowUserResponse[]>

export function useGetFollowersInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getFollowers>>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowersParams,
  options: {
    query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollowers>>,
          TError,
          Awaited<ReturnType<typeof getFollowers>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowersInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getFollowers>>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowersParams,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollowers>>,
          TError,
          Awaited<ReturnType<typeof getFollowers>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowersInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getFollowers>>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowersParams,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 팔로워 목록 조회 API
 */

export function useGetFollowersInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getFollowers>>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowersParams,
  options?: {
    query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetFollowersInfiniteQueryOptions(params, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetFollowersQueryOptions = <
  TData = Awaited<ReturnType<typeof getFollowers>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowersParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetFollowersQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getFollowers>>> = ({ signal }) =>
    getFollowers(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getFollowers>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetFollowersQueryResult = NonNullable<Awaited<ReturnType<typeof getFollowers>>>
export type GetFollowersQueryError = ErrorType<FollowUserResponse[]>

export function useGetFollowers<
  TData = Awaited<ReturnType<typeof getFollowers>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowersParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollowers>>,
          TError,
          Awaited<ReturnType<typeof getFollowers>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowers<
  TData = Awaited<ReturnType<typeof getFollowers>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowersParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollowers>>,
          TError,
          Awaited<ReturnType<typeof getFollowers>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowers<
  TData = Awaited<ReturnType<typeof getFollowers>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowersParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 팔로워 목록 조회 API
 */

export function useGetFollowers<
  TData = Awaited<ReturnType<typeof getFollowers>>,
  TError = ErrorType<FollowUserResponse[]>
>(
  params: GetFollowersParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetFollowersQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 특정 사용자의 팔로워 수와 팔로잉 수를 조회합니다.
 * @summary 팔로워/팔로잉 수 조회 API
 */
export const getFollowCounts = (
  params: GetFollowCountsParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<FollowCountResponse>(
    { url: `/api/v1/follows/counts`, method: "GET", params, signal },
    options
  )
}

export const getGetFollowCountsQueryKey = (params: GetFollowCountsParams) => {
  return [`/api/v1/follows/counts`, ...(params ? [params] : [])] as const
}

export const getGetFollowCountsQueryOptions = <
  TData = Awaited<ReturnType<typeof getFollowCounts>>,
  TError = ErrorType<FollowCountResponse>
>(
  params: GetFollowCountsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowCounts>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetFollowCountsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getFollowCounts>>> = ({ signal }) =>
    getFollowCounts(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getFollowCounts>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetFollowCountsQueryResult = NonNullable<Awaited<ReturnType<typeof getFollowCounts>>>
export type GetFollowCountsQueryError = ErrorType<FollowCountResponse>

export function useGetFollowCounts<
  TData = Awaited<ReturnType<typeof getFollowCounts>>,
  TError = ErrorType<FollowCountResponse>
>(
  params: GetFollowCountsParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowCounts>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollowCounts>>,
          TError,
          Awaited<ReturnType<typeof getFollowCounts>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowCounts<
  TData = Awaited<ReturnType<typeof getFollowCounts>>,
  TError = ErrorType<FollowCountResponse>
>(
  params: GetFollowCountsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowCounts>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getFollowCounts>>,
          TError,
          Awaited<ReturnType<typeof getFollowCounts>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowCounts<
  TData = Awaited<ReturnType<typeof getFollowCounts>>,
  TError = ErrorType<FollowCountResponse>
>(
  params: GetFollowCountsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowCounts>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 팔로워/팔로잉 수 조회 API
 */

export function useGetFollowCounts<
  TData = Awaited<ReturnType<typeof getFollowCounts>>,
  TError = ErrorType<FollowCountResponse>
>(
  params: GetFollowCountsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowCounts>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetFollowCountsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetFollowCountsSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getFollowCounts>>,
  TError = ErrorType<FollowCountResponse>
>(
  params: GetFollowCountsParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFollowCounts>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetFollowCountsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getFollowCounts>>> = ({ signal }) =>
    getFollowCounts(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getFollowCounts>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetFollowCountsSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getFollowCounts>>>
export type GetFollowCountsSuspenseQueryError = ErrorType<FollowCountResponse>

export function useGetFollowCountsSuspense<
  TData = Awaited<ReturnType<typeof getFollowCounts>>,
  TError = ErrorType<FollowCountResponse>
>(
  params: GetFollowCountsParams,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFollowCounts>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowCountsSuspense<
  TData = Awaited<ReturnType<typeof getFollowCounts>>,
  TError = ErrorType<FollowCountResponse>
>(
  params: GetFollowCountsParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFollowCounts>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowCountsSuspense<
  TData = Awaited<ReturnType<typeof getFollowCounts>>,
  TError = ErrorType<FollowCountResponse>
>(
  params: GetFollowCountsParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFollowCounts>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 팔로워/팔로잉 수 조회 API
 */

export function useGetFollowCountsSuspense<
  TData = Awaited<ReturnType<typeof getFollowCounts>>,
  TError = ErrorType<FollowCountResponse>
>(
  params: GetFollowCountsParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFollowCounts>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetFollowCountsSuspenseQueryOptions(params, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 특정 사용자를 팔로우 중인지 확인합니다.
 * @summary 팔로우 여부 확인 API
 */
export const isFollowing = (
  params: IsFollowingParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<boolean>({ url: `/api/v1/follows/check`, method: "GET", params, signal }, options)
}

export const getIsFollowingQueryKey = (params: IsFollowingParams) => {
  return [`/api/v1/follows/check`, ...(params ? [params] : [])] as const
}

export const getIsFollowingQueryOptions = <
  TData = Awaited<ReturnType<typeof isFollowing>>,
  TError = ErrorType<boolean>
>(
  params: IsFollowingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getIsFollowingQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof isFollowing>>> = ({ signal }) =>
    isFollowing(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof isFollowing>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type IsFollowingQueryResult = NonNullable<Awaited<ReturnType<typeof isFollowing>>>
export type IsFollowingQueryError = ErrorType<boolean>

export function useIsFollowing<TData = Awaited<ReturnType<typeof isFollowing>>, TError = ErrorType<boolean>>(
  params: IsFollowingParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof isFollowing>>,
          TError,
          Awaited<ReturnType<typeof isFollowing>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useIsFollowing<TData = Awaited<ReturnType<typeof isFollowing>>, TError = ErrorType<boolean>>(
  params: IsFollowingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof isFollowing>>,
          TError,
          Awaited<ReturnType<typeof isFollowing>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useIsFollowing<TData = Awaited<ReturnType<typeof isFollowing>>, TError = ErrorType<boolean>>(
  params: IsFollowingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 팔로우 여부 확인 API
 */

export function useIsFollowing<TData = Awaited<ReturnType<typeof isFollowing>>, TError = ErrorType<boolean>>(
  params: IsFollowingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getIsFollowingQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getIsFollowingSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof isFollowing>>,
  TError = ErrorType<boolean>
>(
  params: IsFollowingParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getIsFollowingQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof isFollowing>>> = ({ signal }) =>
    isFollowing(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof isFollowing>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type IsFollowingSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof isFollowing>>>
export type IsFollowingSuspenseQueryError = ErrorType<boolean>

export function useIsFollowingSuspense<TData = Awaited<ReturnType<typeof isFollowing>>, TError = ErrorType<boolean>>(
  params: IsFollowingParams,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useIsFollowingSuspense<TData = Awaited<ReturnType<typeof isFollowing>>, TError = ErrorType<boolean>>(
  params: IsFollowingParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useIsFollowingSuspense<TData = Awaited<ReturnType<typeof isFollowing>>, TError = ErrorType<boolean>>(
  params: IsFollowingParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 팔로우 여부 확인 API
 */

export function useIsFollowingSuspense<TData = Awaited<ReturnType<typeof isFollowing>>, TError = ErrorType<boolean>>(
  params: IsFollowingParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getIsFollowingSuspenseQueryOptions(params, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 특정 사용자에 대한 팔로우를 취소합니다.
 * @summary 팔로잉 취소 API
 */
export const removeFollowing = (followingEmail: string, options?: SecondParameter<typeof customClientInstance>) => {
  return customClientInstance<boolean>(
    { url: `/api/v1/follows/followings/${encodeURIComponent(String(followingEmail))}`, method: "DELETE" },
    options
  )
}

export const getRemoveFollowingMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof removeFollowing>>,
    TError,
    { followingEmail: string },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof removeFollowing>>, TError, { followingEmail: string }, TContext> => {
  const mutationKey = ["removeFollowing"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof removeFollowing>>, { followingEmail: string }> = (
    props
  ) => {
    const { followingEmail } = props ?? {}

    return removeFollowing(followingEmail, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type RemoveFollowingMutationResult = NonNullable<Awaited<ReturnType<typeof removeFollowing>>>

export type RemoveFollowingMutationError = ErrorType<boolean>

/**
 * @summary 팔로잉 취소 API
 */
export const useRemoveFollowing = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof removeFollowing>>,
    TError,
    { followingEmail: string },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<Awaited<ReturnType<typeof removeFollowing>>, TError, { followingEmail: string }, TContext> => {
  const mutationOptions = getRemoveFollowingMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 특정 팔로워를 제거합니다.
 * @summary 팔로워 취소 API
 */
export const removeFollower = (followerEmail: string, options?: SecondParameter<typeof customClientInstance>) => {
  return customClientInstance<boolean>(
    { url: `/api/v1/follows/followers/${encodeURIComponent(String(followerEmail))}`, method: "DELETE" },
    options
  )
}

export const getRemoveFollowerMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeFollower>>, TError, { followerEmail: string }, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof removeFollower>>, TError, { followerEmail: string }, TContext> => {
  const mutationKey = ["removeFollower"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof removeFollower>>, { followerEmail: string }> = (
    props
  ) => {
    const { followerEmail } = props ?? {}

    return removeFollower(followerEmail, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type RemoveFollowerMutationResult = NonNullable<Awaited<ReturnType<typeof removeFollower>>>

export type RemoveFollowerMutationError = ErrorType<boolean>

/**
 * @summary 팔로워 취소 API
 */
export const useRemoveFollower = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeFollower>>, TError, { followerEmail: string }, TContext>
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<Awaited<ReturnType<typeof removeFollower>>, TError, { followerEmail: string }, TContext> => {
  const mutationOptions = getRemoveFollowerMutationOptions(options)

  return useMutation(mutationOptions)
}
