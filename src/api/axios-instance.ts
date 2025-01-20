import { authOptions } from "@/auth"
import { isServer } from "@/utils/isServer"
import axios from "axios"
import { Configuration } from "balance-game-api/dist/configuration"
import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"

export const configuration = new Configuration({
  basePath: process.env.NEXT_PUBLIC_API_ROOT
})

export const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
})

axiosInstance.interceptors.request.use(
  async function (config) {
    // 요청이 전달되기 전에 작업 수행
    if (isServer()) {
      const serverSession = await getServerSession(authOptions)
      // console.log("server axios instance Session", serverSession)
      config.headers["Content-Type"] = "application/json"
      if (serverSession?.access_token) {
        config.headers["Authorization"] = `${serverSession?.access_token}`
      }
    } else {
      const session = await getSession()
      if (session?.access_token) {
        config.headers["Authorization"] = `${session?.access_token}`
      }
    }
    return config
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error)
    // Todo 리프레쉬 로직
  }
)

axiosInstance.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error)
  }
)
