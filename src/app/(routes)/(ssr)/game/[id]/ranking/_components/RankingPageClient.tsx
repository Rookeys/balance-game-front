"use client"

import {
  useGetResultRanking,
  useGetResultRankingUsingPage
} from "@/api/orval/client/game-results-controller/game-results-controller"
import { useGetGameStatus } from "@/api/orval/client/main-page-controller/main-page-controller"
import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"
import Filter from "@/components/Filter"
import MobilePlayNowButton from "@/components/MobilePlayNowButton"
import { Pagination } from "@/components/Pagination"
import SearchInput from "@/components/SearchInput"
import PlayNowSideBar from "@/components/sidebar/PlayNowSideBar"
import { resourceListFilters } from "@/constants/filters"
import useResizeHandler from "@/hooks/useResizeHandler"
import { SCREEN_SIZE } from "@/styles/theme/screenSize"
import { calculateWinRate } from "@/utils/calculateWinRate"
import { getThumbnailUrlByType } from "@/utils/getThumbnailUrlByType"
import { CircleAlert, Search } from "lucide-react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import DesktopResources from "./DesktopResources"
import RankingResourceCard from "./RankingResourceCard"
import TabletResources from "./TabletResources"
import { COLORS } from "@/styles/theme/colors"

export default function RankingPageClient() {
  const windowWidth = useResizeHandler()
  const { id } = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()

  const sort = searchParams.get("sort") || GetResultRankingSortType.WIN_RATE_DESC
  const keyword = searchParams.get("keyword") || ""
  const page = Number(searchParams.get("page")) || 1

  const { data: resources } = useGetResultRankingUsingPage(Number(id), {
    sortType: (sort || GetResultRankingSortType.WIN_RATE_DESC) as GetResultRankingSortType,
    title: keyword,
    size: 10,
    page
  })

  const handlePageChange = (newPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.set("page", newPage.toString())
    router.push(`?${newSearchParams.toString()}`, { scroll: false })
  }

  const { data: resourcesTop3 } = useGetResultRanking(Number(id), {
    sortType: GetResultRankingSortType.WIN_RATE_DESC,
    size: 3
  })

  const { data: gameDetail } = useGetGameStatus(Number(id))

  const first = resourcesTop3?.content?.[0]
  const second = resourcesTop3?.content?.[1]
  const third = resourcesTop3?.content?.[2]

  const handleSearch = (keyword: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.set("keyword", keyword.toString())
    newSearchParams.delete("page")
    router.push(`?${newSearchParams.toString()}`, { scroll: false })
  }

  return (
    <section className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] md:px-[24px] lg:px-0">
      <section className="flex w-full flex-col gap-[28px] md:gap-[40px]">
        <article className="flex flex-col gap-[12px]">
          <p className="font-sb-aggro-medium text-heading-4 text-label-normal md:text-heading-3">월드컵 랭킹</p>
          <article className="mx-[-16px] flex flex-col gap-[24px] bg-gray-900 px-[16px] py-[40px] md:mx-0 md:gap-[40px] md:rounded-[16px]">
            <p className="mx-auto w-full rounded-[12px] text-center font-sb-aggro-medium text-heading-5 text-background">
              {gameDetail?.title}
            </p>
            <section className="flex items-center justify-center gap-[12px] lg:gap-[24px]">
              {second && (
                <RankingResourceCard
                  rank={2}
                  name={second.title}
                  winRate={calculateWinRate(second.winningNums, second.totalPlayNums)}
                  wins={second.winningNums}
                  iconSrc={"/images/Rookeys.png"}
                  src={getThumbnailUrlByType({ type: second.type, url: second.content })}
                  className={`max-w-[180px]`}
                />
              )}
              {first && (
                <RankingResourceCard
                  rank={1}
                  name={first.title}
                  winRate={calculateWinRate(first.winningNums, first.totalPlayNums)}
                  wins={first.winningNums}
                  iconSrc={"/images/Rookeys.png"}
                  src={getThumbnailUrlByType({ type: first.type, url: first.content })}
                  className={`max-w-[180px]`}
                />
              )}
              {third && (
                <RankingResourceCard
                  rank={3}
                  name={third.title}
                  winRate={calculateWinRate(third.winningNums, third.totalPlayNums)}
                  wins={third.winningNums}
                  iconSrc={"/images/Rookeys.png"}
                  src={getThumbnailUrlByType({ type: third.type, url: third.content })}
                  className={`max-w-[180px]`}
                />
              )}
            </section>
          </article>
          <div className="flex items-center gap-[4px]">
            <CircleAlert className="fill-label-disable text-white" size={16} />
            <p className="text-caption1-regular text-label-alternative">
              월드컵 우승 정보 업데이트는 약 5분가량 소요될 수 있어요.
            </p>
          </div>
        </article>
        <MobilePlayNowButton text={`왜 인기 있는지 궁금하다면?\n지금 바로 플레이해 보세요!`} />
        <article className="flex flex-col gap-[12px]">
          <article className="flex flex-col-reverse items-center justify-between gap-[12px] lg:flex-row">
            <Filter filters={resourceListFilters} className="self-end lg:self-auto" defaultLabel="승률순" />
            <SearchInput
              placeholder="이름으로 콘텐츠 찾기"
              defaultValue={keyword}
              Icon={Search}
              iconProps={{ color: COLORS.NEUTRAL_700 }}
              className="lg:max-w-[340px]"
              onSearch={handleSearch}
            />
          </article>
          {windowWidth !== 0 && (windowWidth > SCREEN_SIZE.lg ? <DesktopResources /> : <TabletResources />)}
        </article>
        {!!resources?.totalPages && (
          <Pagination
            currentPage={page}
            totalPages={resources?.totalPages}
            onPageChange={handlePageChange}
            pageRangeDisplayed={windowWidth > SCREEN_SIZE.md ? 10 : 5}
          />
        )}
      </section>
      <PlayNowSideBar />
    </section>
  )
}
