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
  isMine?: boolean
}

export default function GameThumbnailSimpleCard({ tag, fixedSize = true, isMine = false, ...props }: Params) {
  const { roomId, leftSelection, title, description, categories, userResponse, totalPlayNums, existsBlind } = props

  return (
    <Link
      href={`/game/${roomId}`}
      className={cn("flex w-full flex-col gap-[8px]", fixedSize && "w-[182px] md:w-[282px]")}
    >
      <ImageSection
        src={
          leftSelection?.type === GameListSelectionResponseType.LINK
            ? getYoutubeThumbnail(leftSelection?.content)
            : leftSelection?.content
        }
        tag={tag}
        isBlind={existsBlind}
        totalPlayNums={totalPlayNums}
      />
      <SocialActionSection id={roomId} title={title} categories={categories} isMine={isMine} />
      <TitleSection title={title} description={description} />
      <MetaInfoSection creatorNickname={userResponse?.nickname} creatorImage={userResponse?.profileImageUrl} />
    </Link>
  )
}
