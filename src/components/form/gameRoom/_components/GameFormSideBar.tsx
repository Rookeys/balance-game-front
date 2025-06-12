"use client"

import { useGetCountResourcesInGames } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { Button } from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import SideBarWrapper from "@/components/SideBarWrapper"
import CustomCheckIcon from "@/icons/CustomCheckIcon"
import { useParams, usePathname, useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { toast } from "sonner"
import GameCreateTooltip from "./GameCreateTooltip"

interface Params {
  step?: 1 | 2
  setStep?: Dispatch<SetStateAction<1 | 2>>
  percent?: number
  isStep1Complete?: boolean
  disabled?: boolean
}

export default function GameFormSideBar({ step, setStep, percent = 0, isStep1Complete, disabled }: Params) {
  // const {
  //   formState: { isSubmitting }
  // } = useFormContext()
  const router = useRouter()

  const { id } = useParams()

  const pathname = usePathname()

  const isMediasPage = pathname.includes("medias")

  const isNewPage = pathname.includes("/new")

  const isResourcesPage = pathname.includes("resources")

  const { data: resourceNumbers } = useGetCountResourcesInGames(Number(id), {
    query: {
      enabled: isMediasPage || isResourcesPage
    }
  })

  const handleStep = (e: 1 | 2) => {
    if (setStep) {
      setStep(e)
    } else {
      router.push(`/game-create/${id}/edit`)
    }
  }

  return (
    <SideBarWrapper>
      <section className="flex flex-col gap-[20px] rounded-[12px] border px-[16px] py-[32px]">
        <article className="flex items-center justify-between">
          <p className="font-sb-aggro-medium text-heading-5">월드컵 완성도</p>
          <p className="rounded-[1000px] bg-fill-normal px-[12px] py-[4px] text-label-bold">{percent}%</p>
        </article>
        <ProgressBar percent={percent} />
      </section>
      <section className="flex flex-col rounded-[12px] border px-[16px] py-[20px]">
        <p className="py-[12px] font-sb-aggro-medium text-heading-5">기본설정</p>
        <button type="button" className="flex items-center justify-between py-[12px]" onClick={() => handleStep(1)}>
          <p className="text-body2-regular">월드컵 정보</p>
          <CustomCheckIcon checked={step === 1 || isStep1Complete} width={28} height={28} />
        </button>
        <button type="button" className="flex items-center justify-between py-[12px]" onClick={() => handleStep(2)}>
          <p className="text-body2-regular">공개 설정</p>
          <CustomCheckIcon checked={step === 2} width={28} height={28} />
        </button>
        <hr className="my-[12px]" />
        <p className="py-[12px] font-sb-aggro-medium text-heading-5">콘텐츠</p>
        <button
          type="button"
          className="flex items-center justify-between py-[12px]"
          onClick={() => {
            if (!id) {
              toast.warning("게임을 먼저 생성해 주세요.")
            } else if (!isMediasPage) {
              router.push(`/game-create/${id}/medias`)
            }
          }}
        >
          <p className="text-body2-regular">콘텐츠 업로드</p>
          <CustomCheckIcon
            checked={isMediasPage || (!!resourceNumbers && resourceNumbers >= 2)}
            width={28}
            height={28}
          />
        </button>
        <button
          type="button"
          className="flex items-center justify-between py-[12px]"
          onClick={() => {
            if (!id) {
              toast.warning("게임을 먼저 생성해 주세요.")
            } else {
              router.push(`/game-create/${id}/resources`)
            }
          }}
        >
          <div className="flex items-center gap-[4px]">
            <p className="text-body2-regular">콘텐츠 편집</p>
            <span className="text-label-medium text-label-alternative">(선택)</span>
          </div>
          <CustomCheckIcon checked={isResourcesPage} width={28} height={28} />
        </button>
      </section>
      <Button
        data-tooltip-id={"game-create-sidebar-button"}
        key={`${step}-button`}
        className="rounded-[12px]"
        type={step === 1 ? "button" : "submit"}
        disabled={disabled}
        onClick={() => {
          if (step === 1) {
            handleStep(2)
          }
        }}
      >
        {step === 1 ? "다음" : "월드컵 생성"}
      </Button>
      {isNewPage && (
        <GameCreateTooltip id="game-create-sidebar-button" classNameArrow="absolute !start-auto end-[8px]" />
      )}
    </SideBarWrapper>
  )
}
