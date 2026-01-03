import Filter from "@/components/Filter"
import ScrollTopButton from "@/components/ScrollTopButton"
import SearchGameList from "./_components/SearchGameList"
import SearchInputWrapper from "./_components/SearchInputWrapper"
import Title from "./_components/Title"
import { gameListFilters } from "@/constants/filters"

// interface SearchPageProps {
//   searchParams: Promise<{
//     keyword?: string
//   }>
// }

export default async function SearchPage() {
  // const { keyword } = await searchParams

  return (
    <section className="mt-[20px] flex flex-col items-center md:mt-[40px]">
      <SearchInputWrapper />
      <section className="mt-[20px] flex w-full max-w-[1200px] flex-col gap-[12px] md:mt-[40px]">
        <article className="flex items-center justify-between">
          <Title />
          <Filter filters={gameListFilters} />
        </article>
        <SearchGameList />
        <ScrollTopButton />
      </section>
    </section>
  )
}
