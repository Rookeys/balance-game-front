"use client"
import { Button } from "@/components/Button"
import useResizeHandler from "@/hooks/useResizeHandler"
import { SCREEN_SIZE } from "@/styles/theme/screenSize"
import dynamic from "next/dynamic"

const ImageRatio = dynamic(() => import("@/components/ImageRatio"))
const YoutubeRatio = dynamic(() => import("@/components/YoutubeRatio"))

interface Params {
  url: string
  type: "image" | "youtube"
  title: string
}
export default function SelectItemBox({ url, type, title }: Params) {
  const windowWidth = useResizeHandler()

  if (type === "image") {
    return (
      <div className="relative w-[50vw]">
        <ImageRatio
          src={url}
          alt={`${title}-thumbnail`}
          ratio={windowWidth > parseInt(SCREEN_SIZE.sm) ? 4 / 3 : 1 / 2}
          fill
          className="cursor-pointer"
          onClick={() => console.log("이미지 선택")}
        />
        <article className="absolute top-[30%] sm:top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] px-4 py-2 rounded-xsm pointer-events-none bg-dark/30 max-w-full">
          <p className="text-white break-words">{title}</p>
        </article>
        <Button className="bg-primary-10 w-full text-md opacity-0 cursor-default">선택하는 버튼</Button>
      </div>
    )
  }

  return (
    <div className="relative w-[50vw]">
      <YoutubeRatio
        url="https://www.youtube.com/watch?v=W3qIzaNndH4"
        ratio={windowWidth > parseInt(SCREEN_SIZE.sm) ? 4 / 3 : 1 / 2}
      />
      <article className="absolute top-[30%] sm:top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] px-4 py-2 rounded-xsm pointer-events-none bg-dark/30 max-w-full">
        <p className="text-white break-words">{title}</p>
      </article>
      <Button className="bg-primary-10 w-full text-md" onClick={() => console.log("유튜브 선택")}>
        선택하는 버튼
      </Button>
    </div>
  )
}
