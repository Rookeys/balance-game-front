"use client"
import { Button } from "@/components/Button"
import { COLORS } from "@/styles/theme/colors"
import { cn } from "@/utils/cn"
import { XIcon } from "lucide-react"
import ModalWrapper from "./ModalWrapper"

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
          "z-[999] w-full max-w-[380px] rounded-[16px] bg-background p-[16px] text-center dark:border",
          className
        )}
      >
        <article className="flex items-center justify-end">
          <XIcon size={24} color={COLORS.NEUTRAL_700} className="cursor-pointer" onClick={onClose} />
        </article>
        <article className="flex flex-col gap-[16px] pb-[40px] pt-[20px]">
          <h2 className="font-sb-aggro-medium text-heading-4 text-label-normal md:text-heading-3">{title}</h2>
          <p className="whitespace-pre-line text-body2-regular">{description}</p>
        </article>
        <article className="flex items-center justify-between gap-[12px] pb-[40px]">
          <Button
            variant="custom"
            type="button"
            className="w-full rounded-[12px] bg-fill-normal px-[28px] py-[12px] text-body2-bold text-label-normal"
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            type="button"
            className="w-full rounded-[12px] px-[28px] py-[12px] text-body2-bold"
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
