import { axiosInstance, configuration } from "@/api/axios-instance"
import {
  UserManagementControllerApi,
  type UserManagementControllerApiCancelResignRequest,
  type UserManagementControllerApiExistsByNicknameRequest
} from "balance-game-api/dist/api/user-management-controller-api"

export const postUsersResign = async (): Promise<boolean> => {
  return new UserManagementControllerApi(configuration, undefined, axiosInstance)
    .resign()
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const postUsersCancelResign = async (
  payload: UserManagementControllerApiCancelResignRequest
): Promise<boolean> => {
  return new UserManagementControllerApi(configuration, undefined, axiosInstance)
    .cancelResign(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const getUserExists = async (payload: UserManagementControllerApiExistsByNicknameRequest): Promise<boolean> => {
  return new UserManagementControllerApi(configuration, undefined, axiosInstance)
    .existsByNickname(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
