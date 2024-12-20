interface Params {
  gameTitle: string
  gameDescription: string
  creator: string
}
export function Information({ gameTitle, gameDescription, creator }: Params) {
  return (
    <article className="flex flex-col gap-[4px]">
      <p className="text-md font-semibold truncate" title={gameTitle}>
        {gameTitle}
      </p>
      <p className="text-base line-clamp-2" title={gameDescription}>
        {gameDescription}
      </p>
      <p className="text-sm text-gray-60 dark:text-gray-30 truncate" title={creator}>
        제작자: {creator}
      </p>
    </article>
  )
}
