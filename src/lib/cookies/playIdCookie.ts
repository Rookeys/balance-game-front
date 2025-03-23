"use server"

import { COOKIE_KEY } from "@/constants/cookie"
import { cookies } from "next/headers"

export async function setPlayIdCookie(playId: number, gameId: string) {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_KEY.PLAY_ID, playId.toString(), {
    path: "/",
    // httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 3 // 3시간
  })

  cookieStore.set(COOKIE_KEY.GAME_ID, gameId.toString(), {
    path: "/",
    // httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 3 // 3시간
  })
  return Promise.resolve()
}

export async function removePlayIdCookie() {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_KEY.PLAY_ID, "", {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: -1 // 쿠키 즉시 만료
  })

  cookieStore.set(COOKIE_KEY.GAME_ID, "", {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: -1 // 쿠키 즉시 만료
  })
  return Promise.resolve()
}
