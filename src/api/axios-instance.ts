import { isServer } from "@/utils/isServer"
import { log } from "@/utils/log"
import axios from "axios"
import { Configuration } from "balance-game-api/dist/configuration"
import { getCookie } from "cookies-next"

export const configuration = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_ROOT
})

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROOT,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
})

axiosInstance.interceptors.request.use(
  async function (config) {
    // 요청이 전달되기 전에 작업 수행
    if (!isServer()) {
      const accessToken = getCookie("accessToken")
      config.headers["Authorization"] = `Bearer ${accessToken}`
    } else {
      // * 서버측에서 API 호출 시 유저의 정보가 필요한 경우가 있으면 사용
    }
    return config
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response
  },
  async function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    const originalRequest = error.config
    if (error.response?.status !== 401 || !originalRequest._retry) {
      console.error("Unauthorized: 액세스 토큰이 만료되었거나 유효하지 않습니다.")
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_AUTH_URL}/api/auth/kakao/refreshAccessToken`)
        const newAccessToken = res.data.accessToken
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
        originalRequest._retry = true
        return axiosInstance(originalRequest)
      } catch (error) {
        log("error", error)
        if (!isServer()) {
          window.location.href = "/sign-in"
        }
      }
    }
    return Promise.reject(error)
  }
)
