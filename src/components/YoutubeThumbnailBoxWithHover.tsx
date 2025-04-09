"use client"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { useState } from "react"
import ImageRatio from "./ImageRatio"
import YoutubeRatio from "./YoutubeRatio"

interface Params {
  url: string
  start?: number
  end?: number
  ratio?: number
}
export default function YoutubeThumbnailBoxWithHover({ url, start, end, ratio }: Params) {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <div className="relative h-full min-h-[120px] w-full bg-blue-10" onMouseEnter={() => setHover(true)}>
      {hover ? (
        <YoutubeRatio url={url} ratio={ratio} start={start} end={end} />
      ) : (
        <ImageRatio
          src={getYoutubeThumbnail(url)}
          ratio={ratio}
          alt="Video Thumbnail"
          className="cursor-pointer object-contain"
          fill
          sizes="120px"
          // onClick={() => setIsOpen(true)}
          unoptimized
          // loader={({ src }) => src}
        />
      )}
    </div>
  )
}
