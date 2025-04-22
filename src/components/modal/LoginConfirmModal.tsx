"use client"

import ConfirmModal from "@/components/modal/ConfirmModal"
import { useLoginModalStore } from "@/store/loginModalStore"
import { useRouter } from "next/navigation"

export default function LoginConfirmModal() {
  const { isOpen, hide } = useLoginModalStore()
  const router = useRouter()

  if (!isOpen) return null

  return (
    <ConfirmModal
      title="로그인이 필요한 서비스입니다."
      description="해당 기능은 로그인 후 이용 가능합니다. 로그인 하시겠습니까?"
      onClick={() => {
        hide()
        router.push(`/sign-in?redirectUrl=${encodeURIComponent(window.location.href)}`)
      }}
      onClose={hide}
    />
  )
}
