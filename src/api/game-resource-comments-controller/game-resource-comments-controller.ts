import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query"
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
  UseQueryResult
} from "@tanstack/react-query"
import type {
  GameResourceCommentRequest,
  GameResourceCommentUpdateRequest,
  GetChildrenCommentsByGameResourceParams,
  GetParentCommentsByGameResource1Params,
  PageGameResourceChildrenCommentResponse,
  PageGameResourceParentCommentResponse
} from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType, BodyType } from ".././clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 댓글을 수정할 수 있다.
 * @summary 게임 리소스 댓글 수정 API
 */
export const updateResourceComment = (
  resourceId: number,
  commentId: number,
  gameResourceCommentUpdateRequest: BodyType<GameResourceCommentUpdateRequest>,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<boolean>(
    {
      url: `/api/v1/games/resources/${encodeURIComponent(String(resourceId))}/comments/${encodeURIComponent(String(commentId))}`,
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
    { resourceId: number; commentId: number; data: BodyType<GameResourceCommentUpdateRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateResourceComment>>,
  TError,
  { resourceId: number; commentId: number; data: BodyType<GameResourceCommentUpdateRequest> },
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
    { resourceId: number; commentId: number; data: BodyType<GameResourceCommentUpdateRequest> }
  > = (props) => {
    const { resourceId, commentId, data } = props ?? {}

    return updateResourceComment(resourceId, commentId, data, requestOptions)
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
    { resourceId: number; commentId: number; data: BodyType<GameResourceCommentUpdateRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof updateResourceComment>>,
  TError,
  { resourceId: number; commentId: number; data: BodyType<GameResourceCommentUpdateRequest> },
  TContext
> => {
  const mutationOptions = getUpdateResourceCommentMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 해당 댓글을 삭제할 수 있다.
 * @summary 게임 리소스 댓글 삭제 API
 */
export const deleteResourceComment1 = (
  resourceId: number,
  commentId: number,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<boolean>(
    {
      url: `/api/v1/games/resources/${encodeURIComponent(String(resourceId))}/comments/${encodeURIComponent(String(commentId))}`,
      method: "DELETE"
    },
    options
  )
}

export const getDeleteResourceComment1MutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteResourceComment1>>,
    TError,
    { resourceId: number; commentId: number },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteResourceComment1>>,
  TError,
  { resourceId: number; commentId: number },
  TContext
> => {
  const mutationKey = ["deleteResourceComment1"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteResourceComment1>>,
    { resourceId: number; commentId: number }
  > = (props) => {
    const { resourceId, commentId } = props ?? {}

    return deleteResourceComment1(resourceId, commentId, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type DeleteResourceComment1MutationResult = NonNullable<Awaited<ReturnType<typeof deleteResourceComment1>>>

export type DeleteResourceComment1MutationError = ErrorType<boolean>

/**
 * @summary 게임 리소스 댓글 삭제 API
 */
export const useDeleteResourceComment1 = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteResourceComment1>>,
    TError,
    { resourceId: number; commentId: number },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteResourceComment1>>,
  TError,
  { resourceId: number; commentId: number },
  TContext
> => {
  const mutationOptions = getDeleteResourceComment1MutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 게임 리소스 부모 댓글 리스트 목록을 제공한다.
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */
export const getParentCommentsByGameResource1 = (
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<PageGameResourceParentCommentResponse>(
    {
      url: `/api/v1/games/resources/${encodeURIComponent(String(resourceId))}/comments`,
      method: "GET",
      params,
      signal
    },
    options
  )
}

export const getGetParentCommentsByGameResource1QueryKey = (
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params
) => {
  return [`/api/v1/games/resources/${resourceId}/comments`, ...(params ? [params] : [])] as const
}

export const getGetParentCommentsByGameResource1InfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
    GetParentCommentsByGameResource1Params["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
        QueryKey,
        GetParentCommentsByGameResource1Params["cursorId"]
      >
    >
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetParentCommentsByGameResource1QueryKey(resourceId, params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
    QueryKey,
    GetParentCommentsByGameResource1Params["cursorId"]
  > = ({ signal, pageParam }) =>
    getParentCommentsByGameResource1(
      resourceId,
      { ...params, cursorId: pageParam || params?.["cursorId"] },
      requestOptions,
      signal
    )

  return { queryKey, queryFn, enabled: !!resourceId, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
    TError,
    TData,
    Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
    QueryKey,
    GetParentCommentsByGameResource1Params["cursorId"]
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetParentCommentsByGameResource1InfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof getParentCommentsByGameResource1>>
>
export type GetParentCommentsByGameResource1InfiniteQueryError = ErrorType<unknown>

export function useGetParentCommentsByGameResource1Infinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
    GetParentCommentsByGameResource1Params["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params: undefined | GetParentCommentsByGameResource1Params,
  options: {
    query: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
        QueryKey,
        GetParentCommentsByGameResource1Params["cursorId"]
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
          TError,
          Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResource1Infinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
    GetParentCommentsByGameResource1Params["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
        QueryKey,
        GetParentCommentsByGameResource1Params["cursorId"]
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
          TError,
          Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
          QueryKey
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResource1Infinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
    GetParentCommentsByGameResource1Params["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
        QueryKey,
        GetParentCommentsByGameResource1Params["cursorId"]
      >
    >
    request?: SecondParameter<typeof customInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */

export function useGetParentCommentsByGameResource1Infinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
    GetParentCommentsByGameResource1Params["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
        TError,
        TData,
        Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
        QueryKey,
        GetParentCommentsByGameResource1Params["cursorId"]
      >
    >
    request?: SecondParameter<typeof customInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetParentCommentsByGameResource1InfiniteQueryOptions(resourceId, params, options)

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetParentCommentsByGameResource1QueryOptions = <
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetParentCommentsByGameResource1QueryKey(resourceId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>> = ({ signal }) =>
    getParentCommentsByGameResource1(resourceId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!resourceId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetParentCommentsByGameResource1QueryResult = NonNullable<
  Awaited<ReturnType<typeof getParentCommentsByGameResource1>>
>
export type GetParentCommentsByGameResource1QueryError = ErrorType<unknown>

export function useGetParentCommentsByGameResource1<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params: undefined | GetParentCommentsByGameResource1Params,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
          TError,
          Awaited<ReturnType<typeof getParentCommentsByGameResource1>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResource1<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
          TError,
          Awaited<ReturnType<typeof getParentCommentsByGameResource1>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetParentCommentsByGameResource1<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 부모 댓글 리스트 발급 API
 */

export function useGetParentCommentsByGameResource1<
  TData = Awaited<ReturnType<typeof getParentCommentsByGameResource1>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  params?: GetParentCommentsByGameResource1Params,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getParentCommentsByGameResource1>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetParentCommentsByGameResource1QueryOptions(resourceId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * 해당 리소스에 댓글을 등록할 수 있다.
 * @summary 게임 리소스 댓글 등록 API
 */
export const addResourceComment = (
  resourceId: number,
  gameResourceCommentRequest: BodyType<GameResourceCommentRequest>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<boolean>(
    {
      url: `/api/v1/games/resources/${encodeURIComponent(String(resourceId))}/comments`,
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
    { resourceId: number; data: BodyType<GameResourceCommentRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof addResourceComment>>,
  TError,
  { resourceId: number; data: BodyType<GameResourceCommentRequest> },
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
    { resourceId: number; data: BodyType<GameResourceCommentRequest> }
  > = (props) => {
    const { resourceId, data } = props ?? {}

    return addResourceComment(resourceId, data, requestOptions)
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
    { resourceId: number; data: BodyType<GameResourceCommentRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof addResourceComment>>,
  TError,
  { resourceId: number; data: BodyType<GameResourceCommentRequest> },
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
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<PageGameResourceChildrenCommentResponse>(
    {
      url: `/api/v1/games/resources/${encodeURIComponent(String(resourceId))}/comments/${encodeURIComponent(String(parentId))}`,
      method: "GET",
      params,
      signal
    },
    options
  )
}

export const getGetChildrenCommentsByGameResourceQueryKey = (
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams
) => {
  return [`/api/v1/games/resources/${resourceId}/comments/${parentId}`, ...(params ? [params] : [])] as const
}

export const getGetChildrenCommentsByGameResourceInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    GetChildrenCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
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
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetChildrenCommentsByGameResourceQueryKey(resourceId, parentId, params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    QueryKey,
    GetChildrenCommentsByGameResourceParams["cursorId"]
  > = ({ signal, pageParam }) =>
    getChildrenCommentsByGameResource(
      resourceId,
      parentId,
      { ...params, cursorId: pageParam || params?.["cursorId"] },
      requestOptions,
      signal
    )

  return { queryKey, queryFn, enabled: !!(resourceId && parentId), ...queryOptions } as UseInfiniteQueryOptions<
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
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChildrenCommentsByGameResourceInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    GetChildrenCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
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
    request?: SecondParameter<typeof customInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChildrenCommentsByGameResourceInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
    GetChildrenCommentsByGameResourceParams["cursorId"]
  >,
  TError = ErrorType<unknown>
>(
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
    request?: SecondParameter<typeof customInstance>
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
    request?: SecondParameter<typeof customInstance>
  }
): UseInfiniteQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetChildrenCommentsByGameResourceInfiniteQueryOptions(resourceId, parentId, params, options)

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
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetChildrenCommentsByGameResourceQueryKey(resourceId, parentId, params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>> = ({ signal }) =>
    getChildrenCommentsByGameResource(resourceId, parentId, params, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!(resourceId && parentId), ...queryOptions } as UseQueryOptions<
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
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChildrenCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
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
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGetChildrenCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 게임 리소스 대댓글 리스트 발급 API
 */

export function useGetChildrenCommentsByGameResource<
  TData = Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>,
  TError = ErrorType<unknown>
>(
  resourceId: number,
  parentId: number,
  params?: GetChildrenCommentsByGameResourceParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getChildrenCommentsByGameResource>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getGetChildrenCommentsByGameResourceQueryOptions(resourceId, parentId, params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}
