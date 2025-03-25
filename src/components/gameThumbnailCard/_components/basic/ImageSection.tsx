import { cn } from "@/utils/cn"
import Image from "next/image"

interface Params {
  src?: string
  index: number
  isBlind?: boolean
}

export default function ImageSection({ src, index, isBlind }: Params) {
  return (
    <article className="relative h-[218px] overflow-hidden rounded-[12px] bg-gray-10 md:h-[308px]">
      <Image
        src={src ?? "/"}
        className={cn("object-contain object-center", isBlind && "brightness-40 saturate-75 blur-2xl")}
        // className="object-cover object-center"
        alt="Game-Thumbnail"
        fill
        sizes="(max-width: 768px) 272px, 384px"
        placeholder="blur"
        blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
      />
      <div className="absolute start-0 top-0 rounded-br-[12px] rounded-tl-[12px] bg-gray-50 px-[16px] py-[4px]">
        {index + 1}
      </div>
    </article>
  )
}
