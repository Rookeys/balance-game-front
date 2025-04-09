"use client"
import CommentItem from "@/components/comment/CommentItem"
import Filter from "@/components/Filter"
import InputText from "@/components/form/inputText/InputText"
import { commentListFilters } from "@/constants/filters"
import PlayOtherGameAndRankingSideBar from "./PlayOtherGameAndRankingSideBar"
import ResourceInformation from "./ResourceInformation"
import { cn } from "@/utils/cn"

export default function GameResultPageClient() {
  // const { id, resourceId } = useParams()

  // const { data: gameRoomData } = useGetGameDetails(Number(id))

  // const { data: resourceData } = useGetResource(Number(id), Number(resourceId))

  return (
    <section className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0">
      <section className="flex w-full flex-col gap-[28px] md:gap-[60px]">
        <ResourceInformation />
        <article className="flex flex-col gap-[20px]">
          <div className="flex items-center">
            <button className={cn("w-full", "border-b-4 border-black py-[16px]")}>
              <p>전체 댓글</p>
            </button>
            <button className={cn("w-full", "border-b-2 py-[17px]")}>
              <p className="line-clamp-1">리소스이름리소스이름리소스이름리소스이름</p>
            </button>
          </div>
          <div className="flex flex-col gap-[12px]">
            <article className="flex items-center justify-between">
              <p>전체댓글 00</p>
              <Filter filters={commentListFilters} />
            </article>
            <InputText id="test" inputClassName="h-[80px]" />
            <CommentItem />
            <CommentItem />
            <CommentItem />
          </div>
        </article>
      </section>
      <PlayOtherGameAndRankingSideBar />
    </section>
  )
}
