"use client"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { useState } from "react"
import ImageRatio from "./ImageRatio"
import YoutubeRatio from "./YoutubeRatio"
import ButtonYoutubePlay from "@/icons/Button_youtubePlay"

interface Params {
  url: string
  start?: number
  end?: number
  ratio?: number
}
export default function YoutubeThumbnailBoxWithHover({ url, start, end, ratio }: Params) {
  const [hover, setHover] = useState<boolean>(false)
  const [ready, setReady] = useState<boolean>(false)

  return (
    <figure
      className="relative h-full min-h-[120px] w-full bg-blue-10"
      onMouseEnter={() => setHover(true)}
      // style={{
      //   backgroundImage: `url(${getYoutubeThumbnail(url)})`,
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundOrigin: "border-box",
      //   backgroundSize: "cover"
      // }}
    >
      <>
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
        {!hover && <ButtonYoutubePlay />}
        {/* {!ready && <ButtonYoutubePlay />} */}
      </>

      {hover && (
        <YoutubeRatio url={url} ratio={ratio} start={start} end={end} ready={ready} onReady={() => setReady(true)} />
      )}
    </figure>
  )
}
