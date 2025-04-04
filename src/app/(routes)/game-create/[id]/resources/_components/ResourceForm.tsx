"use client"

import Filter from "@/components/Filter"
import MobileTab from "@/components/form/gameRoom/_components/MobileTab"
import SideBar from "@/components/form/gameRoom/_components/SideBar"
import SearchInput from "@/components/SearchInput"
import { resourceListFilters } from "@/constants/filters"
import { Search, Square } from "lucide-react"
import MediaTab from "../../medias/_components/MediaTab"
import ResourceTable from "./resourceForm/ResourceTable"
import ResourceTableDesktop from "./resourceForm/ResourceTableDesktop"
import useResizeHandler from "@/hooks/useResizeHandler"
import { SCREEN_SIZE } from "@/styles/theme/screenSize"

// const ImageForm = dynamic(() => import("./resourceForm/ImageForm"))
// const YoutubeForm = dynamic(() => import("./resourceForm/YoutubeForm"))

export default function ResourceForm() {
  const windowWidth = useResizeHandler()
  // const { id } = useParams()
  // const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetResourcesInfinite(
  //   Number(id),
  //   undefined,
  //   {
  //     query: {
  //       initialPageParam: undefined,
  //       getNextPageParam: (lastPage) => {
  //         const lastItem = lastPage.content?.[lastPage.content.length - 1]
  //         return lastPage.hasNext ? lastItem?.resourceId : undefined
  //       }
  //     }
  //   }
  // )

  // const { ref, inView } = useInView({
  //   threshold: 1
  // })

  // useEffect(() => {
  //   if (inView && hasNextPage && !isFetchingNextPage) {
  //     fetchNextPage()
  //   }
  // }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  // if (isLoading) return <section className="h-[100vh] bg-red-50" />

  return (
    <>
      <MobileTab step={2} setStep={() => {}} />
      <section className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0">
        <section className="flex w-full flex-col gap-[40px]">
          <MediaTab />
          <div className="flex flex-col gap-[20px]">
            <article className="flex flex-col gap-[4px]">
              <div className="flex gap-[4px]">
                <p>콘텐츠 편집</p>
                <p>🎯</p>
              </div>
              <p>
                업로드한 콘텐츠를 수정하거나 삭제할 수 있어요. 개성 있는 이름을 붙여 더욱 특별하게 콘텐츠를 표현해
                보세요!
              </p>
            </article>
            <p className="rounded-[8px] bg-gray-10 px-[16px] py-[12px]">
              업로드한 콘텐츠 n개, 4강까지 플레이 가능해요.
            </p>
          </div>
          {/* <ImageUploadForm />
          <YoutubeUploadForm /> */}
          <section className="flex flex-col gap-[12px]">
            <article className="flex flex-col justify-between gap-[12px] lg:h-[40px] lg:flex-row-reverse">
              <SearchInput placeholder="이름으로 콘텐츠 찾기" Icon={Search} className="lg:max-w-[340px]" />
              <article className="flex items-center gap-[12px]">
                <div className="flex items-center gap-[4px]">
                  <Square />
                  <p>총00개</p>
                </div>
                <button className="h-full rounded-[4px] border px-[12px]">선택삭제</button>
                <Filter filters={resourceListFilters} />
              </article>
            </article>
            {windowWidth > SCREEN_SIZE.md ? <ResourceTableDesktop /> : <ResourceTable />}
          </section>
        </section>
        <SideBar step={2} setStep={() => {}} />
      </section>
    </>
  )
}
