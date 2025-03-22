"use client"

import { ReactNode } from "react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { Swiper } from "swiper/react"

interface Params {
  prevElId?: string
  nextElId?: string
  children: ReactNode
}

export default function GameSliderWrapper({ prevElId, nextElId, children }: Params) {
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
      >
        {children}
      </Swiper>
    </div>
  )
}
