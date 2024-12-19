import GameThumbnail from '@/components/gamethumbnail/GameThumbnail'

export default function page() {
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
    <>
      <GameThumbnail {...dummy} />
    </>
  )
}
