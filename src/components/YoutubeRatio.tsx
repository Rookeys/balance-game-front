import { getYouTubeId } from "@/utils/getYouTubeId"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import YouTube from "react-youtube"

interface Params {
  ratio?: number
  url: string
  start?: number
  end?: number
}

const YoutubeRatio = ({ ratio, url, start, end }: Params) => (
  <div className="RatioContainer bg-white dark:bg-night">
    <AspectRatio.Root ratio={ratio}>
      <YouTube
        videoId={getYouTubeId(url)}
        opts={{ playerVars: { start, end } }}
        className="w-full h-full"
        iframeClassName="w-full h-full"
      />
    </AspectRatio.Root>
  </div>
)

export default YoutubeRatio
