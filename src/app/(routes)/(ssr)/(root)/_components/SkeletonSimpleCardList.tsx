"use client"
import GameSliderWrapper from "@/components/slider/GameSliderWrapper"
import SliderTitle from "@/components/slider/SliderTitle"
import { SwiperSlide } from "swiper/react"
import CardSkeleton from "./CardSkeleton"

interface Params {
  title: string
  updateTime?: string
}

export default function SkeletonSimpleCardList({ title, updateTime }: Params) {
  return (
    <section className="flex h-[366px] w-full max-w-[1200px] flex-col gap-[12px] md:h-[486px] lg:h-[462px]">
      <SliderTitle title={title} updateTime={updateTime} />
      <GameSliderWrapper prevElId="skeleton-prev" nextElId="skeleton-next">
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="ms-[16px] h-full !w-fit last:mr-[16px] md:ms-[24px] last:md:mr-[24px] lg:mr-[24px] lg:ms-0 last:lg:mr-0"
          >
            <CardSkeleton key={index} className="w-[182px] md:w-[282px]" imageClassName="h-[146px] md:h-[226px]" />
          </SwiperSlide>
        ))}
      </GameSliderWrapper>
    </section>
  )
}
