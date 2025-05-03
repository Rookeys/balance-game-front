"use client"

import Image from "next/image"

interface Params {
  keyword?: string | null
}

export default function ResourceNotFound({ keyword }: Params) {
  return (
    <section className="flex w-full flex-col items-center bg-fill-normal py-[60px]">
      <Image src={"/images/Rookeys.png"} width={80} height={80} alt="not-found-thumbnail" />
      <p className="mb-[20px] mt-[12px] text-body2-regular text-label-neutral">
        <span className="text-primary-hover">{keyword ?? ""}</span>에 해당하는 콘텐츠를 찾지 못했어요
      </p>
    </section>
  )
}
