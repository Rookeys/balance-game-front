"use client"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"

const YoutubeModal = dynamic(() => import("@/components/modal/YoutubeModal"))

interface Params {
  url: string
  start?: number
  end?: number
}
export default function YoutubeThumbnailBox({ url, start, end }: Params) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div className="relative h-full min-h-[120px] w-full" onClick={() => setIsOpen(true)}>
        <Image
          src={getYoutubeThumbnail(url)}
          alt="Video Thumbnail"
          className="cursor-pointer"
          fill
          sizes="120px"
          // onClick={() => setIsOpen(true)}
          unoptimized
          // loader={({ src }) => src}
        />
      </div>
      {isOpen && <YoutubeModal url={url} onClose={() => setIsOpen(false)} overlayClose start={start} end={end} />}
    </>
  )
}
