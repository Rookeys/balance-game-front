import GameThumbnailCard from "@/components/form/gameThumbnail/GameThumbnailCard"

export default function Home() {
  console.log("테스트")
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
    <section className="flex flex-col items-center gap-[48px]">
      <article className="mt-[20px] flex flex-col items-center gap-[8px]">
        <h1 className="text-lg font-bold">밸런스 게임</h1>
        <h2 className="font-semibold">내가 만든 게임을 공유하고, 팔로워를 늘려보세요!</h2>
      </article>
      <section className="xl:px-[16px]">
        <p className="w-fit text-md font-semibold">이번주 인기 밸런스게임</p>
        <section className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
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
