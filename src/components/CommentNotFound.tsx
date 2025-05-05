"use client"

import Image from "next/image"

export default function CommentNotFound() {
  return (
    <section className="flex w-full flex-col items-center py-[60px]">
      <Image src={"/images/Rookeys.png"} width={80} height={80} alt="not-found-thumbnail" />
      <p className="mb-[20px] mt-[12px] text-body2-regular text-label-neutral">아직 댓글이 없어요</p>
    </section>
  )
}
