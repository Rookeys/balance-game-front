import { GameListSelectionResponse } from "@/api/orval/model/gameListSelectionResponse"
import { GameListSelectionResponseType } from "@/api/orval/model/gameListSelectionResponseType"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import Image from "next/image"
interface Params {
  firstItem?: GameListSelectionResponse
  secondItem?: GameListSelectionResponse
}
export function ThumbnailSection({ firstItem, secondItem }: Params) {
  const getImageThumbnail = (item?: GameListSelectionResponse) => {
    if (!item || !item.content) return "/"
    return item.type === GameListSelectionResponseType.IMAGE ? item.content : getYoutubeThumbnail(item.content ?? "")
  }

  return (
    <section className="flex items-center justify-between">
      <article className="flex flex-col items-center">
        <div className="relative h-[150px] w-[50vw] 2xsm:w-[150px]">
          <Image
            className="object-cover"
            src={getImageThumbnail(firstItem)}
            alt={`${firstItem?.title ?? "thumbnail"}`}
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
          <p className="line-clamp-1 h-[16px] text-center text-sm font-medium" title={firstItem?.title}>
            {firstItem?.title}
          </p>
        </div>
      </article>
      <article className="flex flex-col items-center">
        <div className="relative h-[150px] w-[50vw] 2xsm:w-[150px]">
          <Image
            className="object-cover"
            src={getImageThumbnail(secondItem)}
            alt={`${secondItem?.title ?? "thumbnail"}`}
            fill
            sizes="(max-width: 640px) 50vw, 150px"
          />
        </div>
        <div className="w-full bg-gray-10 py-2 dark:bg-dark-20">
          <p className="line-clamp-1 h-[16px] text-center text-sm font-medium" title={secondItem?.title}>
            {secondItem?.title}
          </p>
        </div>
      </article>
    </section>
  )
}
