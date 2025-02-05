import { log } from "@/utils/log"
import axios from "axios"
import { TokenResponse } from "balance-game-api/dist/models/token-response"
import { getCookie, setCookie } from "cookies-next"
import { NextResponse } from "next/server"

const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT
export async function POST(request: Request) {
  // const cookieStore = cookies()
  // const refreshToken = cookieStore.get("refreshToken")
  // console.log("refreshToken", refreshToken)

  const refreshToken = getCookie("refreshToken", { req: request })

  try {
    const res = await axios.post(`${API_ROOT}/api/v1/users/refresh`, undefined, {
      headers: {
        refreshToken: `Bearer ${refreshToken}`
      }
    })

    const data: TokenResponse = res.data

    const response = NextResponse.json({ message: "Tokens set successfully", accessToken: data.accessToken })

    setCookie("accessToken", data.accessToken, {
      req: request,
      res: response,
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: data.accessTokenExpiresAt || 3600 // 초 단위
    })

    setCookie("refreshToken", data.refreshToken, {
      req: request,
      res: response,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: data.accessTokenExpiresAt || 3600 * 24 * 7 // 초 단위
    })

    return response
  } catch (error) {
    log("로그인 오류", error)
    return NextResponse.json({ message: "리프레쉬 오류가 발생했습니다." }, { status: 500 })
  }
}
