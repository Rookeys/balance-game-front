"use client"
import { Button } from "@/components/Button"
import dynamic from "next/dynamic"

const ImageRatio = dynamic(() => import("@/components/ImageRatio"))
const YoutubeRatio = dynamic(() => import("@/components/YoutubeRatio"))

interface Params {
  url: string
  type: "image" | "youtube"
}
export default function ThumbnailBox({ url, type }: Params) {
  if (type === "image") {
    return (
      <div>
        <ImageRatio src={url} alt={`item-thumbnail`} ratio={4 / 3} fill className="cursor-pointer" />
        <Button className="bg-primary-10 w-full text-md opacity-0 cursor-default">선택하는 버튼</Button>
      </div>
    )
  }

  return (
    <div>
      <YoutubeRatio url="https://www.youtube.com/watch?v=W3qIzaNndH4" ratio={4 / 3} />
    </div>
  )
}
