"use client"

import { Button } from "@/components/Button"
import InputText from "@/components/form/inputText/InputText"
import { Camera, CircleCheck } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import ResignModal from "./ResignModal"
import { useSession } from "next-auth/react"

export default function ProfileEditPageClient() {
  const [isOpenResignModal, setIsOpenResignModal] = useState<boolean>(false)
  const { data: session } = useSession()
  return (
    <>
      <figure className="relative h-[60px] w-[60px] flex-shrink-0 md:h-[80px] md:w-[80px]">
        <Image src={session?.user?.image ?? "/images/Rookeys.png"} alt="" fill className="rounded-full" />
        <div className="absolute bottom-0 end-0 rounded-full border bg-white p-[6px]">
          <Camera size={16} />
        </div>
      </figure>
      <article className="flex flex-col gap-[4px]">
        <p>닉네임</p>
        <InputText
          id="test"
          SubDescription={
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[4px]">
                <CircleCheck fill="#000000" stroke="#FFFFFF" />
                <p>사용 가능한 닉네임이에요.</p>
              </div>
              <p className="self-start">
                0/12
                {/* {watch("test")?.toString().length ?? 0}/{10} */}
              </p>
            </div>
          }
        />
      </article>
      <Button className="self-end bg-black px-[20px] py-[12px] text-white md:px-[28px]">저장</Button>
      <Button className="self-start px-[12px] py-[12px]" onClick={() => setIsOpenResignModal((prev) => !prev)}>
        회원탈퇴
      </Button>
      {isOpenResignModal && <ResignModal onClick={() => alert("확인")} onClose={() => setIsOpenResignModal(false)} />}
    </>
  )
}
