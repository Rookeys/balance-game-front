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
  CustomPageImplGameResourceChildrenCommentResponse,
  CustomPageImplGameResourceParentCommentResponse,
  GameResourceCommentRequest,
  GameResourceCommentUpdateRequest,
  GetChildrenCommentsByGameResourceParams,
  GetParentCommentsByGameResourceParams
} from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType, BodyType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 댓글을 수정할 수 있다.
 * @summary 게임 리소스 댓글 수정 API
 */
export const updateResourceComment = (
  gameId: number,
  resourceId: number,
  commentId: number,
  gameResourceCommentUpdateRequest: BodyType<GameResourceCommentUpdateRequest>,
  options?: SecondParameter<typeof customClientInstance>
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}/comments/${encodeURIComponent(String(commentId))}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: gameResourceCommentUpdateRequest
    },
    options
  )
}

export const getUpdateResourceCommentMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateResourceComment>>,
    TError,
    { gameId: number; resourceId: number; commentId: number; data: BodyType<GameResourceCommentUpdateRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateResourceComment>>,
  TError,
  { gameId: number; resourceId: number; commentId: number; data: BodyType<GameResourceCommentUpdateRequest> },
  TContext
> => {
  const mutationKey = ["updateResourceComment"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateResourceComment>>,
    { gameId: number; resourceId: number; commentId: number; data: BodyType<GameResourceCommentUpdateRequest> }
  > = (props) => {
    const { gameId, resourceId, commentId, data } = props ?? {}

    return updateResourceComment(gameId, resourceId, commentId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdateResourceCommentMutationResult = NonNullable<Awaited<ReturnType<typeof updateResourceComment>>>
export type UpdateResourceCommentMutationBody = BodyType<GameResourceCommentUpdateRequest>
export type UpdateResourceCommentMutationError = ErrorType<boolean>

/**
 * @summary 게임 리소스 댓글 수정 API
 */
export const useUpdateResourceComment = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateResourceComment>>,
    TError,
    { gameId: number; resourceId: number; commentId: number; data: BodyType<GameResourceCommentUpdateRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof updateResourceComment>>,
  TError,
  { gameId: number; resourceId: number; commentId: number; data: BodyType<GameResourceCommentUpdateRequest> },
  TContext
> => {
  const mutationOptions = getUpdateResourceCommentMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 해당 댓글을 삭제할 수 있다.
 * @summary 게임 리소스 댓글 삭제 API
 */
export const deleteResourceComment = (
  gameId: number,
  resourceId: number,
  commentId: number,
  options?: SecondParameter<typeof customClientInstance>
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}/comments/${encodeURIComponent(String(commentId))}`,
      method: "DELETE"
    },
    options
  )
}

export const getDeleteResourceCommentMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteResourceComment>>,
    TError,
    { gameId: number; resourceId: number; commentId: number },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteResourceComment>>,
  TError,
  { gameId: number; resourceId: number; commentId: number },
  TContext
> => {
  const mutationKey = ["deleteResourceComment"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteResourceComment>>,
    { gameId: number; resourceId: number; commentId: number }
  > = (props) => {
    const { gameId, resourceId, commentId } = props ?? {}

    return deleteResourceComment(gameId, resourceId, commentId, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteResourceCommentMutationResult = NonNullable<Awaited<ReturnType<typeof deleteResourceComment>>>

export type DeleteResourceCommentMutationError = ErrorType<boolean>

/**
 * @summary 게임 리소스 댓글 삭제 API
 */
export const useDeleteResourceComment = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteResourceComment>>,
    TError,
    { gameId: number; resourceId: number; commentId: number },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteResourceComment>>,
  TError,
  { gameId: number; resourceId: number; commentId: number },
  TContext
> => {
  const mutationOptions = getDeleteResourceCommentMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 게임 리소스 부모 댓글 리스트 목록을 제공한다.
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */
export const getParentCommentsByGameResource = (
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<CustomPageImplGameResourceParentCommentResponse>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}/comments`,
      method: "GET",
      params,
      signal
    },
    options
  )
}

export const getGetParentCommentsByGameResourceQueryKey = (
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams
) => {
  return [`/api/v1/games/${gameId}/resources/${resourceId}/comments`, ...(params ? [params] : [])] as const
}

export const getGetParentCommentsByGameResourceInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
    GetParentCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
        QueryKey,
        GetParentCommentsByGameResourceParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetParentCommentsByGameResourceQueryKey(gameId, resourceId, params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
    QueryKey,
    GetParentCommentsByGameResourceParams["cursorId"]
  > = ({ signal, pageParam }) =>
    getParentCommentsByGameResource(
      gameId,
      resourceId,
      { ...params, cursorId: pageParam || params?.["cursorId"] },
      requestOptions,
      signal
    )

  return { queryKey, queryFn, enabled: !!(gameId && resourceId), ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
    TError,
    TData,
    Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
    QueryKey,
    GetParentCommentsByGameResourceParams["cursorId"]
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetParentCommentsByGameResourceInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof getParentCommentsByGameResource>>
>
export type GetParentCommentsByGameResourceInfiniteQueryError = ErrorType<unknown>

export function useGetParentCommentsByGameResourceInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
    GetParentCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params: undefined | GetParentCommentsByGameResourceParams,
  options: {
    query: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
        QueryKey,
        GetParentCommentsByGameResourceParams["cursorId"]
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
          TError,
          Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResourceInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
    GetParentCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
        QueryKey,
        GetParentCommentsByGameResourceParams["cursorId"]
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
          TError,
          Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResourceInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
    GetParentCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
        QueryKey,
        GetParentCommentsByGameResourceParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */

export function useGetParentCommentsByGameResourceInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
    GetParentCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
        QueryKey,
        GetParentCommentsByGameResourceParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetParentCommentsByGameResourceInfiniteQueryOptions(gameId, resourceId, params, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetParentCommentsByGameResourceQueryOptions = <
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetParentCommentsByGameResourceQueryKey(gameId, resourceId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getParentCommentsByGameResource>>> = ({ signal }) =>
    getParentCommentsByGameResource(gameId, resourceId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!(gameId && resourceId), ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetParentCommentsByGameResourceQueryResult = NonNullable<
  Awaited<ReturnType<typeof getParentCommentsByGameResource>>
>
export type GetParentCommentsByGameResourceQueryError = ErrorType<unknown>

export function useGetParentCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params: undefined | GetParentCommentsByGameResourceParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
          TError,
          Awaited<ReturnType<typeof getParentCommentsByGameResource>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
          TError,
          Awaited<ReturnType<typeof getParentCommentsByGameResource>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */

export function useGetParentCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetParentCommentsByGameResourceQueryOptions(gameId, resourceId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetParentCommentsByGameResourceSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetParentCommentsByGameResourceQueryKey(gameId, resourceId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getParentCommentsByGameResource>>> = ({ signal }) =>
    getParentCommentsByGameResource(gameId, resourceId, params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetParentCommentsByGameResourceSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof getParentCommentsByGameResource>>
>
export type GetParentCommentsByGameResourceSuspenseQueryError = ErrorType<unknown>

export function useGetParentCommentsByGameResourceSuspense<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params: undefined | GetParentCommentsByGameResourceParams,
  options: {
    query: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResourceSuspense<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResourceSuspense<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */

export function useGetParentCommentsByGameResourceSuspense<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  params?: GetParentCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetParentCommentsByGameResourceSuspenseQueryOptions(gameId, resourceId, params, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 해당 리소스에 댓글을 등록할 수 있다.
 * @summary 게임 리소스 댓글 등록 API
 */
export const addResourceComment = (
  gameId: number,
  resourceId: number,
  gameResourceCommentRequest: BodyType<GameResourceCommentRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}/comments`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameResourceCommentRequest,
      signal
    },
    options
  )
}

export const getAddResourceCommentMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addResourceComment>>,
    TError,
    { gameId: number; resourceId: number; data: BodyType<GameResourceCommentRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof addResourceComment>>,
  TError,
  { gameId: number; resourceId: number; data: BodyType<GameResourceCommentRequest> },
  TContext
> => {
  const mutationKey = ["addResourceComment"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof addResourceComment>>,
    { gameId: number; resourceId: number; data: BodyType<GameResourceCommentRequest> }
  > = (props) => {
    const { gameId, resourceId, data } = props ?? {}

    return addResourceComment(gameId, resourceId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AddResourceCommentMutationResult = NonNullable<Awaited<ReturnType<typeof addResourceComment>>>
export type AddResourceCommentMutationBody = BodyType<GameResourceCommentRequest>
export type AddResourceCommentMutationError = ErrorType<boolean>

/**
 * @summary 게임 리소스 댓글 등록 API
 */
export const useAddResourceComment = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addResourceComment>>,
    TError,
    { gameId: number; resourceId: number; data: BodyType<GameResourceCommentRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof addResourceComment>>,
  TError,
  { gameId: number; resourceId: number; data: BodyType<GameResourceCommentRequest> },
  TContext
> => {
  const mutationOptions = getAddResourceCommentMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 게임 리소스 대댓글 리스트 목록을 제공한다.
 * @summary 게임 리소스 대댓글 리스트 발급 API
 */
export const getChildrenCommentsByGameResource = (
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<CustomPageImplGameResourceChildrenCommentResponse>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}/comments/${encodeURIComponent(String(parentId))}`,
      method: "GET",
      params,
      signal
    },
    options
  )
}

export const getGetChildrenCommentsByGameResourceQueryKey = (
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams
) => {
  return [`/api/v1/games/${gameId}/resources/${resourceId}/comments/${parentId}`, ...(params ? [params] : [])] as const
}

export const getGetChildrenCommentsByGameResourceInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    GetChildrenCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
        QueryKey,
        GetChildrenCommentsByGameResourceParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetChildrenCommentsByGameResourceQueryKey(gameId, resourceId, parentId, params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    QueryKey,
    GetChildrenCommentsByGameResourceParams["cursorId"]
  > = ({ signal, pageParam }) =>
    getChildrenCommentsByGameResource(
      gameId,
      resourceId,
      parentId,
      { ...params, cursorId: pageParam || params?.["cursorId"] },
      requestOptions,
      signal
    )

  return {
    queryKey,
    queryFn,
    enabled: !!(gameId && resourceId && parentId),
    ...queryOptions
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    TError,
    TData,
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    QueryKey,
    GetChildrenCommentsByGameResourceParams["cursorId"]
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetChildrenCommentsByGameResourceInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>
>
export type GetChildrenCommentsByGameResourceInfiniteQueryError = ErrorType<unknown>

export function useGetChildrenCommentsByGameResourceInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    GetChildrenCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params: undefined | GetChildrenCommentsByGameResourceParams,
  options: {
    query: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
        QueryKey,
        GetChildrenCommentsByGameResourceParams["cursorId"]
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
          TError,
          Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChildrenCommentsByGameResourceInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    GetChildrenCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
        QueryKey,
        GetChildrenCommentsByGameResourceParams["cursorId"]
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
          TError,
          Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChildrenCommentsByGameResourceInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    GetChildrenCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
        QueryKey,
        GetChildrenCommentsByGameResourceParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 대댓글 리스트 발급 API
 */

export function useGetChildrenCommentsByGameResourceInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    GetChildrenCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
        QueryKey,
        GetChildrenCommentsByGameResourceParams["cursorId"]
      >
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetChildrenCommentsByGameResourceInfiniteQueryOptions(
    gameId,
    resourceId,
    parentId,
    params,
    options
  )

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetChildrenCommentsByGameResourceQueryOptions = <
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetChildrenCommentsByGameResourceQueryKey(gameId, resourceId, parentId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>> = ({ signal }) =>
    getChildrenCommentsByGameResource(gameId, resourceId, parentId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!(gameId && resourceId && parentId), ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetChildrenCommentsByGameResourceQueryResult = NonNullable<
  Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>
>
export type GetChildrenCommentsByGameResourceQueryError = ErrorType<unknown>

export function useGetChildrenCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params: undefined | GetChildrenCommentsByGameResourceParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
          TError,
          Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChildrenCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
          TError,
          Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChildrenCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 대댓글 리스트 발급 API
 */

export function useGetChildrenCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customClientInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetChildrenCommentsByGameResourceQueryOptions(gameId, resourceId, parentId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetChildrenCommentsByGameResourceSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>
    >
    request?: SecondParameter<typeof customClientInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetChildrenCommentsByGameResourceQueryKey(gameId, resourceId, parentId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>> = ({ signal }) =>
    getChildrenCommentsByGameResource(gameId, resourceId, parentId, params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetChildrenCommentsByGameResourceSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>
>
export type GetChildrenCommentsByGameResourceSuspenseQueryError = ErrorType<unknown>

export function useGetChildrenCommentsByGameResourceSuspense<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params: undefined | GetChildrenCommentsByGameResourceParams,
  options: {
    query: Partial<
      UseSuspenseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChildrenCommentsByGameResourceSuspense<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChildrenCommentsByGameResourceSuspense<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 대댓글 리스트 발급 API
 */

export function useGetChildrenCommentsByGameResourceSuspense<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  gameId: number,
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>
    >
    request?: SecondParameter<typeof customClientInstance>
  }
): UseSuspenseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetChildrenCommentsByGameResourceSuspenseQueryOptions(
    gameId,
    resourceId,
    parentId,
    params,
    options
  )

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}
