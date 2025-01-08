"use client"
import ImageThumbnailBox from "./ImageThumbnailBox"
import YoutubeThumbnailBox from "./YoutubeThumbnailBox"

interface Params {
  url: string
  type: "image" | "youtube"
}
export default function ThumbnailBox({ url, type }: Params) {
  if (type === "image") {
    return <ImageThumbnailBox url={url} />
  }

  return <YoutubeThumbnailBox url={url} />
}
