import { ActionButtons, Information, ThumbnailSection } from "./_components"

interface Params {
  id: string
  firstItemThumbnail: string
  firstItemTitle: string
  secondItemThumbnail: string
  secondItemTitle: string
  gameTitle: string
  gameDescription: string
  creator: string
}

export default function GameThumbnailCard(props: Params) {
  const {
    firstItemThumbnail,
    firstItemTitle,
    secondItemThumbnail,
    secondItemTitle,
    gameTitle,
    gameDescription,
    creator
  } = props

  return (
    <section className="max-w-screen 2xsm:max-w-[300px] bg-white dark:bg-dark-30 border dark:border-gray rounded-sm shadow-md overflow-hidden">
      <ThumbnailSection
        firstItemThumbnail={firstItemThumbnail}
        firstItemTitle={firstItemTitle}
        secondItemThumbnail={secondItemThumbnail}
        secondItemTitle={secondItemTitle}
      />
      <section className="flex flex-col gap-[12px] px-[4px] py-[8px]">
        <Information gameTitle={gameTitle} gameDescription={gameDescription} creator={creator} />
        <ActionButtons />
      </section>
    </section>
  )
}
