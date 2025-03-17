"use client"
import KakaoLoginButton from "@/components/KakaoLoginButton"
import Logo from "@/components/Logo"
import { useSessionStore } from "@/store/session"
import { signOut } from "next-auth/react"

export default function SignIn() {
  const clearSession = useSessionStore((state) => state.clearSession)
  return (
    <section className="my-[25vh] flex flex-col items-center gap-[52px]">
      <article className="flex flex-col gap-[24px] rounded-[16px] bg-gray-10 px-[16px] py-[36px]">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="flex flex-col gap-[16px]">
          <p>서비스명에 오신 것을 환영합니다!</p>
          <div className="text-center">
            <p>간단히 설명이 들어가는 영역입니다.</p>
            <p>최대 2줄까지 작성합니다.</p>
          </div>
        </div>
        <KakaoLoginButton className="mx-auto w-full max-w-[340px]" />
      </article>
      <button
        onClick={() => {
          clearSession()
          signOut({ callbackUrl: "/" })
        }}
      >
        로그아웃 (테스트)
      </button>
    </section>
  )
}
