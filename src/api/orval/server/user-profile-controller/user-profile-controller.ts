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
  CustomPageImplGameListResponse,
  CustomPageImplRecentPlayListResponse,
  GameResponse,
  GetMyGameListParams,
  GetProfileByEmailParams,
  GetRecentPlaysParams,
  GetUserGameListByEmailParams,
  UserReportRequest,
  UserRequest,
  UserResponse
} from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { ErrorType, BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 프로필 정보를 출력합니다.
 * @summary 프로필 정보 출력 API
 */
export const getProfile = (options?: SecondParameter<typeof customServerInstance>, signal?: AbortSignal) => {
  return customServerInstance<UserResponse>({ url: `/api/v1/users/profile`, method: "GET", signal }, options)
}

export const getGetProfileQueryKey = () => {
  return [`/api/v1/users/profile`] as const
}

export const getGetProfileQueryOptions = <
  TData = Awaited<ReturnType<typeof getProfile>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customServerInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetProfileQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getProfile>>> = ({ signal }) =>
    getProfile(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getProfile>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetProfileQueryResult = NonNullable<Awaited<ReturnType<typeof getProfile>>>
export type GetProfileQueryError = ErrorType<unknown>

export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options: {
  query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>> &
    Pick<
      DefinedInitialDataOptions<Awaited<ReturnType<typeof getProfile>>, TError, Awaited<ReturnType<typeof getProfile>>>,
      "initialData"
    >
  request?: SecondParameter<typeof customServerInstance>
}): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>> &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getProfile>>,
        TError,
        Awaited<ReturnType<typeof getProfile>>
      >,
      "initialData"
    >
  request?: SecondParameter<typeof customServerInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customServerInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 프로필 정보 출력 API
 */

export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customServerInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetProfileQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 프로필 정보 출력 API
 */
export const prefetchGetProfile = async <TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(
  queryClient: QueryClient,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetProfileQueryOptions(options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 프로필 정보를 수정합니다.
 * @summary 프로필 정보 수정 API
 */
export const updateProfile = (
  userRequest: BodyType<UserRequest>,
  options?: SecondParameter<typeof customServerInstance>
) => {
  return customServerInstance<string>(
    { url: `/api/v1/users/profile`, method: "PUT", headers: { "Content-Type": "application/json" }, data: userRequest },
    options
  )
}

/**
 * 정책에 맞지 않는 유저를 신고함.
 * @summary 유저 신고 API
 */
export const submitUserReport = (
  userReportRequest: BodyType<UserReportRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/users/report`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: userReportRequest,
      signal
    },
    options
  )
}

/**
 * 최근 플레이한 게임을 기록함.
 * @summary 최근 플레이 등록 API
 */
export const saveRecentPlays = (
  gameId: number,
  resourceId: number,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<number>(
    {
      url: `/api/v1/users/games/${encodeURIComponent(String(gameId))}/resource/${encodeURIComponent(String(resourceId))}`,
      method: "POST",
      signal
    },
    options
  )
}

/**
 * 이메일로 다른 사용자의 프로필 정보를 조회합니다.
 * @summary 다른 사용자 프로필 조회 API
 */
export const getProfileByEmail = (
  params: GetProfileByEmailParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<UserResponse>(
    { url: `/api/v1/users/profile/user`, method: "GET", params, signal },
    options
  )
}

export const getGetProfileByEmailQueryKey = (params: GetProfileByEmailParams) => {
  return [`/api/v1/users/profile/user`, ...(params ? [params] : [])] as const
}

export const getGetProfileByEmailQueryOptions = <
  TData = Awaited<ReturnType<typeof getProfileByEmail>>,
  TError = ErrorType<UserResponse>
>(
  params: GetProfileByEmailParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfileByEmail>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetProfileByEmailQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getProfileByEmail>>> = ({ signal }) =>
    getProfileByEmail(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getProfileByEmail>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetProfileByEmailQueryResult = NonNullable<Awaited<ReturnType<typeof getProfileByEmail>>>
export type GetProfileByEmailQueryError = ErrorType<UserResponse>

export function useGetProfileByEmail<
  TData = Awaited<ReturnType<typeof getProfileByEmail>>,
  TError = ErrorType<UserResponse>
>(
  params: GetProfileByEmailParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfileByEmail>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProfileByEmail>>,
          TError,
          Awaited<ReturnType<typeof getProfileByEmail>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfileByEmail<
  TData = Awaited<ReturnType<typeof getProfileByEmail>>,
  TError = ErrorType<UserResponse>
>(
  params: GetProfileByEmailParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfileByEmail>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getProfileByEmail>>,
          TError,
          Awaited<ReturnType<typeof getProfileByEmail>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfileByEmail<
  TData = Awaited<ReturnType<typeof getProfileByEmail>>,
  TError = ErrorType<UserResponse>
>(
  params: GetProfileByEmailParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfileByEmail>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 다른 사용자 프로필 조회 API
 */

export function useGetProfileByEmail<
  TData = Awaited<ReturnType<typeof getProfileByEmail>>,
  TError = ErrorType<UserResponse>
>(
  params: GetProfileByEmailParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfileByEmail>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetProfileByEmailQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 다른 사용자 프로필 조회 API
 */
export const prefetchGetProfileByEmail = async <
  TData = Awaited<ReturnType<typeof getProfileByEmail>>,
  TError = ErrorType<UserResponse>
>(
  queryClient: QueryClient,
  params: GetProfileByEmailParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfileByEmail>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetProfileByEmailQueryOptions(params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 내가 만든 게임들을 무한 스크롤 형식으로 확인 가능.
 * @summary 내가 만든 게임 리스트 확인 API
 */
export const getMyGameList = (
  params?: GetMyGameListParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplGameListResponse>(
    { url: `/api/v1/users/games`, method: "GET", params, signal },
    options
  )
}

export const getGetMyGameListQueryKey = (params?: GetMyGameListParams) => {
  return [`/api/v1/users/games`, ...(params ? [params] : [])] as const
}

export const getGetMyGameListQueryOptions = <
  TData = Awaited<ReturnType<typeof getMyGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetMyGameListQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getMyGameList>>> = ({ signal }) =>
    getMyGameList(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getMyGameList>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetMyGameListQueryResult = NonNullable<Awaited<ReturnType<typeof getMyGameList>>>
export type GetMyGameListQueryError = ErrorType<unknown>

export function useGetMyGameList<TData = Awaited<ReturnType<typeof getMyGameList>>, TError = ErrorType<unknown>>(
  params: undefined | GetMyGameListParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getMyGameList>>,
          TError,
          Awaited<ReturnType<typeof getMyGameList>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMyGameList<TData = Awaited<ReturnType<typeof getMyGameList>>, TError = ErrorType<unknown>>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getMyGameList>>,
          TError,
          Awaited<ReturnType<typeof getMyGameList>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMyGameList<TData = Awaited<ReturnType<typeof getMyGameList>>, TError = ErrorType<unknown>>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 내가 만든 게임 리스트 확인 API
 */

export function useGetMyGameList<TData = Awaited<ReturnType<typeof getMyGameList>>, TError = ErrorType<unknown>>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetMyGameListQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 내가 만든 게임 리스트 확인 API
 */
export const prefetchGetMyGameList = async <
  TData = Awaited<ReturnType<typeof getMyGameList>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetMyGameListQueryOptions(params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 내 게임방의 설정을 확인함.
 * @summary 내가 만든 게임방 정보 확인 API
 */
export const getMyGameStatus = (
  gameId: number,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<GameResponse>(
    { url: `/api/v1/users/games/${encodeURIComponent(String(gameId))}`, method: "GET", signal },
    options
  )
}

export const getGetMyGameStatusQueryKey = (gameId: number) => {
  return [`/api/v1/users/games/${gameId}`] as const
}

export const getGetMyGameStatusQueryOptions = <
  TData = Awaited<ReturnType<typeof getMyGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetMyGameStatusQueryKey(gameId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getMyGameStatus>>> = ({ signal }) =>
    getMyGameStatus(gameId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!gameId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getMyGameStatus>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetMyGameStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getMyGameStatus>>>
export type GetMyGameStatusQueryError = ErrorType<GameResponse>

export function useGetMyGameStatus<
  TData = Awaited<ReturnType<typeof getMyGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameStatus>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getMyGameStatus>>,
          TError,
          Awaited<ReturnType<typeof getMyGameStatus>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMyGameStatus<
  TData = Awaited<ReturnType<typeof getMyGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameStatus>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getMyGameStatus>>,
          TError,
          Awaited<ReturnType<typeof getMyGameStatus>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMyGameStatus<
  TData = Awaited<ReturnType<typeof getMyGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 내가 만든 게임방 정보 확인 API
 */

export function useGetMyGameStatus<
  TData = Awaited<ReturnType<typeof getMyGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetMyGameStatusQueryOptions(gameId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 내가 만든 게임방 정보 확인 API
 */
export const prefetchGetMyGameStatus = async <
  TData = Awaited<ReturnType<typeof getMyGameStatus>>,
  TError = ErrorType<GameResponse>
>(
  queryClient: QueryClient,
  gameId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameStatus>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetMyGameStatusQueryOptions(gameId, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 이메일로 특정 사용자가 만든 게임들을 무한 스크롤 형식으로 확인 가능.
 * @summary 특정 사용자가 만든 게임 리스트 확인 API
 */
export const getUserGameListByEmail = (
  params: GetUserGameListByEmailParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplGameListResponse>(
    { url: `/api/v1/users/games/user`, method: "GET", params, signal },
    options
  )
}

export const getGetUserGameListByEmailQueryKey = (params: GetUserGameListByEmailParams) => {
  return [`/api/v1/users/games/user`, ...(params ? [params] : [])] as const
}

export const getGetUserGameListByEmailQueryOptions = <
  TData = Awaited<ReturnType<typeof getUserGameListByEmail>>,
  TError = ErrorType<CustomPageImplGameListResponse>
>(
  params: GetUserGameListByEmailParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserGameListByEmail>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetUserGameListByEmailQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUserGameListByEmail>>> = ({ signal }) =>
    getUserGameListByEmail(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getUserGameListByEmail>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetUserGameListByEmailQueryResult = NonNullable<Awaited<ReturnType<typeof getUserGameListByEmail>>>
export type GetUserGameListByEmailQueryError = ErrorType<CustomPageImplGameListResponse>

export function useGetUserGameListByEmail<
  TData = Awaited<ReturnType<typeof getUserGameListByEmail>>,
  TError = ErrorType<CustomPageImplGameListResponse>
>(
  params: GetUserGameListByEmailParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserGameListByEmail>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserGameListByEmail>>,
          TError,
          Awaited<ReturnType<typeof getUserGameListByEmail>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetUserGameListByEmail<
  TData = Awaited<ReturnType<typeof getUserGameListByEmail>>,
  TError = ErrorType<CustomPageImplGameListResponse>
>(
  params: GetUserGameListByEmailParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserGameListByEmail>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getUserGameListByEmail>>,
          TError,
          Awaited<ReturnType<typeof getUserGameListByEmail>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetUserGameListByEmail<
  TData = Awaited<ReturnType<typeof getUserGameListByEmail>>,
  TError = ErrorType<CustomPageImplGameListResponse>
>(
  params: GetUserGameListByEmailParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserGameListByEmail>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 특정 사용자가 만든 게임 리스트 확인 API
 */

export function useGetUserGameListByEmail<
  TData = Awaited<ReturnType<typeof getUserGameListByEmail>>,
  TError = ErrorType<CustomPageImplGameListResponse>
>(
  params: GetUserGameListByEmailParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserGameListByEmail>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetUserGameListByEmailQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 특정 사용자가 만든 게임 리스트 확인 API
 */
export const prefetchGetUserGameListByEmail = async <
  TData = Awaited<ReturnType<typeof getUserGameListByEmail>>,
  TError = ErrorType<CustomPageImplGameListResponse>
>(
  queryClient: QueryClient,
  params: GetUserGameListByEmailParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUserGameListByEmail>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetUserGameListByEmailQueryOptions(params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 내가 플레이한 게임 목록을 출력함.
 * @summary 최근 플레이 목록 확인 API
 */
export const getRecentPlays = (
  params?: GetRecentPlaysParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<CustomPageImplRecentPlayListResponse>(
    { url: `/api/v1/users/games/recent`, method: "GET", params, signal },
    options
  )
}

export const getGetRecentPlaysQueryKey = (params?: GetRecentPlaysParams) => {
  return [`/api/v1/users/games/recent`, ...(params ? [params] : [])] as const
}

export const getGetRecentPlaysQueryOptions = <
  TData = Awaited<ReturnType<typeof getRecentPlays>>,
  TError = ErrorType<unknown>
>(
  params?: GetRecentPlaysParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecentPlays>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetRecentPlaysQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getRecentPlays>>> = ({ signal }) =>
    getRecentPlays(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getRecentPlays>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetRecentPlaysQueryResult = NonNullable<Awaited<ReturnType<typeof getRecentPlays>>>
export type GetRecentPlaysQueryError = ErrorType<unknown>

export function useGetRecentPlays<TData = Awaited<ReturnType<typeof getRecentPlays>>, TError = ErrorType<unknown>>(
  params: undefined | GetRecentPlaysParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecentPlays>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getRecentPlays>>,
          TError,
          Awaited<ReturnType<typeof getRecentPlays>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetRecentPlays<TData = Awaited<ReturnType<typeof getRecentPlays>>, TError = ErrorType<unknown>>(
  params?: GetRecentPlaysParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecentPlays>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getRecentPlays>>,
          TError,
          Awaited<ReturnType<typeof getRecentPlays>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetRecentPlays<TData = Awaited<ReturnType<typeof getRecentPlays>>, TError = ErrorType<unknown>>(
  params?: GetRecentPlaysParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecentPlays>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 최근 플레이 목록 확인 API
 */

export function useGetRecentPlays<TData = Awaited<ReturnType<typeof getRecentPlays>>, TError = ErrorType<unknown>>(
  params?: GetRecentPlaysParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecentPlays>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetRecentPlaysQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary 최근 플레이 목록 확인 API
 */
export const prefetchGetRecentPlays = async <
  TData = Awaited<ReturnType<typeof getRecentPlays>>,
  TError = ErrorType<unknown>
>(
  queryClient: QueryClient,
  params?: GetRecentPlaysParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getRecentPlays>>, TError, TData>>
    request?: SecondParameter<typeof customServerInstance>
  }
): Promise<QueryClient> => {
  const queryOptions = getGetRecentPlaysQueryOptions(params, options)

  await queryClient.prefetchQuery(queryOptions)

  return queryClient
}

/**
 * 최근 플레이 목록을 삭제함.
 * @summary 최근 플레이 목록 삭제 API
 */
export const deleteRecentPlay = (roomId: number, options?: SecondParameter<typeof customServerInstance>) => {
  return customServerInstance<boolean>(
    { url: `/api/v1/users/games/recent/${encodeURIComponent(String(roomId))}`, method: "DELETE" },
    options
  )
}
