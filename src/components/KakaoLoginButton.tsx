"use client"
import { COLORS } from "@/styles/theme/colors"
import { cn } from "@/utils/cn"
import { signIn } from "next-auth/react"
import { Button } from "./Button"
import { KakaoSymbol } from "./icons/KakaoSymbol"

interface Params {
  className?: string
}

export default function KakaoLoginButton({ className }: Params) {
  const handleAuthAction = () => {
    signIn("kakao")
  }

  return (
    <Button
      variant="custom"
      onClick={handleAuthAction}
      className={cn("bg-kakao-container flex gap-[8px] px-[12px] py-[8px] rounded-[12px]", className)}
    >
      <KakaoSymbol size={20} color={COLORS.KAKAO_SYMBOL} />
      <p className="text-kakao-label">카카오 로그인</p>
    </Button>
  )
}
