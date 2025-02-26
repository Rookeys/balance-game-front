import { authOptions } from "@/auth"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { getServerSession } from "next-auth"

export const serverInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROOT
})

serverInstance.interceptors.request.use(
  async (config) => {
    try {
      const session = await getServerSession(authOptions)
      if (session?.access_token) {
        config.headers["Authorization"] = `Bearer ${session.access_token}`
      }
      return config
    } catch (error) {
      return Promise.reject(error)
    }
  },
  (error) => Promise.reject(error)
)

serverInstance.interceptors.response.use(
  async (response) => {
    return response
  },
  async (error) => {
    try {
      return Promise.reject(error)
    } catch (refreshError) {
      return Promise.reject(refreshError)
    }
  }
)

export const customServerInstance = async <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const source = axios.CancelToken.source()
  const promise = serverInstance({ ...config, ...options, cancelToken: source.token }).then(
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
