import { axiosInstance, configuration } from "@/api/axios-instance"
import type {
  UserManagementControllerApiCancelResignRequest,
  UserManagementControllerApiSignUpRequest
} from "balance-game-api/dist/api/user-management-controller-api"
import { UserManagementControllerApi } from "balance-game-api/dist/api/user-management-controller-api"

export const postUserSignUp = async (payload: UserManagementControllerApiSignUpRequest): Promise<void> => {
  return new UserManagementControllerApi(configuration, undefined, axiosInstance)
    .signUp(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postUserResign = async (): Promise<string> => {
  return new UserManagementControllerApi(configuration, undefined, axiosInstance)
    .resign()
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postUserCancelResign = async (
  payload: UserManagementControllerApiCancelResignRequest
): Promise<string> => {
  return new UserManagementControllerApi(configuration, undefined, axiosInstance)
    .cancelResign(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
