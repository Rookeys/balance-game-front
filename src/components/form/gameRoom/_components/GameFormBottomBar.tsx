"use client"
import { getGetMyGameListQueryKey } from "@/api/orval/client/user-profile-controller/user-profile-controller"
import BottomBarWrapper from "@/components/BottomBarWrapper"
import { Button } from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import { offset } from "@floating-ui/dom"
import { useQueryClient } from "@tanstack/react-query"
import { usePathname, useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import GameCreateTooltip from "./GameCreateTooltip"

interface Params {
  step: 1 | 2
  setStep: Dispatch<SetStateAction<1 | 2>>
  percent?: number
  disabled?: boolean
}

export default function GameFormBottomBar({ step, setStep, percent = 0, disabled }: Params) {
  const pathname = usePathname()

  const queryClient = useQueryClient()

  const isNewPage = pathname.includes("/new")

  const isMediasPage = pathname.includes("medias")

  const isResourcesPage = pathname.includes("resources")

  const router = useRouter()

  return (
    <BottomBarWrapper className="h-[124px]">
      <div className="flex items-center gap-[12px]">
        <ProgressBar percent={percent} />
        <p className="rounded-[100px] bg-gray-100 px-[12px] py-[4px]">{percent}%</p>
      </div>
      <Button
        data-tooltip-id={"game-create-bottom-bar-button"}
        key={`${step}-button`}
        type={isMediasPage || step === 1 ? "button" : "submit"}
        disabled={disabled}
        onClick={async () => {
          if (isMediasPage || isResourcesPage) {
            await queryClient.invalidateQueries({ queryKey: getGetMyGameListQueryKey() })
            router.push(`/my-page`)
          }
          if (step === 1) {
            setStep(2)
          }
        }}
      >
        {isMediasPage || isResourcesPage ? "만든 월드컵 보러가기" : step === 1 ? "다음" : "월드컵 생성"}
      </Button>
      {isNewPage && <GameCreateTooltip id="game-create-bottom-bar-button" place="top" middlewares={[offset(68)]} />}
    </BottomBarWrapper>
  )
}
