import GameThumbnailCardV2 from "@/components/gameThumbnailCardV2/GameThumbnailCardV2"
import SliderTitle from "@/components/slider/SliderTitle"
import SliderWrapper from "@/components/slider/SliderWrapper"
import { SwiperSlide } from "swiper/react"
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
      <SliderWrapper prevElId="weekly-trending-games-list-prev" nextElId="weekly-trending-games-list-next">
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide
            key={index}
            className="ms-[16px] !w-fit md:ms-[24px] md:last:mr-[24px] lg:!ms-0 lg:mr-[20px] lg:!w-fit lg:first:ms-0 lg:last:mr-[-14px]"
          >
            <GameThumbnailCardV2 src={"/images/Rookeys.png"} index={index} />
          </SwiperSlide>
        ))}
      </SliderWrapper>
    </section>
  )
}
