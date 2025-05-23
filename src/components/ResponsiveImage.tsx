import { cn } from "@/utils/cn"
import Image, { ImageProps } from "next/image"

interface ResponsiveImageProps extends Omit<ImageProps, "src"> {
  smSrc: ImageProps["src"]
  mdSrc: ImageProps["src"]
}

export default function ResponsiveImage({ smSrc, mdSrc, alt, className = "", ...props }: ResponsiveImageProps) {
  return (
    <>
      <Image src={smSrc} alt={`${alt}-sm`} className={cn("object-cover md:hidden", className)} {...props} />
      <Image src={mdSrc} alt={`${alt}-md`} className={cn("hidden object-cover md:block", className)} {...props} />
    </>
  )
}
