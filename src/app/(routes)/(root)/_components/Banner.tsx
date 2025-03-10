"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Pagination } from "swiper/modules"

export default function Banner() {
  return (
    <div className="h-full w-full">
      <Swiper
        className="relative h-[400px] w-full bg-gray-30"
        modules={[Pagination]}
        loop
        pagination={{
          type: "fraction",
          el: `#banner-slider-pagination`,
          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass} text-white"></span> 
              <span class="text-[#8C9196]">/</span> 
              <span class="${totalClass} text-[#8C9196]"></span>`
          }
        }}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <SwiperSlide className="w-full px-[16px] md:px-[24px] lg:px-0" key={index}>
            <section className="flex h-full w-full max-w-[1200px] bg-red-10 pb-[112px] pt-[88px] lg:mx-auto">
              <article>{index + 1}</article>
            </section>
          </SwiperSlide>
        ))}
        <div className="relative mx-auto max-w-[1200px]">
          <div
            id="banner-slider-pagination"
            className="absolute bottom-[40px] end-[16px] z-[1] h-[32px] min-w-[60px] whitespace-nowrap rounded-full bg-blue-10 px-[12px] py-[4px] text-center md:end-[24px] lg:end-0"
          />
        </div>
      </Swiper>
    </div>
  )
}
