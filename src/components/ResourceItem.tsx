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
  priority?: boolean
  wrapperClassName?: string
}

export default function ResourceItem({
  title = "",
  type = GameResourceResponseType.IMAGE,
  content = "",
  start,
  end,
  noDelay,
  priority,
  wrapperClassName
}: Params) {
  if (type === GameResourceResponseType.IMAGE) {
    return (
      <ImageRatio
        src={content}
        alt={`${title}-thumbnail`}
        fill
        wrapperClassName={wrapperClassName}
        priority={priority}
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
        noDelay={noDelay}
        wrapperClassName={wrapperClassName}
      />
    )
  }
}
