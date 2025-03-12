import { GameListResponse } from "@/api/orval/model/gameListResponse"
import ImageSection from "./_components/basic/ImageSection"
import MetaInfoSection from "./_components/common/MetaInfoSection"
import SocialActionSection from "./_components/basic/SocialActionSection"
import TitleSection from "./_components/basic/TitleSection"

interface Params extends GameListResponse {
  src: string
  index: number
}

export default function GameThumbnailCard({ src, index, ...props }: Params) {
  // const { roomId, leftSelection, rightSelection, title, description, nickname } = props
  const {} = props

  return (
    <section className="flex w-[272px] flex-col gap-[16px] md:w-[386px]">
      {/* lg:w-[384px] */}
      <ImageSection src={src} index={index} />
      <SocialActionSection />
      <TitleSection />
      <MetaInfoSection />
    </section>
  )
}
