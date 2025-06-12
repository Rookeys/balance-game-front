import { useMutation } from "@tanstack/react-query"
import type { MutationFunction, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import type { GameCommentLikeRequest } from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType, BodyType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 해당 댓글의 좋아요를 올리거나 취소한다.
 * @summary 댓글 좋아요 처리 API
 */
export const toggleLike = (
  gameId: number,
  commentId: number,
  gameCommentLikeRequest: BodyType<GameCommentLikeRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/comments/${encodeURIComponent(String(commentId))}/likes`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameCommentLikeRequest,
      signal
    },
    options
  )
}

export const getToggleLikeMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof toggleLike>>,
    TError,
    { gameId: number; commentId: number; data: BodyType<GameCommentLikeRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof toggleLike>>,
  TError,
  { gameId: number; commentId: number; data: BodyType<GameCommentLikeRequest> },
  TContext
> => {
  const mutationKey = ["toggleLike"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof toggleLike>>,
    { gameId: number; commentId: number; data: BodyType<GameCommentLikeRequest> }
  > = (props) => {
    const { gameId, commentId, data } = props ?? {}

    return toggleLike(gameId, commentId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type ToggleLikeMutationResult = NonNullable<Awaited<ReturnType<typeof toggleLike>>>
export type ToggleLikeMutationBody = BodyType<GameCommentLikeRequest>
export type ToggleLikeMutationError = ErrorType<boolean>

/**
 * @summary 댓글 좋아요 처리 API
 */
export const useToggleLike = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof toggleLike>>,
    TError,
    { gameId: number; commentId: number; data: BodyType<GameCommentLikeRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof toggleLike>>,
  TError,
  { gameId: number; commentId: number; data: BodyType<GameCommentLikeRequest> },
  TContext
> => {
  const mutationOptions = getToggleLikeMutationOptions(options)

  return useMutation(mutationOptions)
}
