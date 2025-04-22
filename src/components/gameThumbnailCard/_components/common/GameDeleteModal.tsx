"use client"

import { useDeleteGame } from "@/api/orval/client/game-room-controller/game-room-controller"
import { getGetMyGameListQueryKey } from "@/api/orval/client/user-profile-controller/user-profile-controller"
import ConfirmModal from "@/components/modal/ConfirmModal"
import { useQueryClient } from "@tanstack/react-query"

interface Params {
  id: number
  onClose: () => void
}

export default function GameDeleteModal({ id, onClose }: Params) {
  const { mutateAsync: deleteGame, isPending } = useDeleteGame()

  const queryClient = useQueryClient()

  const handleDelete = async () => {
    await deleteGame({ gameId: id })
    queryClient.invalidateQueries({ queryKey: getGetMyGameListQueryKey() })
    onClose()
  }

  return (
    <ConfirmModal
      title="선택한 월드컵을 삭제하시겠어요?"
      description="월드컵을 삭제하면 다시 복구할 수 없어요."
      onClose={onClose}
      onClick={handleDelete}
      disabled={isPending}
    />
  )
}
