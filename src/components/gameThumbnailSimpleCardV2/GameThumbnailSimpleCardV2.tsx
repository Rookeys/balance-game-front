import { GameListResponse } from "@/api/orval/model/gameListResponse"
import ImageSection from "./_components/ImageSection"
import MetaInfoSection from "./_components/MetaInfoSection"
import SocialActionSection from "./_components/SocialActionSection"
import TitleSection from "./_components/TitleSection"

interface Params extends GameListResponse {
  src: string
  index: number
}

export default function GameThumbnailSimpleCardV2({ src, index, ...props }: Params) {
  // const { roomId, leftSelection, rightSelection, title, description, nickname } = props
  const {} = props

  return (
    <section className="flex w-[182px] flex-col gap-[16px] md:w-[285px]">
      <ImageSection src={src} index={index} />
      <SocialActionSection />
      <TitleSection />
      <MetaInfoSection />
    </section>
  )
}
