"use client"
import { Button } from "@/components/Button"
import { CookieContext } from "@/lib/providers/CookieProvider"
import { cn } from "@/utils/cn"
import { Eye, EyeClosed, Play } from "lucide-react"
import Image from "next/image"
import { useContext, useState } from "react"

interface Params {
  src?: string
  tag?: string
  isBlind?: boolean
  totalPlayNums?: number
}

export default function ImageSection({ src, tag, isBlind = false, totalPlayNums }: Params) {
  const [blur, setBlur] = useState<boolean>(isBlind)
  const { noBlind } = useContext(CookieContext)
  return (
    <article className="relative h-[146px] overflow-hidden rounded-[12px] bg-red-100 md:h-[226px]">
      <Image
        src={src ?? "/"}
        className={cn("object-contain object-center", !noBlind && blur && "brightness-40 saturate-75 blur-2xl")}
        // className="object-cover object-center"
        alt="Game-Thumbnail"
        fill
        sizes="(max-width: 768px) 182px, 282px"
        placeholder="blur"
        blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
      />
      <div className="absolute bottom-[8px] start-[12px] rounded-[4px] bg-black/40 p-[4px] text-white">
        <div className="flex items-center">
          <Play size={24} />
          <p>{totalPlayNums}</p>
        </div>
      </div>
      {tag && <div className="absolute start-[12px] top-[12px] rounded-[4px] bg-gray-50 px-[8px] py-[4px]">{tag}</div>}
      {!noBlind && isBlind && (
        <Button
          className="absolute end-[12px] top-[12px] rounded-[4px] bg-gray-50 px-[8px] py-[4px]"
          onClick={(e) => {
            e.preventDefault()
            setBlur((prev) => !prev)
          }}
        >
          {blur ? <EyeClosed /> : <Eye />}
        </Button>
      )}
    </article>
  )
}
