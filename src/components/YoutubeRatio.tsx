import { cn } from "@/utils/cn"
import { getYouTubeId } from "@/utils/getYouTubeId"
import YouTube from "react-youtube"

interface Params {
  url?: string
  start?: number
  end?: number
  ready?: boolean
  onReady?: () => void
  wrapperClassName?: string
}

const YoutubeRatio = ({ url, start, end, ready, onReady, wrapperClassName }: Params) => (
  <div
    className={cn(
      "RatioContainer absolute inset-0 h-full w-full bg-gray-100 transition-opacity duration-300",
      ready ? "opacity-100" : "pointer-events-none opacity-0",
      wrapperClassName
    )}
  >
    <YouTube
      videoId={getYouTubeId(url)}
      opts={{ playerVars: { start, end } }}
      // opts={{ playerVars: { start, end, loop: 1, playlist: getYouTubeId(url) } }}
      className="h-full w-full"
      iframeClassName="w-full h-full"
      onReady={onReady}
    />
  </div>
)

export default YoutubeRatio
