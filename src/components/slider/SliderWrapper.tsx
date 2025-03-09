"use client"

import { ReactNode } from "react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { Swiper } from "swiper/react"

interface Params {
  prevElId: string
  nextElId: string
  children: ReactNode
}

export default function SliderWrapper({ prevElId, nextElId, children }: Params) {
  return (
    <div className="mx-[-16px] md:mx-[-24px] lg:mx-0">
      <Swiper
        className="w-full"
        modules={[Navigation]}
        slidesPerView={"auto"}
        // pagination={{
        //   el: `#custom-GameList-pagination`,
        //   clickable: true,
        //   renderBullet: function (index, className) {
        //     return `<span class="${className} !bg-black !w-[4px] !h-[4px]"> </span>`
        //   }
        // }}
        navigation={{
          prevEl: `#${prevElId}`,
          nextEl: `#${nextElId}`
        }}
        slidesOffsetAfter={16}
      >
        {/* 1200px 레이아웃 오차값 계산을 위해 lg:last:mr-[2px] 추가 */}
        {/* {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide
            key={index}
            className="ms-[16px] !w-fit md:ms-[24px] md:last:mr-[24px] lg:!ms-0 lg:mr-[20px] lg:first:ms-0 lg:last:mr-[-14px]"
          >
            <GameThumbnailCard src={"/images/Rookeys.png"} index={index} />
          </SwiperSlide>
        ))} */}
        {children}
      </Swiper>
    </div>
  )
}
