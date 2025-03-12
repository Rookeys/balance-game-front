import CategoryGameList from "./_components/CategoryGameList"
import Filter from "./_components/Filter"
import Title from "./_components/Title"

interface Params {
  category: string
}

interface CategoryGameProps {
  params: Promise<Params>
}

export default async function CategoryGame({ params }: CategoryGameProps) {
  const { category } = await params
  console.log("category", category)
  return (
    <section className="mt-[20px] flex flex-col gap-[12px] md:mt-[40px]">
      <article className="flex items-center justify-between">
        <Title />
        <Filter />
      </article>
      <CategoryGameList />
    </section>
  )
}
