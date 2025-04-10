"use client"

import MobileTabBar, { MobileTabBarItem } from "@/components/MobileTabBar"
import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction, useMemo } from "react"
import { toast } from "sonner"

interface Params {
  step: 1 | 2
  setStep: Dispatch<SetStateAction<1 | 2>>
}

export default function GameFormMobileTab({ step, setStep }: Params) {
  const pathname = usePathname()
  const isNewPage = pathname.includes("new")

  const items: MobileTabBarItem[] = useMemo(
    () => [
      {
        value: "info",
        label: "정보",
        onClick: () => setStep(1)
      },
      {
        value: "public",
        label: "공개",
        onClick: () => setStep(2)
      },
      {
        value: "content",
        label: "콘텐츠",
        onClick: () => {
          if (isNewPage) {
            toast.warning("먼저 게임방을 생성 해주세요")
          } else {
            toast.success("페이지 이동 구현필요")
          }
        }
      }
    ],
    [isNewPage, setStep]
  )

  const activeValue = step === 1 ? "info" : "public"

  return <MobileTabBar items={items} activeValue={activeValue} className="mb-[20px]" />
}
