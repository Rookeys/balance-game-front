"use client"
import Image from "next/image"

interface Params {
  size?: number
  "aria-label"?: string
  onClick?: () => void
}
export default function Logo({ size = 40, "aria-label": ariaLabel = "logo", onClick }: Params) {
  return (
    <Image
      priority
      width={size}
      height={size}
      src={"/images/Rookeys.png"}
      alt="logo"
      aria-label={ariaLabel}
      onClick={onClick}
      className="cursor-pointer"
    />
  )
}
