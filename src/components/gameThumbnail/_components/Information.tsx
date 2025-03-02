interface Params {
  gameTitle: string
  gameDescription: string
  creator: string
}
export function Information({ gameTitle, gameDescription, creator }: Params) {
  return (
    <article className="flex flex-col gap-[4px]">
      <p
        className="h-[30px] w-fit cursor-pointer truncate text-md font-semibold hover:text-primary-20"
        title={gameTitle}
      >
        {gameTitle}
      </p>
      <p
        className="line-clamp-2 h-[48px] cursor-pointer break-all text-base hover:text-primary-20"
        title={gameDescription}
      >
        {gameDescription}
      </p>
      <p className="w-fit truncate text-sm text-gray-60 dark:text-gray-30" title={creator}>
        제작자:
        <span className="cursor-pointer hover:text-gray-30 dark:hover:text-gray-60"> {creator}</span>
      </p>
    </article>
  )
}
