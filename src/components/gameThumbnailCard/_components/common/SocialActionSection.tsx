"use client"
import { GameListResponseCategoriesItem } from "@/api/orval/model/gameListResponseCategoriesItem"
import GameReportModal from "@/components/GameReportModal"
import MoreButton, { MoreAction } from "@/components/MoreButton"
import { cn } from "@/utils/cn"
import { share, ShareAPIRequest } from "@/utils/share"
import { useState } from "react"

interface Params {
  id?: number
  title?: string
  categories?: GameListResponseCategoriesItem[]
}

export default function SocialActionSection({ id, title, categories }: Params) {
  const [reportModal, setReportModal] = useState<boolean>(false)

  const handleShare = async () => {
    const shareData: ShareAPIRequest = {
      title: `짱픽에 초대합니다`,
      text: `${title ?? ""}플레이`,
      url: `https://github.com/kojaem/${id}`
    }
    share(shareData)
  }

  const actions: MoreAction[] = [
    { label: "공유하기", onClick: handleShare },
    { label: "신고하기", onClick: () => setReportModal(true) }
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
            <p className="rounded-[4px] bg-gray-30 px-[8px] py-[4px]" key={`${category}-${i}`}>
              {category}
            </p>
          ))}
        </article>
      )}
      <div onClick={(e) => e.preventDefault()}>
        <MoreButton actions={actions} />
        {reportModal && <GameReportModal id={id?.toString()} onClose={() => setReportModal(false)} />}
      </div>
    </article>
  )
}
