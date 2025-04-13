import { cn } from "@/utils/cn"
import { getYouTubeId } from "@/utils/getYouTubeId"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import YouTube from "react-youtube"

interface Params {
  ratio?: number
  url?: string
  start?: number
  end?: number
  ready?: boolean
  onReady?: () => void
}

const YoutubeRatio = ({ ratio, url, start, end, ready, onReady }: Params) => (
  <div
    className={cn(
      "RatioContainer absolute inset-0 h-full w-full bg-white transition-opacity duration-300 dark:bg-night",
      ready ? "opacity-100" : "pointer-events-none opacity-0"
    )}
  >
    <AspectRatio.Root ratio={ratio}>
      <YouTube
        videoId={getYouTubeId(url)}
        opts={{ playerVars: { start, end } }}
        // opts={{ playerVars: { start, end, loop: 1, playlist: getYouTubeId(url) } }}
        className="h-full w-full"
        iframeClassName="w-full h-full"
        onReady={onReady}
      />
    </AspectRatio.Root>
  </div>
)

export default YoutubeRatio
