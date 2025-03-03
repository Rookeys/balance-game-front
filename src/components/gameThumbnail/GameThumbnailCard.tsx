import { GameListResponse } from "@/api/orval/model/gameListResponse"
import { ActionButtons, Information, ThumbnailSection } from "./_components"

export default function GameThumbnailCard(props: GameListResponse) {
  const { roomId, leftSelection, rightSelection, title, description } = props
  return (
    <section className="max-w-screen overflow-hidden rounded-sm border bg-white shadow-md 2xsm:max-w-[300px] dark:border-gray dark:bg-dark-30">
      <ThumbnailSection firstItem={leftSelection} secondItem={rightSelection} />
      <section className="flex flex-col gap-[12px] px-[4px] py-[8px]">
        <Information
          gameTitle={title ?? ""}
          gameDescription={description ?? ""}
          creator={"Todo API 에 제작자 데이터 추가"}
        />
        <ActionButtons id={roomId} />
      </section>
    </section>
  )
}
