"use client"
import { GameListResponseCategoriesItem } from "@/api/orval/model/gameListResponseCategoriesItem"
import { Button } from "@/components/Button"
import { cn } from "@/utils/cn"
import { share, ShareAPIRequest } from "@/utils/share"
import { EllipsisVertical } from "lucide-react"
import { useState } from "react"

interface Params {
  id?: number
  title?: string
  categories?: GameListResponseCategoriesItem[]
}

export default function SocialActionSection({ id, title, categories }: Params) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleShare = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const shareData: ShareAPIRequest = {
      title: `피케이드에 초대합니다`,
      text: `${title ?? ""}플레이`,
      url: `https://github.com/kojaem/${id}`
    }
    share(shareData)
  }

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
      <EllipsisVertical
        size={24}
        onClick={(e) => {
          e.preventDefault()
          setIsOpen((prev) => !prev)
        }}
      />
      {isOpen && (
        <section className="absolute end-0 top-[32px] rounded-[8px] border bg-white">
          <Button variant="custom" className="px-[24px] py-[20px]" onClick={handleShare}>
            <p>공유하기</p>
          </Button>
        </section>
      )}
    </article>
  )
}
