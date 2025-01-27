"use client"
import KakaoLoginButton from "@/components/KakaoLoginButton"
// import { signOut } from "next-auth/react"

export default function SignIn() {
  return (
    <section className="mt-[80px] flex justify-center">
      <article className="flex flex-col gap-[16px] px-[16px]">
        <h1 className="text-md font-semibold">로그인 및 회원가입</h1>
        <KakaoLoginButton />
        {/* <button onClick={() => signOut({ callbackUrl: "/" })}>로그아웃 (테스트)</button> */}
        {/* <Button asChild variant="custom" className="text-gray-80 w-fit cursor-pointer">
          <p>개인정보 처리방침</p>
        </Button> */}
      </article>
    </section>
  )
}
