import { LoginResponse } from "@/api/orval/model/loginResponse"
import { log } from "@/utils/log"
import axios from "axios"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { secret } = await req.json()

  if (secret !== process.env.DEMO_LOGIN_SECRET) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  try {
    const { data } = await axios.post<LoginResponse>(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/users/test/login`)

    return NextResponse.json({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      accessTokenExpiresAt: data.accessTokenExpiresAt,
      refreshTokenExpiresAt: data.refreshTokenExpiresAt,
      nickname: data.nickname,
      image: data.fileUrl
    })
  } catch (error) {
    log(error)
    return new NextResponse("Failed to login", { status: 500 })
  }
}
