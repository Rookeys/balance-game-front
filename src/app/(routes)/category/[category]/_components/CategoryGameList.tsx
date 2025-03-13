import GameThumbnailSimpleCard from "@/components/gameThumbnailCard/GameThumbnailSimpleCard"

export default function CategoryGameList() {
  return (
    <section className="grid grid-cols-2 gap-x-[20px] gap-y-[20px] md:grid-cols-4 md:gap-y-[40px]">
      {Array.from({ length: 10 }, (_, index) => (
        <GameThumbnailSimpleCard key={index} fixedSize={false} />
      ))}
    </section>
  )
}
