"use client"

import { useGetCountResourcesInGames } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { Button } from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import SideBarWrapper from "@/components/SideBarWrapper"
import { Circle, CircleCheck } from "lucide-react"
import { useParams, usePathname, useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { toast } from "sonner"

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
      <section className="flex flex-col gap-[20px] rounded-[20px] border px-[16px] py-[32px]">
        <article className="flex items-center justify-between">
          <p>월드컵 완성까지</p>
          <p className="rounded-[100px] bg-gray-100 px-[12px] py-[4px]">{percent}%</p>
        </article>
        <ProgressBar percent={percent} />
      </section>
      <section className="flex flex-col rounded-[20px] border px-[16px] py-[20px]">
        <p className="py-[12px]">기본설정</p>
        <button type="button" className="flex items-center justify-between py-[12px]" onClick={() => handleStep(1)}>
          <p>월드컵 정보</p>
          {step === 1 || isStep1Complete ? (
            <CircleCheck fill="#000000" stroke="#DDDDDD" />
          ) : (
            <Circle stroke="#DDDDDD" />
          )}
        </button>
        <button type="button" className="flex items-center justify-between py-[12px]" onClick={() => handleStep(2)}>
          <p>공개 설정</p>
          {step === 2 ? <CircleCheck fill="#000000" stroke="#DDDDDD" /> : <Circle stroke="#DDDDDD" />}
        </button>
        <hr className="my-[12px]" />
        <p className="py-[12px]">콘텐츠</p>
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
          <p>콘텐츠 업로드</p>
          {isMediasPage || (resourceNumbers && resourceNumbers >= 2) ? (
            <CircleCheck fill="#000000" stroke="#DDDDDD" />
          ) : (
            <Circle stroke="#DDDDDD" />
          )}
        </button>
        <button
          type="button"
          className="flex items-center justify-between py-[12px]"
          onClick={() => {
            if (!id) {
              toast.warning("게임을 먼저 생성해 주세요.")
            } else if (!isResourcesPage) {
              router.push(`/game-create/${id}/resources`)
            }
          }}
        >
          <div className="flex items-center gap-[4px]">
            <p>콘텐츠 편집</p>
            <span>(선택)</span>
          </div>
          {isResourcesPage ? <CircleCheck fill="#000000" stroke="#DDDDDD" /> : <Circle stroke="#DDDDDD" />}
        </button>
      </section>

      <Button
        key={`${step}-button`}
        className="bg-black text-white"
        type={step === 1 ? "button" : "submit"}
        disabled={disabled}
        onClick={() => {
          if (step === 1) {
            handleStep(2)
          }
        }}
      >
        다음
      </Button>
    </SideBarWrapper>
  )
}
