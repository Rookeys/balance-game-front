import { log } from "@/utils/log"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { Configuration } from "balance-game-api/dist/configuration"
import { getSession } from "next-auth/react"
import { refreshAccessToken } from "./auth/refreshAccessToken"

export const configuration = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_ROOT
})

export const clientInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROOT,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
})

clientInstance.interceptors.request.use(
  async (config) => {
    // 요청이 전달되기 전에 작업 수행
    const session = await getSession()
    if (session?.access_token) {
      config.headers["Authorization"] = `${session?.access_token}`
    }
    return config
  },
  async (error) => {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error)
  }
)

clientInstance.interceptors.response.use(
  async (response) => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response
  },
  async (error) => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    const originalRequest = error.config
    if (error.response?.status !== 401 || !originalRequest._retry) {
      console.error("Unauthorized: 액세스 토큰이 만료되었거나 유효하지 않습니다.")
      try {
        const session = await getSession()
        const { accessToken: newAccessToken } = await refreshAccessToken(session?.refresh_token as string)
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
        originalRequest._retry = true
        return clientInstance(originalRequest)
      } catch (error) {
        log("error", error)
        window.location.href = "/sign-in"
      }
    }
    return Promise.reject(error)
  }
)

export const customInstance = async <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const source = axios.CancelToken.source()
  const promise = clientInstance({ ...config, ...options, cancelToken: source.token }).then(
    ({ data }: AxiosResponse<T>) => data
  )
  // @ts-expect-error ...
  promise.cancel = () => {
    source.cancel("Query was cancelled")
  }
  return promise
}

export type ErrorType<Error> = Error
export type BodyType<BodyData> = BodyData
