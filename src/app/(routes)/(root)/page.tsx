import GameList from "./_components/GameList"

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-[48px]">
      <article className="mt-[20px] flex flex-col items-center gap-[8px]">
        <h1 className="text-lg font-bold">밸런스 게임</h1>
        <h2 className="font-semibold">내가 만든 게임을 공유하고, 팔로워를 늘려보세요!</h2>
      </article>
      <section className="xl:px-[16px]">
        <p className="w-fit text-md font-semibold">이번주 인기 밸런스게임</p>
        <GameList />
      </section>
    </section>
  )
}
