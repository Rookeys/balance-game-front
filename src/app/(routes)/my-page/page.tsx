import { Button } from "@/components/Button"
import GameThumbnailSimpleCard from "@/components/gameThumbnailCard/GameThumbnailSimpleCard"
import Image from "next/image"

export default async function MyPage() {
  return (
    <section className="mt-[20px] flex justify-center px-[16px] md:mt-[40px] md:px-[24px] lg:px-0">
      <section className="flex w-full max-w-[1200px] flex-col gap-[28px] md:gap-[40px]">
        <article className="rounded-[12px] bg-gray-10 px-[16px] py-[20px] md:px-[40px] md:py-[40px]">
          <article className="flex flex-col gap-[12px]">
            <div className="flex items-start justify-between">
              <figure className="relative h-[60px] w-[60px] flex-shrink-0 md:h-[80px] md:w-[80px]">
                <Image src={"/images/Rookeys.png"} alt="" fill />
              </figure>
              <Button className="bg-black text-white">프로필 수정</Button>
            </div>
            <div>
              <p>닉네임이 들어갈 영역입니다</p>
              <p>email.kakao.com</p>
            </div>
          </article>
        </article>
        <article className="relative grid w-full grid-cols-2 gap-x-[16px] gap-y-[16px] md:grid-cols-4 md:gap-x-[24px] md:gap-y-[40px]">
          <GameThumbnailSimpleCard fixedSize={false} />
          <GameThumbnailSimpleCard fixedSize={false} />
          <GameThumbnailSimpleCard fixedSize={false} />
          <GameThumbnailSimpleCard fixedSize={false} />
          <GameThumbnailSimpleCard fixedSize={false} />
          <GameThumbnailSimpleCard fixedSize={false} />
          <GameThumbnailSimpleCard fixedSize={false} />
          <GameThumbnailSimpleCard fixedSize={false} />
          <GameThumbnailSimpleCard fixedSize={false} />
        </article>
      </section>
    </section>
  )
}
