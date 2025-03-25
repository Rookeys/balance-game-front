import { cn } from "@/utils/cn"
import Image from "next/image"

interface Params {
  src?: string
  tag?: string
  isBlind?: boolean
}

export default function ImageSection({ src, tag, isBlind }: Params) {
  return (
    <article className="relative h-[146px] overflow-hidden rounded-[12px] bg-red-10 md:h-[226px]">
      <Image
        src={src ?? "/"}
        className={cn("object-contain object-center", isBlind && "brightness-40 saturate-75 blur-2xl")}
        // className="object-cover object-center"
        alt="Game-Thumbnail"
        fill
        sizes="(max-width: 768px) 182px, 282px"
        placeholder="blur"
        blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
      />
      {tag && <div className="absolute start-[12px] top-[12px] rounded-[4px] bg-gray-50 px-[8px] py-[4px]">{tag}</div>}
    </article>
  )
}
