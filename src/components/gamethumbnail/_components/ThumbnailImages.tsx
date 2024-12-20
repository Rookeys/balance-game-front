import Image from "next/image"
interface Params {
  firstItemThumbnail: string
  firstItemTitle: string
  secondItemThumbnail: string
  secondItemTitle: string
}
export function ThumbnailImages({ firstItemThumbnail, firstItemTitle, secondItemThumbnail, secondItemTitle }: Params) {
  return (
    <section className="flex justify-between items-center">
      <article className="flex flex-col items-center">
        <div className="relative w-[50vw] 2xsm:w-[150px] h-[150px]">
          <Image
            className="object-cover"
            src={firstItemThumbnail}
            alt={`${firstItemTitle}-thumbnail`}
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
            alt={`${secondItemTitle}-thumbnail`}
            fill
            sizes="(max-width: 640px) 50vw, 150px"
          />
        </div>
        <p className="text-sm font-medium py-2 bg-gray-10 dark:bg-dark-20 w-full flex items-center justify-center">
          {secondItemTitle}
        </p>
      </article>
    </section>
  )
}
