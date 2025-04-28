"use client"

import DemoLoginForm from "@/components/DemoLoginForm"
import KakaoLoginButton from "@/components/KakaoLoginButton"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function SignInPageClient() {
  const [clickCount, setClickCount] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== undefined) {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <article className="w-full max-w-[400px] rounded-[16px] px-[16px] py-[20px]">
      <Image
        src={"/images/zznpk_logo.png"}
        alt="logo"
        width={120}
        height={120}
        className="mx-auto"
        onClick={() => setClickCount((prev) => prev + 1)}
      />
      <div className="mb-[40px] mt-[24px] flex flex-col items-center gap-[16px] text-label-normal">
        <p className="font-sb-aggro-medium text-heading-4 md:text-heading-3">짱픽에 오신 것을 환영합니다!</p>
        <div className="text-center text-body-regular">
          <p>선택을 더 짜릿하게!</p>
          <p>짱픽에서 이상형 월드컵을 시작해 보세요.</p>
        </div>
      </div>
      <KakaoLoginButton className="mx-auto w-full" />
      {clickCount >= 5 && <DemoLoginForm />}
    </article>
  )
}
