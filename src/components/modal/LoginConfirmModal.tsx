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
      title="로그인"
      description={`이 기능은 로그인 후 이용할 수 있어요.\n지금 로그인할까요?`}
      onClick={() => {
        hide()
        router.push(`/sign-in?redirectUrl=${encodeURIComponent(window.location.href)}`)
      }}
      onClose={hide}
      okLabel="로그인 하기"
    />
  )
}
