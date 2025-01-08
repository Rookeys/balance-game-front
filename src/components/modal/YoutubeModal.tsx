"use client"
import ModalWrapper from "@/components/modal/ModalWrapper"
import YoutubeRatio from "@/components/YoutubeRatio"

interface Params {
  url: string
  onClose?: () => void
  overlayClose?: boolean
  start?: number
  end?: number
}

export default function YoutubeModal({ url, onClose, overlayClose = false, start, end }: Params) {
  return (
    <ModalWrapper onClose={onClose} overlayClose={overlayClose}>
      {/* <YouTube
        videoId={getYouTubeId(url)}
        opts={{ playerVars: { start, end } }}
        iframeClassName="w-[280px] xsm:w-[400px] lg:w-[600px] h-[300px] rounded-sm"
        className="z-[100]"
      /> */}
      <article className="w-[80vw] 2xsm:w-[300px] md:w-[600px] z-[100]">
        <YoutubeRatio ratio={16 / 9} url={url} start={start} end={end} />
      </article>
    </ModalWrapper>
  )
}
