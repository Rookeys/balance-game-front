import CommentSection from "./CommentSection"
import PlaySection from "./PlaySection"
import TitleSection from "./TitleSection"

interface Params {
  playId: number
}

export default function GamePlayPageClient({ playId }: Params) {
  return (
    <section className="mt-[28px] px-[16px] md:mt-[40px] md:px-[24px] lg:px-0">
      <section className="mx-auto flex max-w-[1200px] flex-col">
        <TitleSection playId={playId} />
        <PlaySection playId={playId} />
        <CommentSection playId={playId} />
      </section>
    </section>
  )
}
