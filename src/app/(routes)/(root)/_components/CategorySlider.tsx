"use client"

import CategoryBox from "@/components/CategoryBox"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function CategorySlider() {
  return (
    <div className="mx-[-16px] md:mx-[-24px] lg:mx-0">
      <Swiper className="w-full" slidesPerView={"auto"} slidesOffsetAfter={16}>
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide
            key={index}
            className="ms-[16px] !w-fit md:ms-[24px] md:last:mr-[24px] lg:!ms-0 lg:mr-[20px] lg:first:ms-0 lg:last:mr-[-14px]"
          >
            <CategoryBox src={"/images/Rookeys.png"} alt="category" href="/" label="카테고리" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
