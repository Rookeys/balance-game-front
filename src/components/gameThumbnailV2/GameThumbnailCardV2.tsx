import { GameListResponse } from "@/api/orval/model/gameListResponse"
import { EllipsisVertical, Play } from "lucide-react"
import Image from "next/image"

interface Params extends GameListResponse {
  index: number
}

export default function GameThumbnailCardV2({ index, ...props }: Params) {
  // const { roomId, leftSelection, rightSelection, title, description, nickname } = props
  const {} = props

  return (
    <section className="flex w-full max-w-[272px] flex-col gap-[16px] md:max-w-[386px]">
      <article className="">
        <div className="relative h-[216px] overflow-hidden rounded-[12px] bg-gray-10 md:h-[308px]">
          <Image
            src={"/images/Rookeys.png"}
            // className="object-contain object-center"
            className="object-cover object-center"
            alt="Game-Thumbnail"
            fill
            sizes="(max-width: 768px) 272px, 386px"
            placeholder="blur"
            blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
          />
          <div className="absolute start-0 top-0 rounded-br-[12px] rounded-tl-[12px] bg-gray-50 px-[16px] py-[4px]">
            {index + 1}
          </div>
        </div>
      </article>
      <article className="flex items-center justify-between">
        <p className="rounded-[4px] bg-gray-30 px-[8px] py-[4px]">카테고리</p>
        <EllipsisVertical size={24} />
      </article>
      <article className="flex flex-col gap-[12px]">
        <p className="line-clamp-2">
          타이틀이 들어가는 영역입니다.타이틀이 들어가는 영역입니다.타이틀이 들어가는 영역입니다.타이틀이 들어가는
          영역입니다. 타이틀이 들어가는 영역입니다. 타이틀이 들어가는 영역입니다. 타이틀이 들어가는 영역입니다. 타이틀이
          들어가는 영역입니다. 타이틀이 들어가는 영역입니다. 타이틀이 들어가는 영역입니다. 타이틀이 들어가는 영역입니다.
        </p>
        <p className="line-clamp-2">
          간단한 설명이 들어가는 영역입니다. 최대 2줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 최대 2줄까지
          작성합니다.간단한 설명이 들어가는 영역입니다. 최대 2줄까지 작성합니다.간단한 설명이 들어가는 영역입니다. 최대
          2줄까지 작성합니다.간단한 설명이 들어가는 영역입니다. 최대 2줄까지 작성합니다.간단한 설명이 들어가는
          영역입니다. 최대 2줄까지 작성합니다.
        </p>
      </article>
      <article className="flex items-center justify-between">
        <div className="flex items-center gap-[4px]">
          <Image src={"/images/Rookeys.png"} width={24} height={24} className="rounded-full" alt="creator-profile" />
          <p>닉네임이들어갈영역입니다</p>
        </div>
        <div className="flex items-center">
          <Play size={24} />
          <p>9999</p>
        </div>
      </article>
    </section>
  )
}
