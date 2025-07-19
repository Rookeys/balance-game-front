import { cn } from "@/utils/cn"
import Image, { ImageProps } from "next/image"

interface Params extends ImageProps {
  wrapperClassName?: string
}

const ImageRatio = ({ wrapperClassName, ...props }: Params) => (
  <div
    className={cn("RatioContainer relative flex h-full items-center justify-center overflow-hidden", wrapperClassName)}
  >
    <Image
      {...props}
      src={props.src || "/"}
      alt={props.alt}
      className={cn("bg-background object-contain", props.className)}
    />
  </div>
)

export default ImageRatio
