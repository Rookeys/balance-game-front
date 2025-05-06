"use client"

import MoreButton, { MoreItem } from "@/components/MoreButton"
import { requireLogin } from "@/utils/requireLogin"
import { useSession } from "next-auth/react"
import { useState } from "react"
import CommentReportModal from "../CommentReportModal"
import CommentDeleteModal from "./CommentDeleteModal"

interface Params {
  id?: number
  isMine?: boolean
}

export default function CommentSocialAction({ id, isMine }: Params) {
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
      {isOpenDeleteModal && <CommentDeleteModal id={id as number} onClose={() => setIsOpenDeleteModal(false)} />}
      {isOpenReportModal && <CommentReportModal id={id} onClose={() => setIsOpenReportModal(false)} />}
    </>
  )
}
