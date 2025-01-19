import { axiosInstance, configuration } from "@/api/axios-instance"
import type { UserProfileControllerApiUpdateProfileRequest } from "balance-game-api/dist/api/user-profile-controller-api"
import { UserProfileControllerApi } from "balance-game-api/dist/api/user-profile-controller-api"
import type { UserResponse } from "balance-game-api/dist/models/user-response"

export const getUserProfile = async (): Promise<UserResponse> => {
  return new UserProfileControllerApi(configuration, undefined, axiosInstance)
    .getProfile()
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}

export const putUserProfile = async (payload: UserProfileControllerApiUpdateProfileRequest): Promise<string> => {
  return new UserProfileControllerApi(configuration, undefined, axiosInstance)
    .updateProfile(payload)
    .then((res) => res.data)
    .catch((error: any) => {
      throw error
    })
}
