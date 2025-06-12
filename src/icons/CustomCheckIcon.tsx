import Image, { ImageProps } from "next/image"

interface Params extends Omit<ImageProps, "src" | "alt"> {
  checked?: boolean
  checkedSrc?: ImageProps["src"]
  unCheckedSrc?: ImageProps["src"]
  alt?: string
}

export default function CustomCheckIcon({
  checked,
  checkedSrc = "/images/icons/system/checkbox_round_checked.webp",
  unCheckedSrc = "/images/icons/system/checkbox_round_default.webp",
  alt = "check-icon",
  ...props
}: Params) {
  return <Image src={checked ? checkedSrc : unCheckedSrc} alt={alt} {...props} />
}
