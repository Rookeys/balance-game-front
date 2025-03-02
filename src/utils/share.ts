import { copyClipBoard } from "@/utils/copyClipBoard"

export interface ShareAPIRequest {
  title: string
  text: string
  url: string
}

export const share = async ({ title, text, url }: ShareAPIRequest) => {
  const shareData = {
    title,
    text,
    url
  }

  try {
    await navigator.share(shareData)
  } catch {
    copyClipBoard(shareData.url)
  }
}
