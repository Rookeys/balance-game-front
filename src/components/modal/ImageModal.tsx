"use client"
import ImageRatio from "@/components/ImageRatio"
import ModalWrapper from "@/components/modal/ModalWrapper"

interface Params {
  url?: string
  onClose: () => void
}

export default function ImageModal({ url, onClose }: Params) {
  return (
    <ModalWrapper onClose={onClose} overlayClose>
      <div className="relative z-[100] w-[80vw] 2xsm:w-[300px] md:w-[600px]">
        <ImageRatio
          className="object-cover"
          ratio={1}
          src={url ?? "/"}
          alt={`thumbnail`}
          fill
          sizes="(max-width: 320px) 300px, (max-width: 768px) 80vw, 600px"
        />
      </div>
      ∏
    </ModalWrapper>
  )
}
