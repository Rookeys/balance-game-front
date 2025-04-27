"use client"
import { useGetMainGameList } from "@/api/orval/client/main-page-controller/main-page-controller"
import { GetMainGameListSortType } from "@/api/orval/model/getMainGameListSortType"
import GameThumbnailCard from "@/components/gameThumbnailCard/GameThumbnailCard"
import GameSliderWrapper from "@/components/slider/GameSliderWrapper"
import SliderTitle from "@/components/slider/SliderTitle"
import "@/styles/navigation.css"
import { SwiperSlide } from "swiper/react"

export default function WeeklyTrendingGames() {
  const { data } = useGetMainGameList({ size: 10, sortType: GetMainGameListSortType.WEEK })
  return (
    <section className="flex h-[474px] w-full max-w-[1200px] flex-col gap-[12px] md:h-[580px] lg:h-[556px]">
      <SliderTitle
        title="주간 인기 월드컵 TOP 10"
        updateTime={"5분"}
        prevElId="weekly-trending-games-list-prev"
        nextElId="weekly-trending-games-list-next"
      />
      <GameSliderWrapper prevElId="weekly-trending-games-list-prev" nextElId="weekly-trending-games-list-next">
        {data?.content?.map((game, index) => (
          <SwiperSlide
            key={index}
            className="ms-[16px] !w-fit last:mr-[16px] md:ms-[24px] last:md:mr-[24px] lg:mr-[24px] lg:ms-0 last:lg:mr-0"
          >
            <GameThumbnailCard index={index} {...game} />
          </SwiperSlide>
        ))}
        {/* {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide
            key={index}
            className="ms-[16px] !w-fit last:mr-[16px] md:ms-[24px] last:md:mr-[24px] lg:mr-[24px] lg:ms-0 last:lg:mr-0"
          >
            <GameThumbnailCard src={"/images/Rookeys.png"} index={index} />
          </SwiperSlide>
        ))} */}
      </GameSliderWrapper>
    </section>
  )
}
