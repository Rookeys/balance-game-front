import Image from "next/image"
interface Params {
  firstItemThumbnail: string
  firstItemTitle: string
  secondItemThumbnail: string
  secondItemTitle: string
}
export function ThumbnailSection({ firstItemThumbnail, firstItemTitle, secondItemThumbnail, secondItemTitle }: Params) {
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
          {/* <ImageRatio
            className="object-cover"
            ratio={1}
            src={firstItemThumbnail}
            alt={`${firstItemTitle}-thumbnail`}
            fill
            sizes="(max-width: 640px) 50vw, 150px"
          /> */}
        </div>
        <div className="py-2 bg-gray-10 dark:bg-dark-20 w-full">
          <p className="text-sm font-medium text-center h-[16px] line-clamp-1" title={firstItemTitle}>
            {firstItemTitle}
          </p>
        </div>
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
        <div className="py-2 bg-gray-10 dark:bg-dark-20 w-full">
          <p className="text-sm font-medium text-center h-[16px] line-clamp-1" title={secondItemTitle}>
            {secondItemTitle}
          </p>
        </div>
      </article>
    </section>
  )
}
