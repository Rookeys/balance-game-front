import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"

const YoutubeModal = dynamic(() => import("@/components/modal/YoutubeModal"))

interface Params {
  url: string
}
export default function YoutubeThumbnailBox({ url }: Params) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
