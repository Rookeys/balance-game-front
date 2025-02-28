"use client"
import { useSessionStore } from "@/store/session"
import { signOut } from "next-auth/react"

export default function ErrorPage() {
  const clearSession = useSessionStore((state) => state.clearSession)
  return (
    <section className="flex flex-col gap-[20px]">
      존재하지 않는 페이지입니다.
      <button
        onClick={() => {
          clearSession()
          signOut({ callbackUrl: "/" })
        }}
      >
        돌아가기
      </button>
    </section>
  )
}
