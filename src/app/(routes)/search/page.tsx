import Filter from "@/components/Filter"
import ScrollTopButton from "@/components/ScrollTopButton"
import SearchGameList from "./_components/SearchGameList"
import SearchInputWrapper from "./_components/SearchInputWrapper"
import Title from "./_components/Title"

// interface SearchPageProps {
//   searchParams: Promise<{
//     keyword?: string
//   }>
// }

export default async function SearchPage() {
  // const { keyword } = await searchParams

  return (
    <section className="mt-[20px] flex flex-col gap-[12px] md:mt-[40px]">
      <SearchInputWrapper />
      <article className="flex items-center justify-between">
        <Title />
        <Filter />
      </article>
      <SearchGameList />
      <ScrollTopButton />
    </section>
  )
}
