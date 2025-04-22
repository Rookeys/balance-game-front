"use client"
import { useLoginModalStore } from "@/store/loginModalStore"
import { Session } from "next-auth"

export const requireLogin = (user?: Session | null) => {
  if (!user) {
    useLoginModalStore.getState().show()
    return false
  }
  return true
}
