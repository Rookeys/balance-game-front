import { useMutation } from "@tanstack/react-query"
import type { MutationFunction, UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import type { GamePlayRequest, GamePlayResponse, GamePlayRoundRequest } from ".././model"
import { customInstance } from ".././clientInstance"
import type { ErrorType, BodyType } from ".././clientInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 선택한 리소스를 업데이트하고 다음 페어를 반환.
 * @summary 플레이룸 업데이트 API
 */
export const updatePlayRoom = (
  gameId: number,
  playId: number,
  gamePlayRequest: BodyType<GamePlayRequest>,
  options?: SecondParameter<typeof customInstance>
) => {
  return customInstance<GamePlayResponse>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/play/${encodeURIComponent(String(playId))}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: gamePlayRequest
    },
    options
  )
}

export const getUpdatePlayRoomMutationOptions = <TError = ErrorType<GamePlayResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePlayRoom>>,
    TError,
    { gameId: number; playId: number; data: BodyType<GamePlayRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof updatePlayRoom>>,
  TError,
  { gameId: number; playId: number; data: BodyType<GamePlayRequest> },
  TContext
> => {
  const mutationKey = ["updatePlayRoom"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updatePlayRoom>>,
    { gameId: number; playId: number; data: BodyType<GamePlayRequest> }
  > = (props) => {
    const { gameId, playId, data } = props ?? {}

    return updatePlayRoom(gameId, playId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type UpdatePlayRoomMutationResult = NonNullable<Awaited<ReturnType<typeof updatePlayRoom>>>
export type UpdatePlayRoomMutationBody = BodyType<GamePlayRequest>
export type UpdatePlayRoomMutationError = ErrorType<GamePlayResponse>

/**
 * @summary 플레이룸 업데이트 API
 */
export const useUpdatePlayRoom = <TError = ErrorType<GamePlayResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePlayRoom>>,
    TError,
    { gameId: number; playId: number; data: BodyType<GamePlayRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof updatePlayRoom>>,
  TError,
  { gameId: number; playId: number; data: BodyType<GamePlayRequest> },
  TContext
> => {
  const mutationOptions = getUpdatePlayRoomMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * n강만큼 데이터가 준비되고 첫 2개의 데이터를 반환.
 * @summary 플레이룸 생성 및 게임 시작 API
 */
export const createPlayRoom = (
  gameId: number,
  gamePlayRoundRequest: BodyType<GamePlayRoundRequest>,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<GamePlayResponse>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/play`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: gamePlayRoundRequest,
      signal
    },
    options
  )
}

export const getCreatePlayRoomMutationOptions = <TError = ErrorType<GamePlayResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPlayRoom>>,
    TError,
    { gameId: number; data: BodyType<GamePlayRoundRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPlayRoom>>,
  TError,
  { gameId: number; data: BodyType<GamePlayRoundRequest> },
  TContext
> => {
  const mutationKey = ["createPlayRoom"]
  const { mutation: mutationOptions, request: requestOptions } = options
    ? options.mutation && "mutationKey" in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey }, request: undefined }

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPlayRoom>>,
    { gameId: number; data: BodyType<GamePlayRoundRequest> }
  > = (props) => {
    const { gameId, data } = props ?? {}

    return createPlayRoom(gameId, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type CreatePlayRoomMutationResult = NonNullable<Awaited<ReturnType<typeof createPlayRoom>>>
export type CreatePlayRoomMutationBody = BodyType<GamePlayRoundRequest>
export type CreatePlayRoomMutationError = ErrorType<GamePlayResponse>

/**
 * @summary 플레이룸 생성 및 게임 시작 API
 */
export const useCreatePlayRoom = <TError = ErrorType<GamePlayResponse>, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPlayRoom>>,
    TError,
    { gameId: number; data: BodyType<GamePlayRoundRequest> },
    TContext
  >
  request?: SecondParameter<typeof customInstance>
}): UseMutationResult<
  Awaited<ReturnType<typeof createPlayRoom>>,
  TError,
  { gameId: number; data: BodyType<GamePlayRoundRequest> },
  TContext
> => {
  const mutationOptions = getCreatePlayRoomMutationOptions(options)

  return useMutation(mutationOptions)
}
