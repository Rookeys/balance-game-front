import { useMutation } from "@tanstack/react-query"
import type { MutationFunction, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import type { PresignedUrlRequest, PresignedUrlsRequest } from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType, BodyType } from ".././clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * AWS S3 저장소에 업로드할 수 있는 단일 URL 발급
 * @summary 단일 업로드 API (User Profile)
 */
export const getPreSignedUrlForUser = (
  presignedUrlRequest: BodyType<PresignedUrlRequest>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<string>(
    {
      url: `/api/v1/media/single`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: presignedUrlRequest,
      signal
    },
    options
  )
}

export const getGetPreSignedUrlForUserMutationOptions = <TError = ErrorType<string>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof getPreSignedUrlForUser>>,
    TError,
    { data: BodyType<PresignedUrlRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof getPreSignedUrlForUser>>,
  TError,
  { data: BodyType<PresignedUrlRequest> },
  TContext
> => {
  const mutationKey = ["getPreSignedUrlForUser"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof getPreSignedUrlForUser>>,
    { data: BodyType<PresignedUrlRequest> }
  > = (props) => {
    const { data } = props ?? {}

    return getPreSignedUrlForUser(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type GetPreSignedUrlForUserMutationResult = NonNullable<Awaited<ReturnType<typeof getPreSignedUrlForUser>>>
export type GetPreSignedUrlForUserMutationBody = BodyType<PresignedUrlRequest>
export type GetPreSignedUrlForUserMutationError = ErrorType<string>

/**
 * @summary 단일 업로드 API (User Profile)
 */
export const useGetPreSignedUrlForUser = <TError = ErrorType<string>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof getPreSignedUrlForUser>>,
    TError,
    { data: BodyType<PresignedUrlRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof getPreSignedUrlForUser>>,
  TError,
  { data: BodyType<PresignedUrlRequest> },
  TContext
> => {
  const mutationOptions = getGetPreSignedUrlForUserMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * AWS S3 저장소에 업로드할 수 있는 다중 URL 발급
 * @summary 다중 업로드 API
 */
export const getPreSignedUrl = (
  presignedUrlsRequest: BodyType<PresignedUrlsRequest>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<string[]>(
    {
      url: `/api/v1/media/multiple`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: presignedUrlsRequest,
      signal
    },
    options
  )
}

export const getGetPreSignedUrlMutationOptions = <TError = ErrorType<string[]>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof getPreSignedUrl>>,
    TError,
    { data: BodyType<PresignedUrlsRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof getPreSignedUrl>>,
  TError,
  { data: BodyType<PresignedUrlsRequest> },
  TContext
> => {
  const mutationKey = ["getPreSignedUrl"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof getPreSignedUrl>>,
    { data: BodyType<PresignedUrlsRequest> }
  > = (props) => {
    const { data } = props ?? {}

    return getPreSignedUrl(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type GetPreSignedUrlMutationResult = NonNullable<Awaited<ReturnType<typeof getPreSignedUrl>>>
export type GetPreSignedUrlMutationBody = BodyType<PresignedUrlsRequest>
export type GetPreSignedUrlMutationError = ErrorType<string[]>

/**
 * @summary 다중 업로드 API
 */
export const useGetPreSignedUrl = <TError = ErrorType<string[]>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof getPreSignedUrl>>,
    TError,
    { data: BodyType<PresignedUrlsRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof getPreSignedUrl>>,
  TError,
  { data: BodyType<PresignedUrlsRequest> },
  TContext
> => {
  const mutationOptions = getGetPreSignedUrlMutationOptions(options)

  return useMutation(mutationOptions)
}
