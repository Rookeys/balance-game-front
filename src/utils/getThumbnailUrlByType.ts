import { getYoutubeThumbnail } from "./getYoutubeThumbnail"

interface Params {
  type?: "IMAGE" | "LINK"
  url?: string
}
export const getThumbnailUrlByType = ({ type, url }: Params) => {
  if (!url || !type) return "/"
  return type === "IMAGE" ? url : getYoutubeThumbnail(url)
}
