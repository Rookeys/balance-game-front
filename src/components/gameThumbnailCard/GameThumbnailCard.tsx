import { GameListResponse } from "@/api/orval/model/gameListResponse"
import ImageSection from "./_components/basic/ImageSection"
import MetaInfoSection from "./_components/common/MetaInfoSection"
import TitleSection from "./_components/common/TitleSection"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { GameListSelectionResponseType } from "@/api/orval/model/gameListSelectionResponseType"
import SocialActionSection from "./_components/common/SocialActionSection"
import Link from "next/link"

interface Params extends GameListResponse {
  index: number
}

export default function GameThumbnailCard({ index, ...props }: Params) {
  const { roomId, leftSelection, title, description, category, userResponse, totalPlayNums } = props

  return (
    <Link href={`/game/${roomId}`} className="flex w-[272px] flex-col gap-[12px] md:w-[384px]">
      <ImageSection
        src={
          leftSelection?.type === GameListSelectionResponseType.LINK
            ? getYoutubeThumbnail(leftSelection?.content)
            : leftSelection?.content
        }
        index={index}
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
