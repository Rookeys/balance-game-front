import { GameListResponse } from "@/api/orval/model/gameListResponse"
import { cn } from "@/utils/cn"
import ImageSection from "./_components/simple/_components/ImageSection"
import TitleSection from "./_components/simple/_components/TitleSection"
import MetaInfoSection from "./_components/common/MetaInfoSection"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { GameListSelectionResponseType } from "@/api/orval/model/gameListSelectionResponseType"
import SocialActionSection from "./_components/common/SocialActionSection"

interface Params extends GameListResponse {
  tag?: string
  fixedSize?: boolean
}

export default function GameThumbnailSimpleCard({ tag, fixedSize = true, ...props }: Params) {
  const { roomId, leftSelection, title, category, userResponse, totalPlayNums } = props

  return (
    <section className={cn("flex flex-col gap-[16px]", fixedSize && "w-[182px] md:w-[285px]")}>
      <ImageSection
        src={
          leftSelection?.type === GameListSelectionResponseType.LINK
            ? getYoutubeThumbnail(leftSelection?.content)
            : leftSelection?.content
        }
        tag={tag}
      />
      <SocialActionSection id={roomId} category={category} />
      <TitleSection title={title} />
      <MetaInfoSection
        creatorNickname={userResponse?.nickname}
        creatorImage={userResponse?.profileImageUrl}
        totalPlayNums={totalPlayNums}
      />
    </section>
  )
}
