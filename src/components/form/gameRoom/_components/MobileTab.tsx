"use client"
import { cn } from "@/utils/cn"
import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { toast } from "sonner"

interface Params {
  step: 1 | 2
  setStep: Dispatch<SetStateAction<1 | 2>>
}
export default function MobileTab({ step, setStep }: Params) {
  const pathname = usePathname()
  const isNewPage = pathname.includes("new")
  return (
    <section className="mb-[20px] flex w-full justify-between md:hidden">
      <button
        type="button"
        className={cn(
          "flex h-[56px] w-full items-center justify-center border-b-4 p-[8px]",
          step === 1 && "border-b-black"
        )}
        onClick={() => setStep(1)}
      >
        <p>정보</p>
      </button>
      <button
        type="button"
        className={cn(
          "flex h-[56px] w-full items-center justify-center border-b-4 p-[8px]",
          step === 2 && "border-b-black"
        )}
        onClick={() => setStep(2)}
      >
        <p>공개</p>
      </button>
      <button
        type="button"
        className={cn("flex h-[56px] w-full items-center justify-center border-b-4 p-[8px]", isNewPage && "bg-gray-20")}
        onClick={() => {
          if (isNewPage) {
            toast.warning("먼저 게임방을 생성 해주세요")
          } else {
            toast.success("페이지 이동 구현필요")
          }
        }}
      >
        <p>콘텐츠</p>
      </button>
    </section>
  )
}
