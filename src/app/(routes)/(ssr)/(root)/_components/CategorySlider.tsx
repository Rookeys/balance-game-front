"use client"

import CategoryBox from "@/components/CategoryBox"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { categories } from "@/constants/categories"

export default function CategorySlider() {
  return (
    <div className="mx-[-16px] md:mx-[-24px] lg:mx-0">
      <Swiper className="w-full" slidesPerView={"auto"}>
        {categories.map((category, index) => (
          <SwiperSlide
            key={`${category}-${index}`}
            className="ms-[16px] !w-fit last:mr-[16px] md:ms-[24px] last:md:mr-[24px] lg:mr-[24px] lg:ms-0 last:lg:mr-0"
          >
            <CategoryBox
              src={`/images/categories/category${index + 1}.png`}
              alt={`${category.label}-image`}
              href={`/category/${category.value.toLocaleLowerCase()}`}
              label={category.label}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
