import Image from "next/image"
import { useState } from "react"

interface Params {
  creatorNickname?: string
  creatorImage?: string
}

export default function MetaInfoSection({ creatorNickname, creatorImage }: Params) {
  const [errorFallbackURL, setErrorFallbackURL] = useState<string>()
  return (
    <article className="flex flex-col justify-between lg:flex-row">
      <div className="flex items-center gap-[4px]">
        <Image
          src={(errorFallbackURL || creatorImage) ?? "/"}
          width={24}
          height={24}
          className="h-[24px] w-[24px] rounded-full"
          alt="creator-image"
          // placeholder="blur"
          // blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
          onError={() => {
            setErrorFallbackURL("/images/Rookeys.png")
          }}
        />
        <p className="line-clamp-1 text-caption2-regular text-label-neutral md:text-label-regular">{creatorNickname}</p>
      </div>
      {/* 높이 390 -> 366 */}
      {/* <div className="flex items-center">
        <Play size={24} />
        <p>{totalPlayNums}</p>
      </div> */}
    </article>
  )
}
