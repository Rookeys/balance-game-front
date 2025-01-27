import axios, { type AxiosResponse } from "axios"
import type { TokenResponse } from "balance-game-api/dist/models/token-response"

export const refreshAccessToken = async (refreshToken: string): Promise<TokenResponse> => {
  try {
    const response: AxiosResponse<TokenResponse> = await axios.post(
      `${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/users/refresh`,
      undefined,
      {
        headers: {
          RefreshToken: refreshToken,
          "Cache-Control": "no-store"
        }
      }
    )
    return response.data
  } catch (error) {
    throw error
  }
}

// * fetch logic
// export const refreshAccessToken = async (refreshToken: string): Promise<TokenResponse> => {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/users/refresh`, {
//       method: "POST",
//       headers: {
//         RefreshToken: refreshToken
//       }
//     })
//     const newTokens: TokenResponse = await response.json()

//     return {
//       accessToken: newTokens.accessToken,
//       refreshToken: newTokens.refreshToken,
//       accessTokenExpiresAt: newTokens.accessTokenExpiresAt,
//       refreshTokenExpiresAt: newTokens.refreshTokenExpiresAt
//     }
//   } catch (error: any) {
//     console.log(error)
//     throw error
//   }
// }
