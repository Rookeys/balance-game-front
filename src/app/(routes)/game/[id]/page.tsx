import { Button } from "@/components/Button"
import { Share } from "lucide-react"
import Image from "next/image"

export default function GameDetailPage() {
  return (
    <section className="mt-[20px] flex flex-col items-center gap-[28px] px-[16px] md:mt-[40px] md:gap-[40px] md:px-[24px] lg:px-0">
      <section className="flex w-full max-w-[1200px] flex-col gap-[12px] md:flex-row md:gap-[24px]">
        <div className="relative aspect-[5/4] h-fit w-full md:max-w-[50%]">
          <Image src={"/images/Rookeys.png"} alt="logo" fill className="rounded-[8px] object-cover" />
        </div>
        <section className="flex w-full flex-col gap-[28px] md:max-w-[50%] md:gap-[40px]">
          <article className="flex items-center gap-[12px]">
            <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">256개의 콘텐츠</p>
            <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">128강까지 플레이 가능</p>
          </article>
          <article className="flex flex-col gap-[12px]">
            <p>출시일 2025.03.16 / 수정일 2025.03.23</p>
            <p>타이틀이 들어가는 영역입니다. 최대 50자까지 작성합니다. 최대 50자까지 작성을 합니다.</p>
            <p>
              간단한 설명이 들어가는 영역입니다. 최대 2줄까지 작성합니다. 설명이 들어가는 영역입니다. 설명이 들어가는
              영역입니다. 설명이
            </p>
          </article>
          <article className="hidden flex-col gap-[24px] lg:flex">
            <div className="flex items-center gap-[24px]">
              <div className="flex w-full flex-col gap-[12px] rounded-[12px] border p-[16px]">
                <p>카테고리</p>
                <div className="flex items-center gap-[12px]">
                  <p className="rounded-[4px] bg-gray-10 px-[8px] py-[4px]">카테고리</p>
                  <p className="rounded-[4px] bg-gray-10 px-[8px] py-[4px]">카테고리</p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-[12px] rounded-[12px] border p-[16px]">
                <p>제작자</p>
                <div className="flex items-center gap-[12px]">
                  <Image
                    src={"/images/Rookeys.png"}
                    width={40}
                    height={40}
                    className="rounded-full"
                    alt="creator-image"
                    placeholder="blur"
                    blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
                  />
                  <p className="line-clamp-1">닉네임이 들어갈 영역입니다</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[24px]">
              <div className="flex w-full flex-col rounded-[12px] border bg-gray-10 p-[16px]">
                <p>전체댓글</p>
                <Image src={"/images/Rookeys.png"} width={60} height={60} alt="comment-image" className="self-end" />
              </div>
              <div className="flex w-full flex-col rounded-[12px] border bg-gray-10 p-[16px]">
                <p>랭킹</p>
                <Image src={"/images/Rookeys.png"} width={60} height={60} alt="ranking-image" className="self-end" />
              </div>
            </div>
          </article>
          <article className="hidden w-full max-w-[1200px] items-center gap-[12px] lg:flex">
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] border">
              <Share />
            </div>
            <Button type="button" className="h-full w-full bg-black text-white">
              플레이 하기
            </Button>
          </article>
        </section>
      </section>
      <article className="flex w-full max-w-[1200px] flex-col gap-[24px] lg:hidden">
        <div className="flex flex-col items-center gap-[16px] md:flex-row md:gap-[24px]">
          <div className="flex w-full flex-col gap-[12px] rounded-[12px] border p-[16px]">
            <p>카테고리</p>
            <div className="flex items-center gap-[12px]">
              <p className="rounded-[4px] bg-gray-10 px-[8px] py-[4px]">카테고리</p>
              <p className="rounded-[4px] bg-gray-10 px-[8px] py-[4px]">카테고리</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-[12px] rounded-[12px] border p-[16px]">
            <p>제작자</p>
            <div className="flex items-center gap-[12px]">
              <Image
                src={"/images/Rookeys.png"}
                width={40}
                height={40}
                className="rounded-full"
                alt="creator-image"
                placeholder="blur"
                blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
              />
              <p className="line-clamp-1">닉네임이 들어갈 영역입니다</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[16px] md:gap-[24px]">
          <div className="flex w-full flex-col rounded-[12px] border bg-gray-10 p-[16px]">
            <p>전체댓글</p>
            <Image src={"/images/Rookeys.png"} width={60} height={60} alt="comment-image" className="self-end" />
          </div>
          <div className="flex w-full flex-col rounded-[12px] border bg-gray-10 p-[16px]">
            <p>랭킹</p>
            <Image src={"/images/Rookeys.png"} width={60} height={60} alt="ranking-image" className="self-end" />
          </div>
        </div>
      </article>
      <article className="hidden w-full max-w-[1200px] items-center gap-[12px] md:flex lg:hidden">
        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] border">
          <Share />
        </div>
        <Button type="button" className="h-full w-full bg-black text-white">
          플레이 하기
        </Button>
      </article>
    </section>
  )
}

// * 태블릿

// import { Button } from "@/components/Button"
// import { Share } from "lucide-react"
// import Image from "next/image"

// export default function GameDetailPage() {
//   return (
//     <section className="mt-[20px] flex flex-col items-center gap-[40px] px-[16px] md:mt-[40px] md:px-[24px] lg:px-0">
//       <section className="flex w-full max-w-[1200px] gap-[24px]">
//         <div className="relative aspect-[5/4] w-full md:max-w-[50%]">
//           <Image src={"/images/Rookeys.png"} alt="logo" fill className="rounded-[8px] object-cover" />
//         </div>
//         <section className="flex w-full max-w-[50%] flex-col gap-[40px]">
//           <article className="flex items-center gap-[12px]">
//             <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">256개의 콘텐츠</p>
//             <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">128강까지 플레이 가능</p>
//           </article>
//           <article className="flex flex-col gap-[12px]">
//             <p>출시일 2025.03.16 / 수정일 2025.03.23</p>
//             <p>타이틀이 들어가는 영역입니다. 최대 50자까지 작성합니다. 최대 50자까지 작성을 합니다.</p>
//             <p>
//               간단한 설명이 들어가는 영역입니다. 최대 2줄까지 작성합니다. 설명이 들어가는 영역입니다. 설명이 들어가는
//               영역입니다. 설명이
//             </p>
//           </article>
//         </section>
//       </section>
//       <article className="flex w-full max-w-[1200px] flex-col gap-[24px]">
//         <div className="flex items-center gap-[24px]">
//           <div className="flex w-full flex-col gap-[12px] rounded-[12px] border p-[16px]">
//             <p>카테고리</p>
//             <div className="flex items-center gap-[12px]">
//               <p className="rounded-[4px] bg-gray-10 px-[8px] py-[4px]">카테고리</p>
//               <p className="rounded-[4px] bg-gray-10 px-[8px] py-[4px]">카테고리</p>
//             </div>
//           </div>
//           <div className="flex w-full flex-col gap-[12px] rounded-[12px] border p-[16px]">
//             <p>제작자</p>
//             <div className="flex items-center gap-[12px]">
//               <Image
//                 src={"/images/Rookeys.png"}
//                 width={40}
//                 height={40}
//                 className="rounded-full"
//                 alt="creator-image"
//                 placeholder="blur"
//                 blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
//               />
//               <p className="line-clamp-1">닉네임이 들어갈 영역입니다</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center gap-[24px]">
//           <div className="flex w-full flex-col rounded-[12px] border bg-gray-10 p-[16px]">
//             <p>전체댓글</p>
//             <Image src={"/images/Rookeys.png"} width={60} height={60} alt="comment-image" className="self-end" />
//           </div>
//           <div className="flex w-full flex-col rounded-[12px] border bg-gray-10 p-[16px]">
//             <p>랭킹</p>
//             <Image src={"/images/Rookeys.png"} width={60} height={60} alt="ranking-image" className="self-end" />
//           </div>
//         </div>
//       </article>
//       <article className="flex w-full max-w-[1200px] items-center gap-[12px]">
//         <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] border">
//           <Share />
//         </div>
//         <Button type="button" className="h-full w-full bg-black text-white">
//           플레이 하기
//         </Button>
//       </article>
//     </section>
//   )
// }

// * 데스크탑

// import { Button } from "@/components/Button"
// import { Share } from "lucide-react"
// import Image from "next/image"

// export default function GameDetailPage() {
//   return (
//     <section className="mt-[20px] flex items-center justify-center px-[16px] md:mt-[40px] md:px-[24px] lg:px-0">
//       <section className="flex w-full max-w-[1200px] gap-[24px]">
//         <div className="relative aspect-[5/4] w-full md:max-w-[50%]">
//           <Image src={"/images/Rookeys.png"} alt="logo" fill className="rounded-[8px] object-cover" />
//         </div>
//         <section className="flex w-full max-w-[50%] flex-col gap-[40px]">
//           <article className="flex items-center gap-[12px]">
//             <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">256개의 콘텐츠</p>
//             <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">128강까지 플레이 가능</p>
//           </article>
//           <article className="flex flex-col gap-[12px]">
//             <p>출시일 2025.03.16 / 수정일 2025.03.23</p>
//             <p>타이틀이 들어가는 영역입니다. 최대 50자까지 작성합니다. 최대 50자까지 작성을 합니다.</p>
//             <p>
//               간단한 설명이 들어가는 영역입니다. 최대 2줄까지 작성합니다. 설명이 들어가는 영역입니다. 설명이 들어가는
//               영역입니다. 설명이
//             </p>
//           </article>
//           <article className="flex flex-col gap-[24px]">
//             <div className="flex items-center gap-[24px]">
//               <div className="flex w-full flex-col gap-[12px] rounded-[12px] border p-[16px]">
//                 <p>카테고리</p>
//                 <div className="flex items-center gap-[12px]">
//                   <p className="rounded-[4px] bg-gray-10 px-[8px] py-[4px]">카테고리</p>
//                   <p className="rounded-[4px] bg-gray-10 px-[8px] py-[4px]">카테고리</p>
//                 </div>
//               </div>
//               <div className="flex w-full flex-col gap-[12px] rounded-[12px] border p-[16px]">
//                 <p>제작자</p>
//                 <div className="flex items-center gap-[12px]">
//                   <Image
//                     src={"/images/Rookeys.png"}
//                     width={40}
//                     height={40}
//                     className="rounded-full"
//                     alt="creator-image"
//                     placeholder="blur"
//                     blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
//                   />
//                   <p className="line-clamp-1">닉네임이 들어갈 영역입니다</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-[24px]">
//               <div className="flex w-full flex-col rounded-[12px] border bg-gray-10 p-[16px]">
//                 <p>전체댓글</p>
//                 <Image src={"/images/Rookeys.png"} width={60} height={60} alt="comment-image" className="self-end" />
//               </div>
//               <div className="flex w-full flex-col rounded-[12px] border bg-gray-10 p-[16px]">
//                 <p>랭킹</p>
//                 <Image src={"/images/Rookeys.png"} width={60} height={60} alt="ranking-image" className="self-end" />
//               </div>
//             </div>
//           </article>
//           <article className="flex items-center gap-[12px]">
//             <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] border">
//               <Share />
//             </div>
//             <Button type="button" className="h-full w-full bg-black text-white">
//               플레이 하기
//             </Button>
//           </article>
//         </section>
//       </section>
//     </section>
//   )
// }
