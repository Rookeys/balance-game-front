import "@/styles/navigation.css"
import GameListV2 from "./_components/GameListV2"
import SliderTitle from "./_components/SliderTitle"

export default function Home() {
  return (
    <section className="mx-[16px] my-[20px] md:mx-[24px] lg:mx-[120px]">
      <article className="flex w-full max-w-[1200px] flex-col gap-[12px] justify-self-center">
        <SliderTitle
          title="주간 인기 월드컵 TOP 10"
          titleIcon="💥"
          prevElId="custom-GameList-prev"
          nextElId="custom-GameList-next"
        />
        <GameListV2 />
      </article>
    </section>
  )
}
