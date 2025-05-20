"use client"
import { GameListResponseCategoriesItem } from "@/api/orval/model/gameListResponseCategoriesItem"
import CategoryLabel from "@/components/CategoryLabel"
import GameReportModal from "@/components/GameReportModal"
import MoreButton, { MoreItem } from "@/components/MoreButton"
import { cn } from "@/utils/cn"
import { getCategoryLabel } from "@/utils/getCategoryLabel"
import { handleGameShare } from "@/utils/handleShare"
import { requireLogin } from "@/utils/requireLogin"
import { useSession } from "next-auth/react"
import { useState } from "react"
import GameDeleteModal from "./GameDeleteModal"
import { usePathname } from "next/navigation"

interface Params {
  id?: number
  title?: string
  categories?: GameListResponseCategoriesItem[]
  isMine?: boolean
}

export default function SocialActionSection({ id, title, categories, isMine }: Params) {
  const { data: session } = useSession()

  const pathname = usePathname()

  const isMyPage = pathname === "/my-page"

  const [isOpenReportModal, setIsOpenReportModal] = useState<boolean>(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)

  const handleReport = async () => {
    if (!requireLogin(session)) {
      return
    }
    setIsOpenReportModal(true)
  }

  const moreItems: MoreItem[] = isMine
    ? isMyPage
      ? [
          { label: "공유하기", onClick: () => handleGameShare({ title, id }) },
          { label: "삭제하기", onClick: () => setIsOpenDeleteModal(true) }
        ]
      : [{ label: "공유하기", onClick: () => handleGameShare({ title, id }) }]
    : [
        { label: "공유하기", onClick: () => handleGameShare({ title, id }) },
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
