"use client"
import { Button } from "@/components/Button"
import { CookieContext } from "@/lib/providers/CookieProvider"
import { COLORS } from "@/styles/theme/colors"
import { cn } from "@/utils/cn"
import { Eye, EyeClosed } from "lucide-react"
import Image from "next/image"
import { useContext, useState } from "react"

interface Params {
  src?: string
  index: number
  isBlind?: boolean
  totalPlayNums?: number
}

export default function ImageSection({ src, index, isBlind = false, totalPlayNums }: Params) {
  const [blur, setBlur] = useState<boolean>(isBlind)
  const { noBlind } = useContext(CookieContext)
  return (
    <article className="relative h-[218px] overflow-hidden rounded-[12px] md:h-[308px]">
      <Image
        src={src ?? "/"}
        className={cn(
          "object-cover object-center transition-transform duration-300 group-hover:scale-110",
          !noBlind && blur && "brightness-40 saturate-75 blur-2xl"
        )}
        // className="object-cover object-center"
        alt="Game-Thumbnail"
        fill
        sizes="(max-width: 768px) 272px, 384px"
        placeholder="blur"
        blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
      />
      {/* 그라데이션 적용 */}
      <div className="absolute top-0 h-[52px] w-full bg-gradient-to-b from-[#1515174D] from-0% via-[#15151700] via-70% to-[#15151700] to-100% md:h-[88px]" />
      <div className="absolute bottom-[8px] start-[12px] rounded-[4px] bg-dimmer-normal p-[4px] text-caption2-medium text-white md:text-label-medium">
        <div className="flex items-center gap-[4px]">
          <Image src={"/images/icons/system/play.webp"} width={16} height={16} alt="play" />
          <p>{totalPlayNums}</p>
        </div>
      </div>
      <div className="absolute start-0 top-0 rounded-br-[12px] rounded-tl-[12px] bg-primary-normal px-[16px] py-[8px] text-label-bold text-white md:text-body2-bold">
        {index + 1}
      </div>
      {!noBlind && isBlind && (
        <Button
          className="absolute end-[12px] top-[12px] rounded-[4px] bg-transparent px-[8px] py-[4px] text-label-medium"
          variant="custom"
          onClick={(e) => {
            e.preventDefault()
            setBlur((prev) => !prev)
          }}
        >
          {blur ? <EyeClosed stroke={COLORS.WHITE} /> : <Eye stroke={COLORS.WHITE} />}
        </Button>
      )}
    </article>
  )
}
