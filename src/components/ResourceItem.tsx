import { GameResourceResponseType } from "@/api/orval/model/gameResourceResponseType"
import ImageRatio from "@/components/ImageRatio"
import YoutubeRatio from "@/components/YoutubeRatio"

interface Params {
  title?: string
  type?: GameResourceResponseType
  content?: string
}

export default function ResourceItem({ title = "", type = GameResourceResponseType.IMAGE, content = "" }: Params) {
  if (type === GameResourceResponseType.IMAGE) {
    return <ImageRatio src={content} alt={`${title}-thumbnail`} ratio={4 / 3} fill className="cursor-pointer" />
  }
  if (type === GameResourceResponseType.LINK) {
    return <YoutubeRatio url={content} ratio={4 / 3} />
  }
}
