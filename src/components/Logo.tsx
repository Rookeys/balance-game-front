"use client"
import Image from "next/image"

interface Params {
  "aria-label"?: string
  onClick?: () => void
}
export default function Logo({ "aria-label": ariaLabel = "logo", onClick }: Params) {
  return (
    <div className="relative h-[24px] w-[62px]">
      <Image
        priority
        src={"/images/zznpk_logo_color.webp"}
        alt="logo"
        fill
        aria-label={ariaLabel}
        onClick={onClick}
        className="cursor-pointer object-contain"
      />
    </div>
  )
}
