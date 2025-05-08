"use client"

import MoreButton, { MoreItem } from "@/components/MoreButton"
import { requireLogin } from "@/utils/requireLogin"
import { useSession } from "next-auth/react"
import { useState } from "react"
import CommentReportModal from "../CommentReportModal"
import CommentDeleteModal from "./CommentDeleteModal"

interface Params {
  commentId?: number
  isMine?: boolean
  resourceId?: number
  parentId?: number
}

export default function CommentSocialAction({ commentId, isMine, resourceId, parentId }: Params) {
  const { data: session } = useSession()

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)
  const [isOpenReportModal, setIsOpenReportModal] = useState<boolean>(false)

  const onReport = () => {
    if (!requireLogin(session)) {
      return
    }
    setIsOpenReportModal(true)
  }

  const moreItems: MoreItem[] = isMine
    ? [{ label: "삭제하기", onClick: () => setIsOpenDeleteModal(true) }]
    : [{ label: "신고하기", onClick: onReport }]

  return (
    <>
      <MoreButton items={moreItems} />
      {isOpenDeleteModal && (
        <CommentDeleteModal
          commentId={commentId as number}
          onClose={() => setIsOpenDeleteModal(false)}
          resourceId={resourceId}
          parentId={parentId}
        />
      )}
      {isOpenReportModal && <CommentReportModal commentId={commentId} onClose={() => setIsOpenReportModal(false)} />}
    </>
  )
}
