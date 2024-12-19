import Image from "next/image"

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

export default function GameThumbnail(props: Params) {
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
      {/* Images */}
      <section className="flex justify-between items-center">
        <article className="flex flex-col items-center">
          <div className="relative w-[50vw] 2xsm:w-[150px] h-[150px]">
            <Image
              className="object-cover"
              src={firstItemThumbnail}
              alt={firstItemTitle}
              fill
              sizes="(max-width: 640px) 50vw, 150px"
            />
          </div>
          <p className="text-sm font-medium py-2 bg-gray-10 dark:bg-dark-20 w-full flex items-center justify-center">
            {firstItemTitle}
          </p>
        </article>
        <article className="flex flex-col items-center">
          <div className="relative w-[50vw] 2xsm:w-[150px] h-[150px]">
            <Image
              className="object-cover"
              src={secondItemThumbnail}
              alt={secondItemTitle}
              fill
              sizes="(max-width: 640px) 50vw, 150px"
            />
          </div>
          <p className="text-sm font-medium py-2 bg-gray-10 dark:bg-dark-20 w-full flex items-center justify-center">
            {secondItemTitle}
          </p>
        </article>
      </section>

      <section className="flex flex-col gap-[12px] px-[4px] py-[8px]">
        {/* Game Title */}
        <article className="flex flex-col gap-[8px]">
          <p className="text-md font-semibold truncate">{gameTitle}</p>
          {/* Game Description */}
          <p className="text-base line-clamp-2">{gameDescription}</p>
          {/* Creator Info */}
          <p className="text-sm text-gray-60 dark:text-gray-30">제작자: {creator}</p>
        </article>

        {/* Action Buttons */}
        <article className="flex flex-wrap">
          <button className="bg-primary hover:bg-primary-60 text-light px-4 py-2 rounded-xsm text-sm dark:bg-primary-70 dark:hover:bg-primary-80">
            게임시작
          </button>
          <button className="bg-gray-10 hover:bg-gray-20 text-dark-30 px-4 py-2 rounded-xsm text-sm dark:bg-gray-70 dark:hover:bg-gray-80 dark:text-light">
            🔥 랭킹확인
          </button>
          <button className="bg-blue hover:bg-blue-60 text-light px-4 py-2 rounded-xsm text-sm dark:bg-blue-70 dark:hover:bg-blue-80">
            공유하기
          </button>
        </article>
      </section>
    </section>
  )
}
