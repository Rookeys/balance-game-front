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
import type { GetMyGameListParams, PageGameListResponse, UserRequest, UserResponse } from ".././model"
import { customClientInstance } from "../../clientInstance"
import type { ErrorType, BodyType } from "../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 프로필 정보를 출력합니다.
 * @summary 프로필 정보 출력 API
 */
export const getProfile = (options?: SecondParameter<typeof customClientInstance>, signal?: AbortSignal) => {
  return customClientInstance<UserResponse>({ url: `/api/v1/users/profile`, method: "GET", signal }, options)
}

export const getGetProfileQueryKey = () => {
  return [`/api/v1/users/profile`] as const
}

export const getGetProfileInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getProfile>>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetProfileQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getProfile>>> = ({ signal }) =>
    getProfile(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getProfile>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetProfileInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getProfile>>>
export type GetProfileInfiniteQueryError = ErrorType<unknown>

export function useGetProfileInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getProfile>>>,
  TError = ErrorType<unknown>
>(options: {
  query: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>> &
    Pick<
      DefinedInitialDataOptions<Awaited<ReturnType<typeof getProfile>>, TError, Awaited<ReturnType<typeof getProfile>>>,
      "initialData"
    >
  request?: SecondParameter<typeof customClientInstance>
}): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfileInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getProfile>>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>> &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof getProfile>>,
        TError,
        Awaited<ReturnType<typeof getProfile>>
      >,
      "initialData"
    >
  request?: SecondParameter<typeof customClientInstance>
}): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfileInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getProfile>>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 프로필 정보 출력 API
 */

export function useGetProfileInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getProfile>>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetProfileInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetProfileQueryOptions = <
  TData = Awaited<ReturnType<typeof getProfile>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
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
  request?: SecondParameter<typeof customClientInstance>
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
  request?: SecondParameter<typeof customClientInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 프로필 정보 출력 API
 */

export function useGetProfile<TData = Awaited<ReturnType<typeof getProfile>>, TError = ErrorType<unknown>>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetProfileQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetProfileSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getProfile>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetProfileQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getProfile>>> = ({ signal }) =>
    getProfile(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getProfile>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetProfileSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getProfile>>>
export type GetProfileSuspenseQueryError = ErrorType<unknown>

export function useGetProfileSuspense<
  TData = Awaited<ReturnType<typeof getProfile>>,
  TError = ErrorType<unknown>
>(options: {
  query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfileSuspense<
  TData = Awaited<ReturnType<typeof getProfile>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetProfileSuspense<
  TData = Awaited<ReturnType<typeof getProfile>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 프로필 정보 출력 API
 */

export function useGetProfileSuspense<
  TData = Awaited<ReturnType<typeof getProfile>>,
  TError = ErrorType<unknown>
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getProfile>>, TError, TData>>
  request?: SecondParameter<typeof customClientInstance>
}): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetProfileSuspenseQueryOptions(options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 프로필 정보를 수정합니다.
 * @summary 프로필 정보 수정 API
 */
export const updateProfile = (
  userRequest: BodyType<UserRequest>,
  options?: SecondParameter<typeof customClientInstance>
) => {
  return customClientInstance<string>(
    { url: `/api/v1/users/profile`, method: "PUT", headers: { "Content-Type": "application/json" }, data: userRequest },
    options
  )
}

export const getUpdateProfileMutationOptions = <TError = ErrorType<string>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateProfile>>,
    TError,
    { data: BodyType<UserRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateProfile>>,
  TError,
  { data: BodyType<UserRequest> },
  TContext
> => {
  const mutationKey = ["updateProfile"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateProfile>>, { data: BodyType<UserRequest> }> = (
    props
  ) => {
    const { data } = props ?? {}

    return updateProfile(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateProfileMutationResult = NonNullable<Awaited<ReturnType<typeof updateProfile>>>
export type UpdateProfileMutationBody = BodyType<UserRequest>
export type UpdateProfileMutationError = ErrorType<string>

/**
 * @summary 프로필 정보 수정 API
 */
export const useUpdateProfile = <TError = ErrorType<string>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateProfile>>,
    TError,
    { data: BodyType<UserRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<Awaited<ReturnType<typeof updateProfile>>, TError, { data: BodyType<UserRequest> }, TContext> => {
  const mutationOptions = getUpdateProfileMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 내가 만든 게임들을 무한 스크롤 형식으로 확인 가능.
 * @summary 내가 만든 게임 리스트 확인 API
 */
export const getMyGameList = (
  params?: GetMyGameListParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<PageGameListResponse>(
    { url: `/api/v1/users/games`, method: "GET", params, signal },
    options
  )
}

export const getGetMyGameListQueryKey = (params?: GetMyGameListParams) => {
  return [`/api/v1/users/games`, ...(params ? [params] : [])] as const
}

export const getGetMyGameListInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof getMyGameList>>, GetMyGameListParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getMyGameList>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getMyGameList>>,
        QueryKey,
        GetMyGameListParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetMyGameListQueryKey(params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getMyGameList>>,
    QueryKey,
    GetMyGameListParams["cursorId"]
  > = ({ signal, pageParam }) =>
    getMyGameList({ ...params, cursorId: pageParam || params?.["cursorId"] }, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getMyGameList>>,
    TError,
    TData,
    Awaited<ReturnType<typeof getMyGameList>>,
    QueryKey,
    GetMyGameListParams["cursorId"]
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetMyGameListInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof getMyGameList>>>
export type GetMyGameListInfiniteQueryError = ErrorType<unknown>

export function useGetMyGameListInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getMyGameList>>, GetMyGameListParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params: undefined | GetMyGameListParams,
  options: {
    query: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getMyGameList>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getMyGameList>>,
        QueryKey,
        GetMyGameListParams["cursorId"]
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getMyGameList>>,
          TError,
          Awaited<ReturnType<typeof getMyGameList>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMyGameListInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getMyGameList>>, GetMyGameListParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getMyGameList>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getMyGameList>>,
        QueryKey,
        GetMyGameListParams["cursorId"]
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getMyGameList>>,
          TError,
          Awaited<ReturnType<typeof getMyGameList>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMyGameListInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getMyGameList>>, GetMyGameListParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getMyGameList>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getMyGameList>>,
        QueryKey,
        GetMyGameListParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 내가 만든 게임 리스트 확인 API
 */

export function useGetMyGameListInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof getMyGameList>>, GetMyGameListParams["cursorId"]>,
  TError = ErrorType<unknown>
>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getMyGameList>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getMyGameList>>,
        QueryKey,
        GetMyGameListParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetMyGameListInfiniteQueryOptions(params, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetMyGameListQueryOptions = <
  TData = Awaited<ReturnType<typeof getMyGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
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
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMyGameList<TData = Awaited<ReturnType<typeof getMyGameList>>, TError = ErrorType<unknown>>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 내가 만든 게임 리스트 확인 API
 */

export function useGetMyGameList<TData = Awaited<ReturnType<typeof getMyGameList>>, TError = ErrorType<unknown>>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetMyGameListQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetMyGameListSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getMyGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetMyGameListQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getMyGameList>>> = ({ signal }) =>
    getMyGameList(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getMyGameList>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetMyGameListSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getMyGameList>>>
export type GetMyGameListSuspenseQueryError = ErrorType<unknown>

export function useGetMyGameListSuspense<
  TData = Awaited<ReturnType<typeof getMyGameList>>,
  TError = ErrorType<unknown>
>(
  params: undefined | GetMyGameListParams,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMyGameListSuspense<
  TData = Awaited<ReturnType<typeof getMyGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetMyGameListSuspense<
  TData = Awaited<ReturnType<typeof getMyGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 내가 만든 게임 리스트 확인 API
 */

export function useGetMyGameListSuspense<
  TData = Awaited<ReturnType<typeof getMyGameList>>,
  TError = ErrorType<unknown>
>(
  params?: GetMyGameListParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getMyGameList>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetMyGameListSuspenseQueryOptions(params, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}
