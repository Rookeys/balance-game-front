interface Params {
  gameTitle: string
  gameDescription: string
  creator: string
}
export function Information({ gameTitle, gameDescription, creator }: Params) {
  return (
    <article className="flex flex-col gap-[4px]">
      <p
        className="text-md font-semibold truncate w-fit h-[30px] cursor-pointer hover:text-primary-20"
        title={gameTitle}
      >
        {gameTitle}
      </p>
      <p
        className="text-base line-clamp-2 break-all h-[48px] cursor-pointer hover:text-primary-20"
        title={gameDescription}
      >
        {gameDescription}
      </p>
      <p className="text-sm text-gray-60 dark:text-gray-30 truncate w-fit" title={creator}>
        제작자:
        <span className="cursor-pointer hover:text-gray-30 dark:hover:text-gray-60"> {creator}</span>
      </p>
    </article>
  )
}
