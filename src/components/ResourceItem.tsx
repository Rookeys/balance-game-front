import { GameResourceResponseType } from "@/api/orval/model/gameResourceResponseType"
import ImageRatio from "@/components/ImageRatio"
import YoutubeThumbnailBoxWithHover from "./YoutubeThumbnailBoxWithHover"

interface Params {
  title?: string
  type?: GameResourceResponseType
  content?: string
  start?: number
  end?: number
  ratio?: number
  noDelay?: boolean
  wrapperClassName?: string
}

export default function ResourceItem({
  title = "",
  type = GameResourceResponseType.IMAGE,
  content = "",
  start,
  end,
  ratio,
  noDelay,
  wrapperClassName
}: Params) {
  if (type === GameResourceResponseType.IMAGE) {
    return (
      <ImageRatio
        src={content}
        alt={`${title}-thumbnail`}
        ratio={ratio ?? 5 / 4}
        fill
        wrapperClassName={wrapperClassName}
      />
    )
  }
  if (type === GameResourceResponseType.LINK) {
    // return <YoutubeRatio url={content} ratio={4 / 3} />
    return (
      <YoutubeThumbnailBoxWithHover
        url={content}
        start={start}
        end={end}
        ratio={ratio ?? 16 / 9}
        noDelay={noDelay}
        wrapperClassName={wrapperClassName}
      />
    )
  }
}
