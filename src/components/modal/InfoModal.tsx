"use client"
import { Button } from "@/components/Button"
import ModalWrapper from "./ModalWrapper"
import { XIcon } from "lucide-react"
import { cn } from "@/utils/cn"
import { ReactNode } from "react"
import { COLORS } from "@/styles/theme/colors"

interface Params {
  title?: string
  onClick?: () => void
  onClose?: () => void
  disabled?: boolean
  overlayClose?: boolean
  className?: string
  okLabel?: string
  DescriptionUI?: ReactNode
}

export default function InfoModal({
  title,
  DescriptionUI,
  onClick,
  onClose,
  disabled,
  overlayClose = false,
  className,
  okLabel = "확인"
}: Params) {
  return (
    <ModalWrapper onClose={onClose} overlayClose={overlayClose}>
      <section
        className={cn(
          "dark:border-gray-70 dark:bg-night z-[999] mx-[16px] w-full max-w-[500px] rounded-[16px] bg-white p-[16px] dark:border",
          className
        )}
      >
        <article className="flex items-center justify-end">
          <XIcon size={24} color={COLORS.NEUTRAL_700} className="cursor-pointer" onClick={onClose} />
        </article>
        <article className="flex flex-col gap-[16px] pb-[40px] pt-[20px]">
          <h2 className="font-sb-aggro-medium text-heading-4 text-label-normal md:text-heading-3">{title}</h2>
          {DescriptionUI}
        </article>
        <article className="flex items-center justify-between gap-[12px]">
          <Button
            type="button"
            className="w-full rounded-[12px] px-[28px] py-[12px] text-white"
            onClick={onClick}
            disabled={disabled}
          >
            {okLabel}
          </Button>
        </article>
      </section>
    </ModalWrapper>
  )
}
