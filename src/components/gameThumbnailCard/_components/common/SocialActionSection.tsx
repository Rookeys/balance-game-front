"use client"
import { GameListResponseCategoriesItem } from "@/api/orval/model/gameListResponseCategoriesItem"
import CategoryLabel from "@/components/CategoryLabel"
import GameReportModal from "@/components/GameReportModal"
import MoreButton, { MoreItem } from "@/components/MoreButton"
import { cn } from "@/utils/cn"
import { getCategoryLabel } from "@/utils/getCategoryLabel"
import { requireLogin } from "@/utils/requireLogin"
import { share, ShareAPIRequest } from "@/utils/share"
import { useSession } from "next-auth/react"
import { useState } from "react"
import GameDeleteModal from "./GameDeleteModal"

interface Params {
  id?: number
  title?: string
  categories?: GameListResponseCategoriesItem[]
  isMine?: boolean
}

export default function SocialActionSection({ id, title, categories, isMine }: Params) {
  const { data: session } = useSession()

  const [isOpenReportModal, setIsOpenReportModal] = useState<boolean>(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)

  const handleShare = async () => {
    const shareData: ShareAPIRequest = {
      title: `짱픽에 초대합니다`,
      text: `이상형 월드컵 ${title ?? ""}`,
      url: `https://zznpk.com/game/${id}`
    }
    share(shareData)
  }

  const handleReport = async () => {
    if (!requireLogin(session)) {
      return
    }
    setIsOpenReportModal(true)
  }

  const moreItems: MoreItem[] = isMine
    ? [
        { label: "공유하기", onClick: handleShare },
        { label: "삭제하기", onClick: () => setIsOpenDeleteModal(true) }
      ]
    : [
        { label: "공유하기", onClick: handleShare },
        {
          label: "신고하기",
          onClick: handleReport
        }
      ]

  return (
    <article
      className={cn(
        "relative flex h-[32px] items-center justify-between",
        categories && categories.length > 0 ? "justify-between" : "justify-end"
      )}
    >
      {categories && categories?.length > 0 && (
        <article className="flex gap-[4px]">
          {categories.map((category, i) => (
            <CategoryLabel key={`${category}-${i}`} text={getCategoryLabel(category)} />
          ))}
        </article>
      )}
      <div onClick={(e) => e.preventDefault()}>
        <MoreButton items={moreItems} />
        {isOpenReportModal && <GameReportModal id={id?.toString()} onClose={() => setIsOpenReportModal(false)} />}
        {isOpenDeleteModal && <GameDeleteModal id={Number(id)} onClose={() => setIsOpenDeleteModal(false)} />}
      </div>
    </article>
  )
}
