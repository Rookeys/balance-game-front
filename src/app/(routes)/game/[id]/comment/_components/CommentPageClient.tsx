"use client"

import Filter from "@/components/Filter"
import InputText from "@/components/form/inputText/InputText"
import PlayNowAndRankingSideBar from "@/components/sidebar/PlayNowAndRankingSideBar"
import { commentListFilters } from "@/constants/filters"
import CommentItem from "./CommentItem"
import GameInformation from "./GameInformation"

export default function CommentPageClient() {
  return (
    <section className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0">
      <section className="flex w-full flex-col gap-[28px] md:gap-[60px]">
        <GameInformation />
        <article className="flex items-center justify-between">
          <p>전체댓글 00</p>
          <Filter filters={commentListFilters} />
        </article>
        <InputText id="test" inputClassName="h-[80px]" />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </section>
      <PlayNowAndRankingSideBar />
    </section>
  )
}
