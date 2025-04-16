"use client"

import MoreButton, { MoreItem } from "@/components/MoreButton"

export default function CommentSocialAction() {
  // const onEdit = () => {
  //   alert("onEdit 실행")
  // }

  const onDelete = () => {
    alert("onDelete 실행")
  }

  const onReport = () => {
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
