"use client"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"

const ImageModal = dynamic(() => import("@/components/modal/ImageModal"))

interface Params {
  url?: string
}
export default function ImageThumbnailBox({ url }: Params) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <figure className="relative h-full min-h-[120px] w-full bg-blue-100" onClick={() => setIsOpen(true)}>
        <Image src={url ?? "/"} alt="Image thumbnail" className="cursor-pointer object-contain" fill sizes="120px" />
      </figure>
      {isOpen && <ImageModal url={url} onClose={() => setIsOpen(false)} />}
    </>
  )
}
