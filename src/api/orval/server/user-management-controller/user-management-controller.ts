import type { ExistsByNicknameParams, LoginResponse, SignUpRequest } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * 유저의 정보를 입력받아 회원 가입을 처리합니다.
 * @summary 회원 가입 API
 */
export const signUp = (
  signUpRequest: BodyType<SignUpRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<LoginResponse>(
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

/**
 * 회원 탈퇴 요청을 처리합니다.
 * @summary 회원 탈퇴 API
 */
export const resign = (options?: SecondParameter<typeof customServerInstance>, signal?: AbortSignal) => {
  return customServerInstance<boolean>({ url: `/api/v1/users/resign`, method: "POST", signal }, options)
}

/**
 * 이름이 중복되었다면 True, 아니면 False 를 반환합니다.
 * @summary 중복 이름 확인 API
 */
export const existsByNickname = (
  params: ExistsByNicknameParams,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>({ url: `/api/v1/users/exists`, method: "POST", params, signal }, options)
}

/**
 * 회원 탈퇴 요청을 취소합니다.
 * @summary 회원 탈퇴 취소 API
 */
export const cancelResign = (
  cancelResignBody: BodyType<string>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
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
