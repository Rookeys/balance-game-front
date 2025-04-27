"use client"
import GameSliderWrapper from "@/components/slider/GameSliderWrapper"
import SliderTitle from "@/components/slider/SliderTitle"
import { SwiperSlide } from "swiper/react"
import CardSkeleton from "./CardSkeleton"

interface Params {
  title: string
  updateTime?: string
}

export default function SkeletonList({ title, updateTime }: Params) {
  return (
    <section className="flex h-[474px] w-full max-w-[1200px] flex-col gap-[12px] md:h-[580px] lg:h-[556px]">
      <SliderTitle title={title} updateTime={updateTime} />
      <GameSliderWrapper prevElId="skeleton-prev" nextElId="skeleton-next">
        {Array.from({ length: 3 }).map((_, index) => (
          <SwiperSlide
            key={index}
            className="ms-[16px] !w-fit last:mr-[16px] md:ms-[24px] last:md:mr-[24px] lg:mr-[24px] lg:ms-0 last:lg:mr-0"
          >
            <CardSkeleton key={index} className="w-[272px] md:w-[384px]" imageClassName="h-[218px] md:h-[308px]" />
          </SwiperSlide>
        ))}
      </GameSliderWrapper>
    </section>
  )
}
