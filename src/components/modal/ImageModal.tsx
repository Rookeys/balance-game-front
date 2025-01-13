"use client"
import ImageRatio from "@/components/ImageRatio"
import ModalWrapper from "@/components/modal/ModalWrapper"

interface Params {
  url: string
  onClose: () => void
}

export default function ImageModal({ url, onClose }: Params) {
  return (
    <ModalWrapper onClose={onClose} overlayClose>
      <div className="relative w-[80vw] 2xsm:w-[300px] md:w-[600px] z-[100]">
        <ImageRatio
          className="object-cover"
          ratio={1}
          src={url}
          alt={`thumbnail`}
          fill
          sizes="(max-width: 320px) 300px, (max-width: 768px) 80vw, 600px"
        />
      </div>
      ∏
    </ModalWrapper>
  )
}
