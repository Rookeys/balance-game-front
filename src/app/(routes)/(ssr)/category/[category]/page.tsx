import { GetMainGameListCategory } from "@/api/orval/model/getMainGameListCategory"
import Filter from "@/components/Filter"
import ScrollTopButton from "@/components/ScrollTopButton"
import { gameListFilters } from "@/constants/filters"
import { getCategoryLabel } from "@/utils/getCategoryLabel"
import { Metadata } from "next"
import { notFound } from "next/navigation"
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

  if (!(Object.values(GetMainGameListCategory) as string[]).includes(category.toUpperCase())) {
    notFound()
  }

  return (
    <section className="mt-[20px] flex flex-col items-center md:mt-[40px]">
      <section className="flex w-full max-w-[1200px] flex-col gap-[12px]">
        <article className="flex items-center justify-between">
          <Title />
          <Filter filters={gameListFilters} />
        </article>
        <CategoryGameList />
        <ScrollTopButton />
      </section>
    </section>
  )
}
