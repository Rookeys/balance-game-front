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
  CustomPageImplFollowUserResponse,
  FollowCountResponse,
  FollowRequest,
  FollowUserResponse,
  GetFollowCountsParams,
  GetFollowersParams,
  GetFollowingsParams,
  IsFollowingParams
} from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType, BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 특정 사용자를 팔로우합니다.
 * @summary 팔로워 등록 API
 */
export const addFollow = (
  followRequest: BodyType<FollowRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
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

/**
 * 랜덤으로 팔로우하지 않은 6명의 사용자를 추천합니다.
 * @summary 추천 프로필 목록 조회 API
 */
export const getRecommendedProfiles = (
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<FollowUserResponse[]>(
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
  request?: SecondParameter<typeof customServerInstance>
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
  request?: SecondParameter<typeof customServerInstance>
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
  request?: SecondParameter<typeof customServerInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetRecommendedProfiles<
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>>
  request?: SecondParameter<typeof customServerInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 추천 프로필 목록 조회 API
 */

export function useGetRecommendedProfiles<
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>>
  request?: SecondParameter<typeof customServerInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetRecommendedProfilesQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 추천 프로필 목록 조회 API
 */
export const prefetchGetRecommendedProfiles = async <
  TData = Awaited<ReturnType<typeof getRecommendedProfiles>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecommendedProfiles>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetRecommendedProfilesQueryOptions(options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 특정 사용자의 팔로잉 목록을 조회합니다. (무한스크롤 지원)
 * @summary 팔로잉 목록 조회 API
 */
export const getFollowings = (
  params: GetFollowingsParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplFollowUserResponse>(
    { url: `/api/v1/follows/followings`, method: "GET", params, signal },
    options
  )
}

export const getGetFollowingsQueryKey = (params: GetFollowingsParams) => {
  return [`/api/v1/follows/followings`, ...(params ? [params] : [])] as const
}

export const getGetFollowingsQueryOptions = <
  TData = Awaited<ReturnType<typeof getFollowings>>,
  TError = ErrorType<CustomPageImplFollowUserResponse>
>(
  params: GetFollowingsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
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
export type GetFollowingsQueryError = ErrorType<CustomPageImplFollowUserResponse>

export function useGetFollowings<
  TData = Awaited<ReturnType<typeof getFollowings>>,
  TError = ErrorType<CustomPageImplFollowUserResponse>
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
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowings<
  TData = Awaited<ReturnType<typeof getFollowings>>,
  TError = ErrorType<CustomPageImplFollowUserResponse>
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
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowings<
  TData = Awaited<ReturnType<typeof getFollowings>>,
  TError = ErrorType<CustomPageImplFollowUserResponse>
>(
  params: GetFollowingsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 팔로잉 목록 조회 API
 */

export function useGetFollowings<
  TData = Awaited<ReturnType<typeof getFollowings>>,
  TError = ErrorType<CustomPageImplFollowUserResponse>
>(
  params: GetFollowingsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetFollowingsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 팔로잉 목록 조회 API
 */
export const prefetchGetFollowings = async <
  TData = Awaited<ReturnType<typeof getFollowings>>,
  TError = ErrorType<CustomPageImplFollowUserResponse>
>(
  queryClient: QueryClient,
  params: GetFollowingsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowings>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetFollowingsQueryOptions(params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 특정 사용자의 팔로워 목록을 조회합니다. (무한스크롤 지원)
 * @summary 팔로워 목록 조회 API
 */
export const getFollowers = (
  params: GetFollowersParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplFollowUserResponse>(
    { url: `/api/v1/follows/followers`, method: "GET", params, signal },
    options
  )
}

export const getGetFollowersQueryKey = (params: GetFollowersParams) => {
  return [`/api/v1/follows/followers`, ...(params ? [params] : [])] as const
}

export const getGetFollowersQueryOptions = <
  TData = Awaited<ReturnType<typeof getFollowers>>,
  TError = ErrorType<CustomPageImplFollowUserResponse>
>(
  params: GetFollowersParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
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
export type GetFollowersQueryError = ErrorType<CustomPageImplFollowUserResponse>

export function useGetFollowers<
  TData = Awaited<ReturnType<typeof getFollowers>>,
  TError = ErrorType<CustomPageImplFollowUserResponse>
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
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowers<
  TData = Awaited<ReturnType<typeof getFollowers>>,
  TError = ErrorType<CustomPageImplFollowUserResponse>
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
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowers<
  TData = Awaited<ReturnType<typeof getFollowers>>,
  TError = ErrorType<CustomPageImplFollowUserResponse>
>(
  params: GetFollowersParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 팔로워 목록 조회 API
 */

export function useGetFollowers<
  TData = Awaited<ReturnType<typeof getFollowers>>,
  TError = ErrorType<CustomPageImplFollowUserResponse>
>(
  params: GetFollowersParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetFollowersQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 팔로워 목록 조회 API
 */
export const prefetchGetFollowers = async <
  TData = Awaited<ReturnType<typeof getFollowers>>,
  TError = ErrorType<CustomPageImplFollowUserResponse>
>(
  queryClient: QueryClient,
  params: GetFollowersParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowers>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetFollowersQueryOptions(params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 특정 사용자의 팔로워 수와 팔로잉 수를 조회합니다.
 * @summary 팔로워/팔로잉 수 조회 API
 */
export const getFollowCounts = (
  params: GetFollowCountsParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<FollowCountResponse>(
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
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetFollowCounts<
  TData = Awaited<ReturnType<typeof getFollowCounts>>,
  TError = ErrorType<FollowCountResponse>
>(
  params: GetFollowCountsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowCounts>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetFollowCountsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 팔로워/팔로잉 수 조회 API
 */
export const prefetchGetFollowCounts = async <
  TData = Awaited<ReturnType<typeof getFollowCounts>>,
  TError = ErrorType<FollowCountResponse>
>(
  queryClient: QueryClient,
  params: GetFollowCountsParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFollowCounts>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetFollowCountsQueryOptions(params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 특정 사용자를 팔로우 중인지 확인합니다.
 * @summary 팔로우 여부 확인 API
 */
export const isFollowing = (
  params: IsFollowingParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>({ url: `/api/v1/follows/check`, method: "GET", params, signal }, options)
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
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
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
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useIsFollowing<TData = Awaited<ReturnType<typeof isFollowing>>, TError = ErrorType<boolean>>(
  params: IsFollowingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 팔로우 여부 확인 API
 */

export function useIsFollowing<TData = Awaited<ReturnType<typeof isFollowing>>, TError = ErrorType<boolean>>(
  params: IsFollowingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getIsFollowingQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 팔로우 여부 확인 API
 */
export const prefetchIsFollowing = async <TData = Awaited<ReturnType<typeof isFollowing>>, TError = ErrorType<boolean>>(
  queryClient: QueryClient,
  params: IsFollowingParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof isFollowing>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getIsFollowingQueryOptions(params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 특정 사용자에 대한 팔로우를 취소합니다.
 * @summary 팔로잉 취소 API
 */
export const removeFollowing = (followingEmail: string, options?: SecondParameter<typeof customServerInstance>) => {
  return customServerInstance<boolean>(
    { url: `/api/v1/follows/followings/${encodeURIComponent(String(followingEmail))}`, method: "DELETE" },
    options
  )
}

/**
 * 특정 팔로워를 제거합니다.
 * @summary 팔로워 취소 API
 */
export const removeFollower = (followerEmail: string, options?: SecondParameter<typeof customServerInstance>) => {
  return customServerInstance<boolean>(
    { url: `/api/v1/follows/followers/${encodeURIComponent(String(followerEmail))}`, method: "DELETE" },
    options
  )
}
