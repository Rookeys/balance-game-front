import { GameListResponse } from "@/api/orval/model/gameListResponse"
import { cn } from "@/utils/cn"
import ImageSection from "./_components/simple/_components/ImageSection"
import MetaInfoSection from "./_components/common/MetaInfoSection"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { GameListSelectionResponseType } from "@/api/orval/model/gameListSelectionResponseType"
import SocialActionSection from "./_components/common/SocialActionSection"
import Link from "next/link"
import TitleSection from "./_components/common/TitleSection"

interface Params extends GameListResponse {
  tag?: string
  fixedSize?: boolean
}

export default function GameThumbnailSimpleCard({ tag, fixedSize = true, ...props }: Params) {
  const { roomId, leftSelection, title, description, category, userResponse, totalPlayNums } = props

  return (
    <Link href={`/game/${roomId}`} className={cn("flex flex-col gap-[8px]", fixedSize && "w-[182px] md:w-[282px]")}>
      <ImageSection
        src={
          leftSelection?.type === GameListSelectionResponseType.LINK
            ? getYoutubeThumbnail(leftSelection?.content)
            : leftSelection?.content
        }
        tag={tag}
      />
      <SocialActionSection id={roomId} title={title} category={category} />
      <TitleSection title={title} description={description} />
      <MetaInfoSection
        creatorNickname={userResponse?.nickname}
        creatorImage={userResponse?.profileImageUrl}
        totalPlayNums={totalPlayNums}
      />
    </Link>
  )
}
