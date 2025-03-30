"use client"
import { Button } from "@/components/Button"
import GameReportModal from "@/components/GameReportModal"
import { share, ShareAPIRequest } from "@/utils/share"
import { EllipsisVertical } from "lucide-react"
import { useState } from "react"

interface Params {
  id?: number
  title?: string
  category?: string
}

export default function SocialActionSection({ id, title, category }: Params) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [reportModal, setReportModal] = useState<boolean>(false)

  const handleShare = async () => {
    const shareData: ShareAPIRequest = {
      title: `짱픽에 초대합니다`,
      text: `${title ?? ""}플레이`,
      url: `https://github.com/kojaem/${id}`
    }
    share(shareData)
  }

  return (
    <article className="relative flex h-[32px] items-center justify-between" onClick={(e) => e.preventDefault()}>
      {category ? <p className="rounded-[4px] bg-gray-30 px-[8px] py-[4px]">{category}</p> : <p></p>}
      <EllipsisVertical
        size={24}
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
      />
      {isOpen && (
        <section className="absolute end-0 top-[32px] flex flex-col rounded-[8px] border bg-white">
          <Button variant="custom" className="px-[24px] py-[20px]" onClick={handleShare}>
            <p>공유하기</p>
          </Button>
          <Button
            variant="custom"
            className="px-[24px] py-[20px]"
            onClick={() => {
              setReportModal(true)
            }}
          >
            <p>신고하기</p>
          </Button>
        </section>
      )}
      {reportModal && <GameReportModal id={id?.toString()} onClose={() => setReportModal(false)} />}
    </article>
  )
}
