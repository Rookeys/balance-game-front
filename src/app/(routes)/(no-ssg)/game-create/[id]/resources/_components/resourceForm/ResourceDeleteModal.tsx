"use client"

import ConfirmModal from "@/components/modal/ConfirmModal"

interface Params {
  onClose?: () => void
  onClick?: () => void
  overlayClose?: boolean
  disabled?: boolean
}

export default function ResourceDeleteModal({ onClose, onClick, overlayClose, disabled }: Params) {
  return (
    <ConfirmModal
      title="선택한 콘텐츠를 삭제하시겠어요?"
      description="콘텐츠를 삭제하면 다시 복구할 수 없어요."
      onClose={onClose}
      onClick={onClick}
      overlayClose={overlayClose}
      disabled={disabled}
    />
  )
}
