import { useMutation } from "@tanstack/react-query"
import type { MutationFunction, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import type { LinkRequest } from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType, BodyType } from ".././clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 유튜브 URL과 시작, 끝 초를 저장함.
 * @summary 유튜브 링크 저장 API
 */
export const saveLink = (
  gameId: number,
  linkRequest: BodyType<LinkRequest>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/media/links`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: linkRequest,
      signal
    },
    options
  )
}

export const getSaveLinkMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof saveLink>>,
    TError,
    { gameId: number; data: BodyType<LinkRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof saveLink>>,
  TError,
  { gameId: number; data: BodyType<LinkRequest> },
  TContext
> => {
  const mutationKey = ["saveLink"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof saveLink>>,
    { gameId: number; data: BodyType<LinkRequest> }
  > = (props) => {
    const { gameId, data } = props ?? {}

    return saveLink(gameId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type SaveLinkMutationResult = NonNullable<Awaited<ReturnType<typeof saveLink>>>
export type SaveLinkMutationBody = BodyType<LinkRequest>
export type SaveLinkMutationError = ErrorType<unknown>

/**
 * @summary 유튜브 링크 저장 API
 */
export const useSaveLink = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof saveLink>>,
    TError,
    { gameId: number; data: BodyType<LinkRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof saveLink>>,
  TError,
  { gameId: number; data: BodyType<LinkRequest> },
  TContext
> => {
  const mutationOptions = getSaveLinkMutationOptions(options)

  return useMutation(mutationOptions)
}
