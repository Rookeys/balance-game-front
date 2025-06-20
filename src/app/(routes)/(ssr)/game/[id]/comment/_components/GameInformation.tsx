"use client"

import { useGetGameStatus } from "@/api/orval/client/main-page-controller/main-page-controller"
import CategoryLabel from "@/components/CategoryLabel"
import MobilePlayNowButton from "@/components/MobilePlayNowButton"
import ResourceItem from "@/components/ResourceItem"
import { getCategoryLabel } from "@/utils/getCategoryLabel"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function GameInformation() {
  const { id } = useParams()
  const { data } = useGetGameStatus(Number(id))

  return (
    <section className="flex w-full flex-col gap-[28px] md:flex-row md:gap-[24px]">
      <figure className="relative aspect-[5/4] h-fit w-full flex-shrink-0 md:max-w-[50%] lg:max-w-[40%]">
        <ResourceItem
          {...data?.leftSelection}
          ratio={5 / 4}
          start={data?.leftSelection?.startSec}
          end={data?.leftSelection?.endSec}
          noDelay
        />
      </figure>
      <section className="flex w-full flex-col gap-[12px] md:gap-[24px] lg:gap-[40px]">
        <article className="flex items-center gap-[12px]">
          {data?.categories?.map((category, i) => (
            <CategoryLabel key={`${category}-${i}`} text={getCategoryLabel(category)} />
          ))}
        </article>
        <article className="flex flex-col gap-[12px]">
          <p className="font-sb-aggro-medium text-heading-5">{data?.title}</p>
          <p className="text-body2-regular">{data?.description}</p>
          <div className="flex items-center gap-[4px]">
            <Image
              src={data?.userResponse?.profileImageUrl || "/images/character/pixy_profile.webp"}
              width={40}
              height={40}
              className="h-[40px] w-[40px] rounded-full"
              alt="creator-image"
              // placeholder="blur"
              // blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
            />
            <p className="line-clamp-1 text-label-regular">{data?.userResponse?.nickname}</p>
          </div>
        </article>
      </section>
      <MobilePlayNowButton />
    </section>
  )
}
