"use client"
import ModalWrapper from "@/components/modal/ModalWrapper"
import { getYouTubeId } from "@/utils/getYouTubeId"
import YouTube from "react-youtube"

interface Params {
  url: string
  onClose?: () => void
  overlayClose: boolean
  start?: number
  end?: number
}

export default function YoutubeModal({ url, onClose, overlayClose, start, end }: Params) {
  return (
    <ModalWrapper onClose={onClose} overlayClose={overlayClose}>
      <YouTube
        videoId={getYouTubeId(url)}
        opts={{ playerVars: { start, end } }}
        iframeClassName="w-[280px] xsm:w-[400px] lg:w-[600px] h-[300px] rounded-sm"
        className="z-[100]"
      />
    </ModalWrapper>
  )
}
