import GameThumbnailCard from "@/components/gameThumbnail/GameThumbnailCard"

export default function Home() {
  const dummy = {
    id: "1",
    firstItemThumbnail: "https://avatars.githubusercontent.com/u/62785823?v=4",
    firstItemTitle: "고재민",
    secondItemThumbnail: "https://avatars.githubusercontent.com/u/84797433?v=4",
    secondItemTitle: "박현호",
    gameTitle: "⭐️게임 타이틀",
    gameDescription: "📝게임에 대한 설명UI는 이쪽에 하면 될것으로 보임",
    creator: "KoJaem & Cheomuk"
  }
  return (
    <section className="flex flex-col gap-[48px] items-center">
      <article className="flex flex-col gap-[8px] items-center mt-[20px]">
        <h1 className="font-bold text-lg">밸런스 게임</h1>
        <h2 className="font-semibold">내가 만든 게임을 공유하고, 팔로워를 늘려보세요!</h2>
      </article>
      <section className="xl:px-[16px]">
        <p className="text-md font-semibold w-fit">이번주 인기 밸런스게임</p>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-[20px]">
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
          <GameThumbnailCard {...dummy} />
        </section>
      </section>
    </section>
  )
}
