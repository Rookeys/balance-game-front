"use client"

import {
  getGetCommentsByGameResultQueryKey,
  useDeleteResultComment
} from "@/api/orval/client/game-result-comments-controller/game-result-comments-controller"
import ConfirmModal from "@/components/modal/ConfirmModal"
import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "next/navigation"

interface Params {
  id: number
  onClose: () => void
}

export default function CommentDeleteModal({ id, onClose }: Params) {
  const { id: gameId } = useParams()

  const { mutateAsync: deleteGameComment, isPending } = useDeleteResultComment()

  const queryClient = useQueryClient()

  const handleDelete = async () => {
    await deleteGameComment({ gameId: Number(id), commentId: id as number })
    queryClient.invalidateQueries({ queryKey: getGetCommentsByGameResultQueryKey(Number(gameId)) })
    onClose()
  }

  return (
    <ConfirmModal
      title="선택한 댓글을 삭제하시겠어요?"
      description="댓글을 삭제하면 다시 복구할 수 없어요."
      onClose={onClose}
      onClick={handleDelete}
      disabled={isPending}
    />
  )
}
