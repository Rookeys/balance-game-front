import { useMutation } from "@tanstack/react-query"
import type { MutationFunction, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import type { ImageRequest } from ".././model"
import { customClientInstance } from "../../clientInstance"
import type { ErrorType, BodyType } from "../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * S3에 업로드한 URL을 차례대로 저장함.
 * @summary 게임 리소스 사진 저장 API
 */
export const saveImageForGame = (
  gameId: number,
  imageRequest: BodyType<ImageRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/media/images`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: imageRequest,
      signal
    },
    options
  )
}

export const getSaveImageForGameMutationOptions = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof saveImageForGame>>,
    TError,
    { gameId: number; data: BodyType<ImageRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof saveImageForGame>>,
  TError,
  { gameId: number; data: BodyType<ImageRequest> },
  TContext
> => {
  const mutationKey = ["saveImageForGame"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof saveImageForGame>>,
    { gameId: number; data: BodyType<ImageRequest> }
  > = (props) => {
    const { gameId, data } = props ?? {}

    return saveImageForGame(gameId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type SaveImageForGameMutationResult = NonNullable<Awaited<ReturnType<typeof saveImageForGame>>>
export type SaveImageForGameMutationBody = BodyType<ImageRequest>
export type SaveImageForGameMutationError = ErrorType<unknown>

/**
 * @summary 게임 리소스 사진 저장 API
 */
export const useSaveImageForGame = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof saveImageForGame>>,
    TError,
    { gameId: number; data: BodyType<ImageRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof saveImageForGame>>,
  TError,
  { gameId: number; data: BodyType<ImageRequest> },
  TContext
> => {
  const mutationOptions = getSaveImageForGameMutationOptions(options)

  return useMutation(mutationOptions)
}
