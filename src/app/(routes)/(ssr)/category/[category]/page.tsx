import { GetMainGameListSortType } from "@/api/orval/model/getMainGameListSortType"
import { CustomPageImplGameListResponse } from "@/api/orval/model/customPageImplGameListResponse"
import Filter from "@/components/Filter"
import ScrollTopButton from "@/components/ScrollTopButton"
import { gameListFilters } from "@/constants/filters"
import { GetMainGameListCategoryWithViewAll } from "@/types/categoryType"
import { getCategoryLabel } from "@/utils/getCategoryLabel"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import qs from "qs"
import CategoryGameList from "./_components/CategoryGameList"
import Title from "./_components/Title"

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params

  const label = getCategoryLabel(category)

  if (!label) return { title: "카테고리 페이지", robots: { index: false, follow: true } }

  return {
    title: `${label} 카테고리`,
    description: `짱픽 이상형월드컵 ${label} 카테고리 페이지입니다. 카테고리에 맞는 이상형월드컵을 플레이해 보세요!`,
    robots: { index: false, follow: true }
  }
}

interface Params {
  category: string
}

interface CategoryGameProps {
  params: Promise<Params>
}

export default async function CategoryGame({ params }: CategoryGameProps) {
  const { category } = await params
  const formattedCategory = category.toUpperCase()

  if (!Object.values(GetMainGameListCategoryWithViewAll).includes(formattedCategory as any)) {
    notFound()
  }

  const queryParams = {
    category:
      formattedCategory === GetMainGameListCategoryWithViewAll.VIEW_ALL ? undefined : (formattedCategory as any),
    sortType: GetMainGameListSortType.RECENT
  }

  let initialGames: CustomPageImplGameListResponse | undefined

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/list?${qs.stringify(queryParams)}`, {
      cache: "force-cache",
      next: { revalidate: 60 }
    })

    if (res.ok) {
      initialGames = await res.json()
    }
  } catch {
    // 프리페치 실패 시 클라이언트에서 다시 조회
  }

  return (
    <section className="mt-[20px] flex flex-col items-center md:mt-[40px]">
      <section className="flex w-full max-w-[1200px] flex-col gap-[12px]">
        <article className="flex items-center justify-between">
          <Title />
          <Filter filters={gameListFilters} />
        </article>
        <CategoryGameList initialGames={initialGames} />
        <ScrollTopButton />
      </section>
    </section>
  )
}
