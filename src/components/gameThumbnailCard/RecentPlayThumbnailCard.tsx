import { GameListResponseCategoriesItem } from "@/api/orval/model/gameListResponseCategoriesItem"
import { RecentPlayListResponse } from "@/api/orval/model/recentPlayListResponse"
import { cn } from "@/utils/cn"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import SocialActionSection from "./_components/common/SocialActionSection"
import TitleSection from "./_components/common/TitleSection"
import ImageSection from "./_components/simple/_components/ImageSection"

interface Params extends RecentPlayListResponse {
  fixedSize?: boolean
}

export default function RecentPlayThumbnailCard({ fixedSize = true, ...props }: Params) {
  const { roomId, title, description, existsBlind, categories, thumbnailImageUrl, thumbnailLinkUrl, thumbnailType } =
    props

  const searchParams = useSearchParams()

  const type = (searchParams.get("tab") ?? "play") === "play" ? "played-game" : "created-game"

  return (
    <Link
      href={`/game/${roomId}`}
      className={cn("group flex w-full flex-col gap-[8px]", fixedSize && "w-[162px] md:w-[282px]")}
    >
      <ImageSection
        src={thumbnailType === "Link" ? getYoutubeThumbnail(thumbnailLinkUrl) : thumbnailImageUrl}
        isBlind={existsBlind}
        totalPlayNums={undefined}
      />
      <SocialActionSection
        id={roomId}
        title={title}
        categories={categories as unknown as GameListResponseCategoriesItem[]}
        isMine={true}
        type={type}
      />
      <TitleSection title={title} description={description} />
    </Link>
  )
}
