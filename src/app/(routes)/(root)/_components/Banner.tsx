"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Pagination } from "swiper/modules"

export default function Banner() {
  return (
    <div className="h-full w-full px-[16px] md:px-[24px] lg:px-0">
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
          <SwiperSlide className="w-full" key={index}>
            <section className="flex h-full w-full max-w-[1200px] justify-self-center bg-red-10 pb-[112px] pt-[88px]">
              <article>{index + 1}</article>
            </section>
          </SwiperSlide>
        ))}
        <div
          id="banner-slider-pagination"
          className="absolute bottom-[40px] start-[calc(50%+600px)] z-[1] h-[32px] min-w-[60px] translate-x-[-100%] whitespace-nowrap rounded-full bg-blue-10 px-[12px] py-[4px] text-center"
        />
      </Swiper>
    </div>
  )
}
