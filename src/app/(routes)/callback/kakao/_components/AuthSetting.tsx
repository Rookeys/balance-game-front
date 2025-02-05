"use client"
import { log } from "@/utils/log"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AuthSetting({ code }: { code: string }) {
  const router = useRouter()
  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const res = await axios.post(
          "/api/auth/kakao",
          {
            code
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        router.replace("/")
        log("res", res)
      } catch (error) {
        log(error)
      }
    }
    kakaoLogin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code])

  return <section />
}
