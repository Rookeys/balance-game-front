import { postUsersLoginKakao } from "@/services/oauth"
import { log } from "@/utils/log"
import { setCookie } from "cookies-next"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { code } = await request.json()

    const res = await postUsersLoginKakao({ kakaoRequest: { authorizeCode: code } })

    // NextResponse 객체를 생성하여 응답 설정
    const response = NextResponse.json({ message: "Tokens set successfully" })

    setCookie("accessToken", res.accessToken, {
      req: request,
      res: response,
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: res.accessTokenExpiresAt || 3600 // 초 단위
    })

    setCookie("refreshToken", res.refreshToken, {
      req: request,
      res: response,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: res.refreshTokenExpiresAt || 3600 * 24 * 7 // 초 단위
    })

    // response.cookies.set("accessToken", res.accessToken || "", {
    // httpOnly: true,
    // secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   path: "/",
    //   maxAge: res.accessTokenExpiresAt || 3600
    // })

    // response.cookies.set("refreshToken", res.refreshToken || "", {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   path: "/",
    //   maxAge: res.refreshTokenExpiresAt || 3600 * 24 * 7
    // })

    return response
  } catch (error) {
    log("로그인 오류", error)
    // throw new Error('로그인 오류가 발생했습니다.')
    return NextResponse.json({ error: "로그인 오류가 발생했습니다." }, { status: 500 })
  }
}
