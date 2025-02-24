import { useMutation, useQuery } from "@tanstack/react-query"
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from "@tanstack/react-query"
import type { ExistsByNicknameParams, LoginResponse, SignUpRequest } from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType, BodyType } from ".././clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 유저의 정보를 입력받아 회원 가입을 처리합니다.
 * @summary 회원 가입 API
 */
export const signUp = (
  signUpRequest: BodyType<SignUpRequest>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<LoginResponse>(
    {
      url: `/api/v1/users/signup`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signUpRequest,
      signal
    },
    options
  )
}

export const getSignUpMutationOptions = <TError = ErrorType<LoginResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof signUp>>, TError, { data: BodyType<SignUpRequest> }, TContext>
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof signUp>>, TError, { data: BodyType<SignUpRequest> }, TContext> => {
  const mutationKey = ["signUp"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof signUp>>, { data: BodyType<SignUpRequest> }> = (
    props
  ) => {
    const { data } = props ?? {}

    return signUp(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type SignUpMutationResult = NonNullable<Awaited<ReturnType<typeof signUp>>>
export type SignUpMutationBody = BodyType<SignUpRequest>
export type SignUpMutationError = ErrorType<LoginResponse>

/**
 * @summary 회원 가입 API
 */
export const useSignUp = <TError = ErrorType<LoginResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof signUp>>, TError, { data: BodyType<SignUpRequest> }, TContext>
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<Awaited<ReturnType<typeof signUp>>, TError, { data: BodyType<SignUpRequest> }, TContext> => {
  const mutationOptions = getSignUpMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 회원 탈퇴 요청을 처리합니다.
 * @summary 회원 탈퇴 API
 */
export const resign = (options?: SecondParameter<typeof customInstance>, signal?: AbortSignal) => {
  return customInstance<boolean>({ url: `/api/v1/users/resign`, method: "POST", signal }, options)
}

export const getResignMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof resign>>, TError, void, TContext>
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof resign>>, TError, void, TContext> => {
  const mutationKey = ["resign"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof resign>>, void> = () => {
    return resign(requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type ResignMutationResult = NonNullable<Awaited<ReturnType<typeof resign>>>

export type ResignMutationError = ErrorType<unknown>

/**
 * @summary 회원 탈퇴 API
 */
export const useResign = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof resign>>, TError, void, TContext>
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<Awaited<ReturnType<typeof resign>>, TError, void, TContext> => {
  const mutationOptions = getResignMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 회원 탈퇴 요청을 취소합니다.
 * @summary 회원 탈퇴 취소 API
 */
export const cancelResign = (
  cancelResignBody: BodyType<string>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<boolean>(
    {
      url: `/api/v1/users/cancel/resign`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: cancelResignBody,
      signal
    },
    options
  )
}

export const getCancelResignMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof cancelResign>>, TError, { data: BodyType<string> }, TContext>
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<Awaited<ReturnType<typeof cancelResign>>, TError, { data: BodyType<string> }, TContext> => {
  const mutationKey = ["cancelResign"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof cancelResign>>, { data: BodyType<string> }> = (
    props
  ) => {
    const { data } = props ?? {}

    return cancelResign(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CancelResignMutationResult = NonNullable<Awaited<ReturnType<typeof cancelResign>>>
export type CancelResignMutationBody = BodyType<string>
export type CancelResignMutationError = ErrorType<unknown>

/**
 * @summary 회원 탈퇴 취소 API
 */
export const useCancelResign = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<Awaited<ReturnType<typeof cancelResign>>, TError, { data: BodyType<string> }, TContext>
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<Awaited<ReturnType<typeof cancelResign>>, TError, { data: BodyType<string> }, TContext> => {
  const mutationOptions = getCancelResignMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 이름이 중복되었다면 True, 아니면 False 를 반환합니다.
 * @summary 중복 이름 확인 API
 */
export const existsByNickname = (
  params: ExistsByNicknameParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<boolean>({ url: `/api/v1/users/exists`, method: "GET", params, signal }, options)
}

export const getExistsByNicknameQueryKey = (params: ExistsByNicknameParams) => {
  return [`/api/v1/users/exists`, ...(params ? [params] : [])] as const
}

export const getExistsByNicknameQueryOptions = <
  TData = Awaited<ReturnType<typeof existsByNickname>>,
  TError = ErrorType<unknown>
>(
  params: ExistsByNicknameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof existsByNickname>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getExistsByNicknameQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof existsByNickname>>> = ({ signal }) =>
    existsByNickname(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof existsByNickname>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type ExistsByNicknameQueryResult = NonNullable<Awaited<ReturnType<typeof existsByNickname>>>
export type ExistsByNicknameQueryError = ErrorType<unknown>

export function useExistsByNickname<TData = Awaited<ReturnType<typeof existsByNickname>>, TError = ErrorType<unknown>>(
  params: ExistsByNicknameParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof existsByNickname>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof existsByNickname>>,
          TError,
          Awaited<ReturnType<typeof existsByNickname>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useExistsByNickname<TData = Awaited<ReturnType<typeof existsByNickname>>, TError = ErrorType<unknown>>(
  params: ExistsByNicknameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof existsByNickname>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof existsByNickname>>,
          TError,
          Awaited<ReturnType<typeof existsByNickname>>
        >,
        "initialData"
      >
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useExistsByNickname<TData = Awaited<ReturnType<typeof existsByNickname>>, TError = ErrorType<unknown>>(
  params: ExistsByNicknameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof existsByNickname>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary 중복 이름 확인 API
 */

export function useExistsByNickname<TData = Awaited<ReturnType<typeof existsByNickname>>, TError = ErrorType<unknown>>(
  params: ExistsByNicknameParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof existsByNickname>>, TError, TData>>
    request?: SecondParameter<typeof customInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getExistsByNicknameQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}
