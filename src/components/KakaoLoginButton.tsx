"use client"
import { COLORS } from "@/styles/theme/colors"
import { cn } from "@/utils/cn"
// import { signIn } from "next-auth/react"
import Link from "next/link"
import { KakaoSymbol } from "./icons/KakaoSymbol"
import { KAKAO_AUTH_URL } from "@/constants/kakaoAuthUrl"

interface Params {
  className?: string
}

export default function KakaoLoginButton({ className }: Params) {
  return (
    <Link
      href={`${KAKAO_AUTH_URL}`}
      className={cn(
        "flex items-center justify-center gap-[8px] rounded-[12px] bg-kakao-container px-[12px] py-[8px] 2xsm:w-[300px]",
        className
      )}
    >
      <KakaoSymbol size={20} color={COLORS.KAKAO_SYMBOL} />
      <p className="text-kakao-label">카카오 로그인</p>
    </Link>
  )
}
