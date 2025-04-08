"use client"

import Filter from "@/components/Filter"
import SearchInput from "@/components/SearchInput"
import PlayNowAndRankingSideBar from "@/components/sidebar/PlayNowAndRankingSideBar"
import { resourceListFilters } from "@/constants/filters"
import { Search } from "lucide-react"

export default function CommentPageClient() {
  return (
    <section className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0">
      <section className="flex w-full flex-col gap-[28px] md:gap-[40px]">
        <p>월드컵 랭킹 🏆</p>
        <article className="flex flex-col gap-[24px] rounded-[16px] bg-slate-100 py-[40px] md:gap-[40px]">
          <p className="mx-auto w-full max-w-[343px] rounded-[12px] border p-[20px] md:max-w-[440px] lg:max-w-[528px]">
            타이틀이 들어가는 영역입니다. 최대 50자까지 작성합니다. 최대 50자까지 작성을 합니다.
          </p>
          <section className="flex items-center justify-center gap-[24px]"></section>
        </article>
        <article className="flex flex-col-reverse items-center justify-between gap-[12px] lg:flex-row">
          <Filter filters={resourceListFilters} className="self-end lg:self-auto" />
          <SearchInput
            placeholder="이름으로 콘텐츠 찾기"
            Icon={Search}
            className="lg:max-w-[340px]"
            // onSearch={handleSearch}
          />
        </article>
        {/* {windowWidth !== 0 && (windowWidth > SCREEN_SIZE.lg ? <DesktopResources /> : <TabletResources />)} */}
      </section>
      <PlayNowAndRankingSideBar />
    </section>
  )
}
