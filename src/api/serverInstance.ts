import { authOptions } from "@/auth"
import axios from "axios"
import { getServerSession } from "next-auth"

export const serverInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROOT
})

serverInstance.interceptors.request.use(
  async (config) => {
    try {
      const session = await getServerSession(authOptions)
      const accessToken = session?.access_token
      config.headers["Authorization"] = `Bearer ${accessToken}`
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
