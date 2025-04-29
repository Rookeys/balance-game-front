"use client"
import ModalWrapper from "@/components/modal/ModalWrapper"
import { XIcon } from "lucide-react"
import RoundForm from "./RoundForm"
import { cn } from "@/utils/cn"
import Image from "next/image"
import { COLORS } from "@/styles/theme/colors"

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
        className={cn("z-[999] mx-[16px] w-full max-w-[520px] rounded-[16px] bg-white p-[16px] text-center", className)}
      >
        <article className="flex items-center justify-between">
          <div className="h-[24px] w-[24px]" />
          <p className="text-body-bold text-label-neutral">라운드 선택</p>
          <XIcon size={24} color={COLORS.NEUTRAL_700} className="cursor-pointer" onClick={onClose} />
        </article>
        <article className="mt-[20px] flex flex-col gap-[24px]">
          <Image src={"/images/Rookeys.png"} alt="" width={100} height={100} className="mx-auto" />
          <p className="font-sb-aggro-medium text-heading-4 text-label-normal md:text-heading-3">
            라운드 선택하고 시작하기
          </p>
          <RoundForm totalItem={totalItem} />
        </article>
      </section>
    </ModalWrapper>
  )
}
