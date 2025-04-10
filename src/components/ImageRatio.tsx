import { cn } from "@/utils/cn"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import Image, { ImageProps } from "next/image"

interface Params extends ImageProps {
  ratio?: number
}

const ImageRatio = ({ ratio, ...props }: Params) => (
  <div className="RatioContainer flex h-full items-center justify-center bg-white dark:bg-night">
    <AspectRatio.Root ratio={ratio}>
      <Image {...props} src={props.src || "/"} alt={props.alt} className={cn("object-contain", props.className)} />
    </AspectRatio.Root>
  </div>
)

export default ImageRatio
