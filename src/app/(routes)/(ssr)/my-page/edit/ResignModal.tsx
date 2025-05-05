"use client"

import ConfirmModal from "@/components/modal/ConfirmModal"

interface Params {
  onClose?: () => void
  onClick?: () => void
  overlayClose?: boolean
}

export default function ResignModal({ onClose, onClick, overlayClose }: Params) {
  return (
    <ConfirmModal
      title="정말 탈퇴하시겠어요?"
      description="한 번 삭제된 데이터는 복구할 수 없으며 지금까지 저장된 정보가 모두 삭제 돼요."
      okLabel="탈퇴"
      onClose={onClose}
      onClick={onClick}
      overlayClose={overlayClose}
    />
  )
}
