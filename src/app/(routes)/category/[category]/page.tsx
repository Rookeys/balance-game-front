import { GetMainGameListCategory } from "@/api/orval/model/getMainGameListCategory"
import Filter from "@/components/Filter"
import ScrollTopButton from "@/components/ScrollTopButton"
import { notFound } from "next/navigation"
import CategoryGameList from "./_components/CategoryGameList"
import Title from "./_components/Title"
import { gameListFilters } from "@/constants/filters"

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
    <section className="mt-[20px] flex flex-col gap-[12px] md:mt-[40px]">
      <article className="flex items-center justify-between">
        <Title />
        <Filter filters={gameListFilters} />
      </article>
      <CategoryGameList />
      <ScrollTopButton />
    </section>
  )
}
