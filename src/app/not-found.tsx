"use client"
import { signOut } from "next-auth/react"

export default function ErrorPage() {
  return (
    <section className="flex flex-col gap-[20px]">
      에러가 발생했습니다.
      <button onClick={() => signOut({ callbackUrl: "/" })}>돌아가기</button>
    </section>
  )
}
