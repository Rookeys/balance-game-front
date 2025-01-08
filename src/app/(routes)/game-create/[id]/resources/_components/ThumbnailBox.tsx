"use client"
import ImageModal from "@/components/modal/ImageModal"
import YoutubeModal from "@/components/modal/YoutubeModal"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import Image from "next/image"
import { useState } from "react"

interface Params {
  url: string
  type: "image" | "youtube"
}
export default function ThumbnailBox({ url, type }: Params) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  if (type === "image") {
    return (
      <>
        <div className="w-full h-[100px] relative" onClick={() => setIsOpen(true)}>
          <Image src={url} alt="Image thumbnail" className="cursor-pointer" fill sizes="100px" />
        </div>
        {isOpen && <ImageModal url={url} onClose={() => setIsOpen(false)} />}
      </>
    )
  }

  return (
    <>
      <div className="w-full h-[100px] relative" onClick={() => setIsOpen(true)}>
        <Image
          src={getYoutubeThumbnail(url)}
          alt="Video Thumbnail"
          fill
          sizes="100px"
          // onClick={() => setIsOpen(true)}
          unoptimized
          // loader={({ src }) => src}
        />
      </div>
      {isOpen && <YoutubeModal url={url} onClose={() => setIsOpen(false)} overlayClose />}
    </>
  )
}
