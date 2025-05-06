"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Pagination } from "swiper/modules"

export default function Banner() {
  return (
    <div className="h-full w-full">
      <Swiper
        className="relative h-[400px] w-full bg-gray-300"
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
            <section className="mx-auto flex h-full w-full max-w-[1200px] bg-primary-normal pb-[112px] pt-[88px]">
              <article className="flex flex-col gap-[24px]">
                <p className="font-sb-aggro-medium text-heading-3">짱픽 베타테스트에 오신것을 환영합니다!</p>
                <p className="text-body2-bold">
                  현재 계속 업데이트 중입니다. 따라서 데이터들은 주기적으로 초기화를 진행중입니다. 양해 부탁드립니다.
                  (5월 중순~말 정식출시 예정)
                </p>
              </article>
            </section>
          </SwiperSlide>
        ))}
        <div className="relative mx-auto max-w-[1200px]">
          <div
            id="banner-slider-pagination"
            className="absolute bottom-[40px] end-[16px] z-[1] h-[32px] min-w-[60px] whitespace-nowrap rounded-full bg-blue-100 px-[12px] py-[4px] text-center md:end-[24px] lg:end-0"
          />
        </div>
      </Swiper>
    </div>
  )
}
