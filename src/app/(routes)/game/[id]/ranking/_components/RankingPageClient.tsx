"use client"

import Filter from "@/components/Filter"
import SearchInput from "@/components/SearchInput"
import { resourceListFilters } from "@/constants/filters"
import useResizeHandler from "@/hooks/useResizeHandler"
import { SCREEN_SIZE } from "@/styles/theme/screenSize"
import { Search } from "lucide-react"
import DesktopResources from "./DesktopResources"
import RankingResourceCard from "./RankingResourceCard"
import TabletResources from "./TabletResources"
import PlayNowSideBar from "@/components/sidebar/PlayNowSideBar"

export default function RankingPageClient() {
  const windowWidth = useResizeHandler()

  return (
    <section className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0">
      <section className="flex w-full flex-col gap-[28px] md:gap-[40px]">
        <p>월드컵 랭킹 🏆</p>
        <article className="flex flex-col gap-[24px] rounded-[16px] bg-slate-100 py-[40px] md:gap-[40px]">
          <p className="mx-auto w-full max-w-[343px] rounded-[12px] border p-[20px] md:max-w-[440px] lg:max-w-[528px]">
            타이틀이 들어가는 영역입니다. 최대 50자까지 작성합니다. 최대 50자까지 작성을 합니다.
          </p>
          <section className="flex items-center justify-center gap-[24px]">
            <RankingResourceCard
              rank={2}
              name="2등 리소스이름리소스이름리소스이름리소스이름리소스이름 리소스이름 리소스이름"
              winRate="00.0"
              wins={0}
              iconSrc="/images/Rookeys.png"
              src="/images/Rookeys.png"
              className="max-w-[180px]"
            />
            <RankingResourceCard
              rank={1}
              name="1등 리소스이름리소스이름리소스이름리소스이름리소스이름"
              winRate="00.0"
              wins={0}
              iconSrc="/images/Rookeys.png"
              src="/images/Rookeys.png"
              className="max-w-[200px]"
            />
            <RankingResourceCard
              rank={3}
              name="3등 리소스이름리소스이름리소스이름리소스이름리소스이름 리소스이름 리소스이름"
              winRate="00.0"
              wins={0}
              iconSrc="/images/Rookeys.png"
              src="/images/Rookeys.png"
              className="max-w-[180px]"
            />
          </section>
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
        {windowWidth !== 0 && (windowWidth > SCREEN_SIZE.lg ? <DesktopResources /> : <TabletResources />)}
      </section>
      <PlayNowSideBar />
    </section>
  )
}
