import { useMutation } from "@tanstack/react-query"
import type { MutationFunction, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import type { AutoLinkRequest, LinkRequest } from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType, BodyType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 유튜브 URL과 시작, 끝 초를 저장함.
 * @summary 유튜브 링크 저장 API
 */
export const saveLink = (
  gameId: number,
  linkRequest: BodyType<LinkRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<boolean>(
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
  request?: SecondParameter<typeof customClientInstance>
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
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof saveLink>>,
  TError,
  { gameId: number; data: BodyType<LinkRequest> },
  TContext
> => {
  const mutationOptions = getSaveLinkMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 자동으로 유튜브 URL과 시작, 끝 초를 저장함.
 * @summary 유튜브 링크 자동 저장 API
 */
export const autoSaveLink = (
  gameId: number,
  autoLinkRequest: BodyType<AutoLinkRequest[]>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/media/links/auto`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: autoLinkRequest,
      signal
    },
    options
  )
}

export const getAutoSaveLinkMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof autoSaveLink>>,
    TError,
    { gameId: number; data: BodyType<AutoLinkRequest[]> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof autoSaveLink>>,
  TError,
  { gameId: number; data: BodyType<AutoLinkRequest[]> },
  TContext
> => {
  const mutationKey = ["autoSaveLink"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof autoSaveLink>>,
    { gameId: number; data: BodyType<AutoLinkRequest[]> }
  > = (props) => {
    const { gameId, data } = props ?? {}

    return autoSaveLink(gameId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AutoSaveLinkMutationResult = NonNullable<Awaited<ReturnType<typeof autoSaveLink>>>
export type AutoSaveLinkMutationBody = BodyType<AutoLinkRequest[]>
export type AutoSaveLinkMutationError = ErrorType<unknown>

/**
 * @summary 유튜브 링크 자동 저장 API
 */
export const useAutoSaveLink = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof autoSaveLink>>,
    TError,
    { gameId: number; data: BodyType<AutoLinkRequest[]> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof autoSaveLink>>,
  TError,
  { gameId: number; data: BodyType<AutoLinkRequest[]> },
  TContext
> => {
  const mutationOptions = getAutoSaveLinkMutationOptions(options)

  return useMutation(mutationOptions)
}
