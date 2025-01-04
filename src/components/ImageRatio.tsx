import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import Image, { ImageProps } from "next/image"

interface Params extends ImageProps {
  ratio?: number
}

const ImageRatio = ({ ratio, ...props }: Params) => (
  <div className="RatioContainer bg-white dark:bg-night flex items-center justify-center h-full">
    <AspectRatio.Root ratio={ratio}>
      <Image {...props} alt={props.alt} />
    </AspectRatio.Root>
  </div>
)

export default ImageRatio
