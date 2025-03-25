"use client"
import { Button } from "@/components/Button"
import { cn } from "@/utils/cn"
import { Eye, EyeClosed } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Params {
  src?: string
  index: number
  isBlind?: boolean
}

export default function ImageSection({ src, index, isBlind = false }: Params) {
  const [blur, setBlur] = useState<boolean>(isBlind)
  return (
    <article className="relative h-[218px] overflow-hidden rounded-[12px] bg-gray-10 md:h-[308px]">
      <Image
        src={src ?? "/"}
        className={cn("object-contain object-center", blur && "brightness-40 saturate-75 blur-2xl")}
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
      {isBlind && (
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
