"use client"
import SideBar from "@/components/form/gameRoom/_components/SideBar"
import { ImageUploadForm } from "./ImageUploadForm"
import { YoutubeUploadForm } from "./YoutubeUploadForm"
import MobileTab from "@/components/form/gameRoom/_components/MobileTab"
import MediaTab from "./MediaTab"

export default function MediaForm() {
  return (
    <>
      <MobileTab step={2} setStep={() => {}} />
      <section className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0">
        <section className="flex w-full flex-col gap-[40px]">
          <div className="flex flex-col gap-[20px]">
            <MediaTab />
            <article className="flex flex-col gap-[4px]">
              <div className="flex gap-[4px]">
                <p>콘텐츠 업로드</p>
                <p>🚀</p>
              </div>
              <p>
                이미지나 유튜브 동영상을 2개 이상 업로드하면 월드컵을 만들 수 있어요. 다양한 콘텐츠로 재미있는 월드컵을
                만들어보세요!
              </p>
            </article>
            <p className="rounded-[8px] bg-gray-10 px-[16px] py-[12px]">
              업로드한 콘텐츠 n개, 4강까지 플레이 가능해요.
            </p>
          </div>
          <ImageUploadForm />
          <YoutubeUploadForm />
        </section>
        <SideBar step={2} setStep={() => {}} />
      </section>
    </>
  )
}
