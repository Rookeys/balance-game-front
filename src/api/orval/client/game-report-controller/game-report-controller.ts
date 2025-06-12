import { useMutation } from "@tanstack/react-query"
import type { MutationFunction, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import type { GameCommentReportRequest, GameReportRequest } from "../../model"
import { customClientInstance } from "../../../clientInstance"
import type { ErrorType, BodyType } from "../../../clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 정책에 맞지 않는 리소스를 신고함.
 * @summary 리소스 신고 API
 */
export const submitGameResourcesReport = (
  gameId: number,
  resourceId: number,
  gameReportRequest: BodyType<GameReportRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/resources/${encodeURIComponent(String(resourceId))}/report`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameReportRequest,
      signal
    },
    options
  )
}

export const getSubmitGameResourcesReportMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof submitGameResourcesReport>>,
    TError,
    { gameId: number; resourceId: number; data: BodyType<GameReportRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof submitGameResourcesReport>>,
  TError,
  { gameId: number; resourceId: number; data: BodyType<GameReportRequest> },
  TContext
> => {
  const mutationKey = ["submitGameResourcesReport"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof submitGameResourcesReport>>,
    { gameId: number; resourceId: number; data: BodyType<GameReportRequest> }
  > = (props) => {
    const { gameId, resourceId, data } = props ?? {}

    return submitGameResourcesReport(gameId, resourceId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type SubmitGameResourcesReportMutationResult = NonNullable<Awaited<ReturnType<typeof submitGameResourcesReport>>>
export type SubmitGameResourcesReportMutationBody = BodyType<GameReportRequest>
export type SubmitGameResourcesReportMutationError = ErrorType<boolean>

/**
 * @summary 리소스 신고 API
 */
export const useSubmitGameResourcesReport = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof submitGameResourcesReport>>,
    TError,
    { gameId: number; resourceId: number; data: BodyType<GameReportRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof submitGameResourcesReport>>,
  TError,
  { gameId: number; resourceId: number; data: BodyType<GameReportRequest> },
  TContext
> => {
  const mutationOptions = getSubmitGameResourcesReportMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 정책에 맞지 않는 게임방을 신고함.
 * @summary 게임방 신고 API
 */
export const submitGamesReport = (
  gameId: number,
  gameReportRequest: BodyType<GameReportRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/report`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameReportRequest,
      signal
    },
    options
  )
}

export const getSubmitGamesReportMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof submitGamesReport>>,
    TError,
    { gameId: number; data: BodyType<GameReportRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof submitGamesReport>>,
  TError,
  { gameId: number; data: BodyType<GameReportRequest> },
  TContext
> => {
  const mutationKey = ["submitGamesReport"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof submitGamesReport>>,
    { gameId: number; data: BodyType<GameReportRequest> }
  > = (props) => {
    const { gameId, data } = props ?? {}

    return submitGamesReport(gameId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type SubmitGamesReportMutationResult = NonNullable<Awaited<ReturnType<typeof submitGamesReport>>>
export type SubmitGamesReportMutationBody = BodyType<GameReportRequest>
export type SubmitGamesReportMutationError = ErrorType<boolean>

/**
 * @summary 게임방 신고 API
 */
export const useSubmitGamesReport = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof submitGamesReport>>,
    TError,
    { gameId: number; data: BodyType<GameReportRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof submitGamesReport>>,
  TError,
  { gameId: number; data: BodyType<GameReportRequest> },
  TContext
> => {
  const mutationOptions = getSubmitGamesReportMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * 정책에 맞지 않는 댓글을 신고함.
 * @summary 댓글 신고 API
 */
export const submitGameCommentsReport = (
  gameId: number,
  gameCommentReportRequest: BodyType<GameCommentReportRequest>,
  options?: SecondParameter<typeof customClientInstance>,
  signal?: AbortSignal
) => {
  return customClientInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/comments/report`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gameCommentReportRequest,
      signal
    },
    options
  )
}

export const getSubmitGameCommentsReportMutationOptions = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof submitGameCommentsReport>>,
    TError,
    { gameId: number; data: BodyType<GameCommentReportRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof submitGameCommentsReport>>,
  TError,
  { gameId: number; data: BodyType<GameCommentReportRequest> },
  TContext
> => {
  const mutationKey = ["submitGameCommentsReport"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof submitGameCommentsReport>>,
    { gameId: number; data: BodyType<GameCommentReportRequest> }
  > = (props) => {
    const { gameId, data } = props ?? {}

    return submitGameCommentsReport(gameId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type SubmitGameCommentsReportMutationResult = NonNullable<Awaited<ReturnType<typeof submitGameCommentsReport>>>
export type SubmitGameCommentsReportMutationBody = BodyType<GameCommentReportRequest>
export type SubmitGameCommentsReportMutationError = ErrorType<boolean>

/**
 * @summary 댓글 신고 API
 */
export const useSubmitGameCommentsReport = <TError = ErrorType<boolean>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof submitGameCommentsReport>>,
    TError,
    { gameId: number; data: BodyType<GameCommentReportRequest> },
    TContext
  >
  request?: SecondParameter<typeof customClientInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof submitGameCommentsReport>>,
  TError,
  { gameId: number; data: BodyType<GameCommentReportRequest> },
  TContext
> => {
  const mutationOptions = getSubmitGameCommentsReportMutationOptions(options)

  return useMutation(mutationOptions)
}
