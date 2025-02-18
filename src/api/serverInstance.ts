import { auth } from "@/auth"
import axios from "axios"

export const serverInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
})

serverInstance.interceptors.request.use(
  async (config) => {
    try {
      const session = await auth()
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
