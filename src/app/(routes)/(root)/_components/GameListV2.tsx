"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import GameThumbnailCardV2 from "@/components/gameThumbnailCardV2/GameThumbnailCardV2"
export default function GameListV2() {
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
          prevEl: "#custom-GameList-prev",
          nextEl: "#custom-GameList-next"
        }}
        slidesOffsetAfter={16}
      >
        {Array.from({ length: 10 }, (_, index) => (
          //
          // ms-[16px] !w-fit lg:first:ms-0
          // mr-[20px] !w-fit last:mr-[-14px]
          <SwiperSlide
            key={index}
            className="ms-[16px] !w-fit md:ms-[24px] md:last:mr-[24px] lg:!ms-0 lg:mr-[20px] lg:!w-fit lg:first:ms-0 lg:last:mr-[-14px]"
          >
            {/* 1200px 레이아웃 오차값 계산을 위해 lg:last:mr-[2px] 추가 */}
            <GameThumbnailCardV2 src={"/images/Rookeys.png"} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
