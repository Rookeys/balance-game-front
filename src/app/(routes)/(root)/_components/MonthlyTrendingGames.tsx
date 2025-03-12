"use client"
import SliderTitle from "@/components/slider/SliderTitle"
import GameSliderWrapper from "@/components/slider/GameSliderWrapper"
import { SwiperSlide } from "swiper/react"
import "@/styles/navigation.css"
import GameThumbnailCard from "@/components/gameThumbnailCard/GameThumbnailCard"

export default function MonthlyTrendingGames() {
  return (
    <section className="flex w-full max-w-[1200px] flex-col gap-[12px]">
      <SliderTitle
        title="월간 인기 월드컵 TOP 10"
        titleIcon="🕹️"
        prevElId="monthly-trending-games-list-prev"
        nextElId="monthly-trending-games-list-next"
      />
      <GameSliderWrapper prevElId="monthly-trending-games-list-prev" nextElId="monthly-trending-games-list-next">
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide
            key={index}
            className="ms-[16px] !w-fit last:mr-[16px] md:ms-[24px] last:md:mr-[24px] lg:mr-[24px] lg:ms-0 last:lg:mr-0"
          >
            <GameThumbnailCard src={"/images/Rookeys.png"} index={index} />
          </SwiperSlide>
        ))}
      </GameSliderWrapper>
    </section>
  )
}
