import { GetMainGameListCategory } from "@/api/orval/model/getMainGameListCategory"
import { notFound } from "next/navigation"
import CategoryGameList from "./_components/CategoryGameList"
import Filter from "./_components/Filter"
import Title from "./_components/Title"
import ScrollTopButton from "@/components/ScrollTopButton"

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
        <Filter />
      </article>
      <CategoryGameList />
      <ScrollTopButton />
    </section>
  )
}
