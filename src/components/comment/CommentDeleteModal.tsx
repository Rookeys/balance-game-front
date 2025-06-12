"use client"

import {
  getGetChildrenCommentsByGameResourceQueryKey,
  getGetParentCommentsByGameResourceQueryKey,
  useDeleteResourceComment
} from "@/api/orval/client/game-resource-comments-controller/game-resource-comments-controller"
import {
  getGetCommentsByGameResultQueryKey,
  useDeleteResultComment
} from "@/api/orval/client/game-result-comments-controller/game-result-comments-controller"
import ConfirmModal from "@/components/modal/ConfirmModal"
import { log } from "@/utils/log"
import { useQueryClient } from "@tanstack/react-query"
import { useParams, usePathname, useSearchParams } from "next/navigation"
import { toast } from "sonner"

interface Params {
  commentId: number
  onClose: () => void
  resourceId?: number
  parentId?: number
}

export default function CommentDeleteModal({ commentId, onClose, resourceId, parentId }: Params) {
  const { id: gameId } = useParams()

  // 게임 결과 댓글 삭제 API
  const { mutateAsync: deleteGameComment, isPending: isPendingDeleteGameComment } = useDeleteResultComment()

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const isDetailPage = /^\/game\/[^/]+\/comment$/.test(pathname)

  const tab = searchParams.get("tab")

  const isGameComment = isDetailPage || (pathname.includes("resources") && tab !== "resource")

  // 게임 리소스 댓글 삭제 API
  const { mutateAsync: deleteResourceComment, isPending: isPendingDeleteResourceComment } = useDeleteResourceComment()

  const queryClient = useQueryClient()

  const handleDelete = async () => {
    try {
      if (isGameComment) {
        await deleteGameComment({ gameId: Number(gameId), commentId: commentId as number })
        await queryClient.invalidateQueries({ queryKey: getGetCommentsByGameResultQueryKey(Number(gameId)) })
      } else {
        if (!resourceId) return
        await deleteResourceComment({ gameId: Number(gameId), commentId: commentId as number, resourceId: resourceId })
        await queryClient.invalidateQueries({ queryKey: getGetCommentsByGameResultQueryKey(Number(gameId)) })
        await Promise.all([
          queryClient.invalidateQueries({
            queryKey: getGetParentCommentsByGameResourceQueryKey(Number(gameId), resourceId)
          }),
          queryClient.invalidateQueries({
            queryKey: getGetChildrenCommentsByGameResourceQueryKey(Number(gameId), resourceId, parentId as number)
          })
        ])
      }
      toast.success("댓글을 삭제했습니다.")
      onClose()
    } catch (error) {
      log(error)
      toast.error("오류가 발생했습니다.")
    }
  }

  return (
    <ConfirmModal
      title="선택한 댓글을 삭제하시겠어요?"
      description="댓글을 삭제하면 다시 복구할 수 없어요."
      onClose={onClose}
      onClick={handleDelete}
      disabled={isPendingDeleteGameComment || isPendingDeleteResourceComment}
    />
  )
}
