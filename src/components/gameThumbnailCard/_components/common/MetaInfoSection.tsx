import { Play } from "lucide-react"
import Image from "next/image"

interface Params {
  creatorNickname?: string
  creatorImage?: string
  totalPlayNums?: number
}

export default function MetaInfoSection({ creatorNickname, creatorImage, totalPlayNums }: Params) {
  return (
    <article className="flex flex-col justify-between lg:flex-row">
      <div className="flex items-center gap-[4px]">
        <Image
          src={creatorImage ?? "/images/Rookeys.png"}
          width={24}
          height={24}
          className="rounded-full"
          alt="creator-image"
          placeholder="blur"
          blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
        />
        <p className="line-clamp-1">{creatorNickname}</p>
      </div>
      <div className="flex items-center">
        <Play size={24} />
        <p>{totalPlayNums}</p>
      </div>
    </article>
  )
}
