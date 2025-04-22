"use client"
import SliderTitle from "@/components/slider/SliderTitle"
import GameSliderWrapper from "@/components/slider/GameSliderWrapper"
import { SwiperSlide } from "swiper/react"
import "@/styles/navigation.css"
import GameThumbnailSimpleCard from "@/components/gameThumbnailCard/GameThumbnailSimpleCard"
import { useGetMainGameList } from "@/api/orval/client/main-page-controller/main-page-controller"
import { GetMainGameListSortType } from "@/api/orval/model/getMainGameListSortType"
import { GameListResponse } from "@/api/orval/model/gameListResponse"

export default function RecentlyGames() {
  const { data } = useGetMainGameList({ size: 10, sortType: GetMainGameListSortType.RECENT })

  const checkTag = (game: GameListResponse) => {
    if (game?.weekPlayNums && game?.weekPlayNums >= 5) {
      return "HOT"
    }

    if (game.createdAt) {
      const createdAt = new Date(game.createdAt)
      const now = new Date()
      const oneDayInMs = 24 * 60 * 60 * 1000 // 하루(24시간)

      if (now.getTime() - createdAt.getTime() < oneDayInMs) {
        return "NEW"
      }
    }

    return ""
  }

  return (
    <section className="flex h-[366px] w-full max-w-[1200px] flex-col gap-[12px] md:h-[486px] lg:h-[462px]">
      <SliderTitle
        title="최근 등록된 이상형 월드컵"
        titleIcon="✨"
        prevElId="recently-games-list-prev"
        nextElId="recently-games-list-next"
      />
      <GameSliderWrapper prevElId="recently-games-list-prev" nextElId="recently-games-list-next">
        {data?.content?.map((game, index) => (
          <SwiperSlide
            key={index}
            className="ms-[16px] !w-fit last:mr-[16px] md:ms-[24px] last:md:mr-[24px] lg:mr-[24px] lg:ms-0 last:lg:mr-0"
          >
            <GameThumbnailSimpleCard tag={checkTag(game)} {...game} />
          </SwiperSlide>
        ))}
      </GameSliderWrapper>
    </section>
  )
}
