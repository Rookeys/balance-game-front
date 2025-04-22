"use client"
import ModalWrapper from "@/components/modal/ModalWrapper"
import { XIcon } from "lucide-react"
import RoundForm from "./RoundForm"
import { cn } from "@/utils/cn"
import Image from "next/image"

interface Params {
  onClose?: () => void
  // onClick?: () => void
  overlayClose?: boolean
  className?: string
  totalItem: number
}

export default function SelectRoundModal({ onClose, overlayClose = false, className, totalItem }: Params) {
  return (
    <ModalWrapper onClose={onClose} overlayClose={overlayClose}>
      <section
        className={cn(
          "z-[999] mx-[16px] w-full max-w-[520px] rounded-[16px] bg-white p-[16px] text-center dark:border dark:border-gray-70 dark:bg-night",
          className
        )}
      >
        <article className="flex items-center justify-between">
          <div className="h-[24px] w-[24px]" />
          <p>라운드 선택</p>
          <XIcon size={24} className="cursor-pointer" onClick={onClose} />
        </article>
        <article className="mt-[20px] flex flex-col gap-[24px]">
          <Image src={"/images/Rookeys.png"} alt="" width={120} height={120} className="mx-auto" />
          <p className="mb-[12px] mt-[8px]">라운드를 선택하고 월드컵을 시작하세요!</p>
          <RoundForm totalItem={totalItem} />
        </article>
      </section>
    </ModalWrapper>
  )
}
