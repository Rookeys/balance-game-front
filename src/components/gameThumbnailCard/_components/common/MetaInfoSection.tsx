import Image from "next/image"

interface Params {
  creatorNickname?: string
  creatorImage?: string
}

export default function MetaInfoSection({ creatorNickname, creatorImage }: Params) {
  return (
    <article className="flex flex-col justify-between lg:flex-row">
      <div className="flex items-center gap-[4px]">
        <Image
          src={creatorImage ?? "/images/Rookeys.png"}
          width={24}
          height={24}
          className="h-[24px] w-[24px] rounded-full"
          alt="creator-image"
          // placeholder="blur"
          // blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
        />
        <p className="line-clamp-1 text-caption1-regular text-label-neutral">{creatorNickname}</p>
      </div>
      {/* 높이 390 -> 366 */}
      {/* <div className="flex items-center">
        <Play size={24} />
        <p>{totalPlayNums}</p>
      </div> */}
    </article>
  )
}
