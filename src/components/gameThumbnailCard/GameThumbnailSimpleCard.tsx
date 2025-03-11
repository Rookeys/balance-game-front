import { GameListResponse } from "@/api/orval/model/gameListResponse"
import { cn } from "@/utils/cn"
import ImageSection from "./_components/simple/_components/ImageSection"
import SocialActionSection from "./_components/simple/_components/SocialActionSection"
import TitleSection from "./_components/simple/_components/TitleSection"
import MetaInfoSection from "./_components/common/MetaInfoSection"

interface Params extends GameListResponse {
  src: string
  tag?: string
  fixedSize?: boolean
}

export default function GameThumbnailSimpleCard({ src, tag, fixedSize = true, ...props }: Params) {
  // const { roomId, leftSelection, rightSelection, title, description, nickname } = props
  const {} = props

  return (
    <section className={cn("flex flex-col gap-[16px]", fixedSize && "w-[182px] md:w-[285px]")}>
      <ImageSection src={src} tag={tag} />
      <SocialActionSection />
      <TitleSection />
      <MetaInfoSection />
    </section>
  )
}
