import SliderTitle from "@/components/slider/SliderTitle"
import SliderWrapper from "@/components/slider/SliderWrapper"
import { SwiperSlide } from "swiper/react"
import "@/styles/navigation.css"
import GameThumbnailSimpleCard from "@/components/gameThumbnailSimpleCard/GameThumbnailSimpleCard"

export default function RecentlyGames() {
  return (
    <section className="flex w-full max-w-[1200px] flex-col gap-[12px]">
      <SliderTitle
        title="최근 등록된 이상형 월드컵"
        titleIcon="✨"
        prevElId="recently-games-list-prev"
        nextElId="recently-games-list-next"
      />
      <SliderWrapper prevElId="recently-games-list-prev" nextElId="recently-games-list-next">
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide
            key={index}
            className="ms-[16px] !w-fit md:ms-[24px] md:last:mr-[24px] lg:!ms-0 lg:mr-[20px] lg:!w-fit lg:first:ms-0 lg:last:mr-[-14px]"
          >
            <GameThumbnailSimpleCard src={"/images/Rookeys.png"} tag="New" />
          </SwiperSlide>
        ))}
      </SliderWrapper>
    </section>
  )
}
