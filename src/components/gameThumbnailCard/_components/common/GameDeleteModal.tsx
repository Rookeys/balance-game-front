"use client"

import { useDeleteGame } from "@/api/orval/client/game-room-controller/game-room-controller"
import {
  getGetMyGameListQueryKey,
  getGetRecentPlaysQueryKey,
  useDeleteRecentPlay
} from "@/api/orval/client/user-profile-controller/user-profile-controller"
import ConfirmModal from "@/components/modal/ConfirmModal"
import { log } from "@/utils/log"
import { useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

interface Params {
  id: number
  onClose: () => void
  type: "played-game" | "created-game"
}

export default function GameDeleteModal({ id, onClose, type }: Params) {
  const { mutateAsync: deleteGame, isPending: isPendingDeleteGame } = useDeleteGame()
  const { mutateAsync: deleteRecentPlay, isPending: isPendingDeleteRecentPlay } = useDeleteRecentPlay()
  const isPlayedGame = type === "played-game"
  // const isCreateGame = type === "created-game"

  const queryClient = useQueryClient()

  const handleDelete = async () => {
    try {
      if (isPlayedGame) {
        await deleteRecentPlay({ roomId: id })
        await queryClient.invalidateQueries({ queryKey: getGetRecentPlaysQueryKey() })
      } else {
        await deleteGame({ gameId: id })
        await queryClient.invalidateQueries({ queryKey: getGetMyGameListQueryKey() })
      }

      toast.success("게임을 삭제했습니다.")
      onClose()
    } catch (error) {
      log(error)
      toast.error("오류가 발생했습니다.")
    }
  }

  return (
    <ConfirmModal
      title="선택한 월드컵을 삭제하시겠어요?"
      description="월드컵을 삭제하면 다시 복구할 수 없어요."
      onClose={onClose}
      onClick={handleDelete}
      disabled={isPendingDeleteGame || isPendingDeleteRecentPlay}
    />
  )
}
