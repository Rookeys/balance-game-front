"use client"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { useEffect, useState } from "react"
import ImageRatio from "./ImageRatio"
import YoutubeRatio from "./YoutubeRatio"
import ButtonYoutubePlay from "@/icons/Button_youtubePlay"
import { cn } from "@/utils/cn"

interface Params {
  url: string
  start?: number
  end?: number
  ratio?: number
  noDelay?: boolean
  wrapperClassName?: string
}
export default function YoutubeThumbnailBoxWithHover({
  url,
  start,
  end,
  ratio,
  noDelay = false,
  wrapperClassName
}: Params) {
  const [hover, setHover] = useState<boolean>(false)
  const [ready, setReady] = useState<boolean>(false)

  useEffect(() => {
    if (noDelay) {
      setHover(true)
    }
  }, [noDelay])

  return (
    <figure
      className={cn(
        "relative h-full min-h-[120px] w-full overflow-hidden rounded-[16px] bg-fill-normal",
        wrapperClassName
      )}
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
          className="cursor-pointer object-cover"
          wrapperClassName={wrapperClassName}
          fill
          sizes="120px"
          // onClick={() => setIsOpen(true)}
          unoptimized
          // loader={({ src }) => src}
        />
        {!hover && !noDelay && <ButtonYoutubePlay />}
        {/* {!ready && <ButtonYoutubePlay />} */}
      </>

      {hover && (
        <YoutubeRatio url={url} ratio={ratio} start={start} end={end} ready={ready} onReady={() => setReady(true)} />
      )}
    </figure>
  )
}
