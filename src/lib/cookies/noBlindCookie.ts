"use server"

import { cookies } from "next/headers"

export async function setBlindCookie(isBlind: boolean) {
  const cookieStore = await cookies()
  cookieStore.set("noBlind", isBlind.toString(), {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
    // maxAge: 60 * 60 * 24 * 30 // 30일
  })
  return Promise.resolve()
}
