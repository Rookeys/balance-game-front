import Image from "next/image"
interface Params {
  firstItemThumbnail: string
  firstItemTitle: string
  secondItemThumbnail: string
  secondItemTitle: string
}
export function ThumbnailSection({ firstItemThumbnail, firstItemTitle, secondItemThumbnail, secondItemTitle }: Params) {
  return (
    <section className="flex items-center justify-between">
      <article className="flex flex-col items-center">
        <div className="relative h-[150px] w-[50vw] 2xsm:w-[150px]">
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
        <div className="w-full bg-gray-10 py-2 dark:bg-dark-20">
          <p className="line-clamp-1 h-[16px] text-center text-sm font-medium" title={firstItemTitle}>
            {firstItemTitle}
          </p>
        </div>
      </article>
      <article className="flex flex-col items-center">
        <div className="relative h-[150px] w-[50vw] 2xsm:w-[150px]">
          <Image
            className="object-cover"
            src={secondItemThumbnail}
            alt={`${secondItemTitle}-thumbnail`}
            fill
            sizes="(max-width: 640px) 50vw, 150px"
          />
        </div>
        <div className="w-full bg-gray-10 py-2 dark:bg-dark-20">
          <p className="line-clamp-1 h-[16px] text-center text-sm font-medium" title={secondItemTitle}>
            {secondItemTitle}
          </p>
        </div>
      </article>
    </section>
  )
}
