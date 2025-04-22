"use client"

import MoreButton, { MoreItem } from "@/components/MoreButton"
import { requireLogin } from "@/utils/requireLogin"
import { useSession } from "next-auth/react"

export default function CommentSocialAction() {
  const { data: session } = useSession()
  // const onEdit = () => {
  //   alert("onEdit 실행")
  // }

  const onDelete = () => {
    alert("onDelete 실행")
  }

  const onReport = () => {
    if (!requireLogin(session)) {
      return
    }
    alert("onReport 실행")
  }

  const isMine = false

  const moreItems: MoreItem[] = isMine
    ? [
        // { label: "수정하기", onClick: onEdit },
        { label: "삭제하기", onClick: onDelete }
      ]
    : [{ label: "신고하기", onClick: onReport }]

  return (
    <>
      <MoreButton items={moreItems} />
    </>
  )
}
