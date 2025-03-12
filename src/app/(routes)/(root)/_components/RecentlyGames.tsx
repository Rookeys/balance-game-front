"use client"
import SliderTitle from "@/components/slider/SliderTitle"
import GameSliderWrapper from "@/components/slider/GameSliderWrapper"
import { SwiperSlide } from "swiper/react"
import "@/styles/navigation.css"
import GameThumbnailSimpleCard from "@/components/gameThumbnailCard/GameThumbnailSimpleCard"
import { useGetMainGameList } from "@/api/orval/client/main-page-controller/main-page-controller"
import { GetMainGameListSortType } from "@/api/orval/model/getMainGameListSortType"

export default function RecentlyGames() {
  const { data } = useGetMainGameList({ size: 10, sortType: GetMainGameListSortType.recent })
  console.log("data", data)

  return (
    <section className="flex w-full max-w-[1200px] flex-col gap-[12px]">
      <SliderTitle
        title="최근 등록된 이상형 월드컵"
        titleIcon="✨"
        prevElId="recently-games-list-prev"
        nextElId="recently-games-list-next"
      />
      <GameSliderWrapper prevElId="recently-games-list-prev" nextElId="recently-games-list-next">
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide
            key={index}
            className="ms-[16px] !w-fit last:mr-[16px] md:ms-[24px] last:md:mr-[24px] lg:mr-[24px] lg:ms-0 last:lg:mr-0"
          >
            <GameThumbnailSimpleCard src={"/images/Rookeys.png"} tag="New" />
          </SwiperSlide>
        ))}
      </GameSliderWrapper>
    </section>
  )
}
