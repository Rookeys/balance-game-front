import { axiosInstance, configuration } from "@/api/axios-instance"
import type {
  UserProfileControllerApiGetMyGameListRequest,
  UserProfileControllerApiUpdateProfileRequest
} from "balance-game-api/dist/api/user-profile-controller-api"
import { UserProfileControllerApi } from "balance-game-api/dist/api/user-profile-controller-api"
import type { PageGameListResponse } from "balance-game-api/dist/models/page-game-list-response"
import type { UserResponse } from "balance-game-api/dist/models/user-response"

export const getUsersProfile = async (): Promise<UserResponse> => {
  return new UserProfileControllerApi(configuration, undefined, axiosInstance)
    .getProfile()
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const putUsersProfile = async (payload: UserProfileControllerApiUpdateProfileRequest): Promise<string> => {
  return new UserProfileControllerApi(configuration, undefined, axiosInstance)
    .updateProfile(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const getUsersGames = async (
  payload: UserProfileControllerApiGetMyGameListRequest
): Promise<PageGameListResponse> => {
  return new UserProfileControllerApi(configuration, undefined, axiosInstance)
    .getMyGameList(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
