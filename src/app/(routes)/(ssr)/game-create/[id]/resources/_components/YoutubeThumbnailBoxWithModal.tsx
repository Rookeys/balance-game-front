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
export default function YoutubeThumbnailBoxWithModal({ url, start, end }: Params) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <figure className="relative h-full min-h-[120px] w-full bg-blue-100" onClick={() => setIsOpen(true)}>
        <Image
          src={getYoutubeThumbnail(url)}
          alt="Video Thumbnail"
          className="cursor-pointer object-contain"
          fill
          sizes="120px"
          // onClick={() => setIsOpen(true)}
          unoptimized
          // loader={({ src }) => src}
        />
      </figure>
      {isOpen && <YoutubeModal url={url} onClose={() => setIsOpen(false)} overlayClose start={start} end={end} />}
    </>
  )
}
