"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import GameThumbnailCardV2 from "@/components/gameThumbnailV2/GameThumbnailCardV2"
export default function GameListV2() {
  return (
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
        prevEl: "#custom-GameList-prev",
        nextEl: "#custom-GameList-next"
      }}
    >
      {Array.from({ length: 10 }, (_, index) => (
        <SwiperSlide key={index} className="mr-[20px] !w-fit first:mr-[20px] last:mr-[2px]">
          {/* 1200px 레이아웃 오차값 계산을 위해 last:mr-[2px] 추가 */}
          <GameThumbnailCardV2 src={"/images/Rookeys.png"} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
