import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"

const ImageModal = dynamic(() => import("@/components/modal/ImageModal"))

interface Params {
  url: string
}
export default function ImageThumbnailBox({ url }: Params) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div className="w-full h-[100px] relative" onClick={() => setIsOpen(true)}>
        <Image src={url} alt="Image thumbnail" className="cursor-pointer" fill sizes="100px" />
      </div>
      {isOpen && <ImageModal url={url} onClose={() => setIsOpen(false)} />}
    </>
  )
}
