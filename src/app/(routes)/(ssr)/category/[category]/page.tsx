import { GetMainGameListCategory } from "@/api/orval/model/getMainGameListCategory"
import Filter from "@/components/Filter"
import ScrollTopButton from "@/components/ScrollTopButton"
import { categories } from "@/constants/categories"
import { gameListFilters } from "@/constants/filters"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import CategoryGameList from "./_components/CategoryGameList"
import Title from "./_components/Title"

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  const match = categories.find((c) => c.id === category.toUpperCase())

  if (!match) return { title: "카테고리 없음", robots: { index: false, follow: true } }

  return {
    title: `${match.label} 카테고리`,
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
