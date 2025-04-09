"use client"

import MoreButton, { MoreAction } from "@/components/MoreButton"

export default function CommentSocialAction() {
  const onEdit = () => {
    alert("onEdit 실행")
  }

  const onShare = () => {
    alert("onShare 실행")
  }

  const onDelete = () => {
    alert("onDelete 실행")
  }

  const isMine = false

  const actions: MoreAction[] = isMine
    ? [
        { label: "수정하기", onClick: onEdit },
        { label: "공유하기", onClick: onShare },
        { label: "삭제하기", onClick: onDelete }
      ]
    : [
        { label: "공유하기", onClick: onShare },
        { label: "신고하기", onClick: onDelete }
      ]

  return (
    <>
      <MoreButton actions={actions} />
    </>
  )
}
