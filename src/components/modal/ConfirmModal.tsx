"use client"
import { Button } from "@/components/Button"
import ModalWrapper from "./ModalWrapper"
import { XIcon } from "lucide-react"
import { cn } from "@/utils/cn"

interface Params {
  title?: string
  description?: string
  onClick?: () => void
  onClose?: () => void
  disabled?: boolean
  overlayClose?: boolean
  className?: string
}

export default function ConfirmModal({
  title,
  description,
  onClick,
  onClose,
  disabled,
  overlayClose = false,
  className
}: Params) {
  return (
    <ModalWrapper onClose={onClose} overlayClose={overlayClose}>
      <section
        className={cn(
          "z-[999] mx-[16px] w-full max-w-[400px] rounded-[16px] bg-white p-[16px] text-center dark:border dark:border-gray-70 dark:bg-night",
          className
        )}
      >
        <article className="flex items-center justify-end">
          <XIcon size={24} className="cursor-pointer" onClick={onClose} />
        </article>
        <article className="flex flex-col gap-[16px] px-[16px] pb-[40px] pt-[20px]">
          <h2 className="text-[24px]">{title}</h2>
          <p className="text-[16px]">{description}</p>
        </article>
        <article className="flex items-center justify-between gap-[12px] pb-[40px]">
          <Button
            type="button"
            className="w-full rounded-[12px] bg-dark-20 px-[28px] py-[12px] text-white hover:bg-dark-30"
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            type="button"
            className="w-full rounded-[12px] bg-blue-40 px-[28px] py-[12px] text-white hover:bg-blue-50"
            onClick={onClick}
            disabled={disabled}
          >
            확인
          </Button>
        </article>
      </section>
    </ModalWrapper>
  )
}
