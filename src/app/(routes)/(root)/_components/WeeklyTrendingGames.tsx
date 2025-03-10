"use client"
import SliderTitle from "@/components/slider/SliderTitle"
import GameSliderWrapper from "@/components/slider/GameSliderWrapper"
import { SwiperSlide } from "swiper/react"
import GameThumbnailCard from "@/components/gameThumbnailCard/GameThumbnailCard"
import "@/styles/navigation.css"

export default function WeeklyTrendingGames() {
  return (
    <section className="flex w-full max-w-[1200px] flex-col gap-[12px]">
      <SliderTitle
        title="주간 인기 월드컵 TOP 10"
        titleIcon="💥"
        prevElId="weekly-trending-games-list-prev"
        nextElId="weekly-trending-games-list-next"
      />
      <GameSliderWrapper prevElId="weekly-trending-games-list-prev" nextElId="weekly-trending-games-list-next">
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide
            key={index}
            className="ms-[16px] !w-fit md:ms-[24px] md:last:mr-[24px] lg:!ms-0 lg:mr-[20px] lg:first:ms-0 lg:last:mr-[-14px]"
          >
            <GameThumbnailCard src={"/images/Rookeys.png"} index={index} />
          </SwiperSlide>
        ))}
      </GameSliderWrapper>
    </section>
  )
}
