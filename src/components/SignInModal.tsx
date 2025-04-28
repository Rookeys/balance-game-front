"use client"

import SignInPageClient from "@/app/(routes)/(ssr)/sign-in/_components/SignInPageClient"
import ModalWrapper from "@/components/modal/ModalWrapper"
import { COLORS } from "@/styles/theme/colors"
import { XIcon } from "lucide-react"

interface Params {
  onClose?: () => void
  overlayClose?: boolean
}

export default function SignInModal({ onClose, overlayClose }: Params) {
  return (
    <ModalWrapper onClose={onClose} overlayClose={overlayClose}>
      <section
        className="z-[999] mx-[16px] w-full max-w-[400px] rounded-[16px] bg-[#FFFFFF] px-[16px] pt-[16px]"
        onClick={(e) => e.stopPropagation()}
      >
        <section className="flex items-center justify-end">
          <XIcon size={24} color={COLORS.NEUTRAL_700} className="cursor-pointer" onClick={onClose} />
        </section>
        <SignInPageClient />
      </section>
    </ModalWrapper>
  )
}
