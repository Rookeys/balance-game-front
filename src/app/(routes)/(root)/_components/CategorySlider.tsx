"use client"

import CategoryBox from "@/components/CategoryBox"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function CategorySlider() {
  return (
    <div className="mx-[-16px] md:mx-[-24px] lg:mx-0">
      <Swiper className="w-full" slidesPerView={"auto"}>
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide
            key={index}
            className="ms-[20px] !w-fit first:ms-[16px] last:mr-[16px] first:md:ms-[24px] last:md:mr-[24px] first:lg:ms-0 last:lg:mr-0"
          >
            <CategoryBox src={"/images/Rookeys.png"} alt="category" href="/" label="카테고리" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
