"use client"

import ResponsiveImage from "@/components/ResponsiveImage"
import { banner } from "@/constants/banner"
import "swiper/css"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { LinkWrapper } from "./LinkWrapper"

export default function Banner() {
  return (
    <div className="h-full w-full">
      <Swiper
        className="relative h-[400px] w-full"
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000
        }}
        loop
        pagination={{
          type: "fraction",
          el: `#banner-slider-pagination`,
          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass} text-white"></span> 
              <span class="text-label-disable">/</span> 
              <span class="${totalClass} text-label-disable"></span>`
          }
        }}
      >
        {banner.map(({ src, mdSrc, title, description, link }, index) => (
          <SwiperSlide className="w-full lg:px-0" key={index}>
            <LinkWrapper
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mx-auto flex h-full w-full max-w-[1200px] overflow-hidden bg-primary-normal px-[16px] py-[24px] md:px-[24px] md:py-[40px] lg:rounded-[20px]"
            >
              <ResponsiveImage smSrc={src} mdSrc={mdSrc} alt={title} fill />
              <section className="z-[1] flex flex-col justify-end gap-[8px] pe-[80px]">
                <p className="text-label-medium text-fill-normal md:text-body2-medium">{title}</p>
                <p className="whitespace-pre-line font-sb-aggro-medium text-heading-4 text-background md:text-heading-1">
                  {description}
                </p>
              </section>
            </LinkWrapper>
          </SwiperSlide>
        ))}
        <div className="relative mx-auto max-w-[1200px]">
          <div
            id="banner-slider-pagination"
            className="absolute bottom-[40px] end-[16px] z-[1] flex h-[32px] min-w-[60px] items-center justify-center gap-[4px] whitespace-nowrap rounded-full bg-dimmer-normal px-[12px] py-[4px] text-center text-label-bold md:end-[24px] md:px-[16px] md:text-body2-bold"
          />
        </div>
      </Swiper>
    </div>
  )
}
