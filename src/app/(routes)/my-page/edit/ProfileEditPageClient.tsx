"use client"

import { useUpdateProfile } from "@/api/orval/client/user-profile-controller/user-profile-controller"
import { UserRequest } from "@/api/orval/model/userRequest"
import { Button } from "@/components/Button"
import InputText from "@/components/form/inputText/InputText"
import { Camera } from "lucide-react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import ResignModal from "./ResignModal"

export default function ProfileEditPageClient() {
  const [isOpenResignModal, setIsOpenResignModal] = useState<boolean>(false)
  const { data: session, update } = useSession()

  const { mutateAsync: editProfile } = useUpdateProfile()
  const formMethods = useForm<UserRequest>({
    values: {
      nickname: session?.user.nickname ?? ""
    }
  })

  const { watch, setValue, handleSubmit } = formMethods

  const onSubmit = async (data: UserRequest) => {
    await editProfile({ data })
    await update({
      nickname: data.nickname
    })
  }

  return (
    <>
      <figure className="relative h-[60px] w-[60px] flex-shrink-0 md:h-[80px] md:w-[80px]">
        <Image src={session?.user?.image ?? "/images/Rookeys.png"} alt="" fill className="rounded-full" />
        <div className="absolute bottom-0 end-0 rounded-full border bg-white p-[6px]">
          <Camera size={16} />
        </div>
      </figure>
      <FormProvider {...formMethods}>
        <form className="flex flex-col gap-[4px]" onSubmit={handleSubmit(onSubmit)}>
          <p>닉네임</p>
          <InputText
            id="nickname"
            value={watch("nickname")}
            onChange={(e) => {
              if (e.target.value.length <= 10) {
                setValue("nickname", e.target.value, { shouldValidate: true, shouldDirty: true })
              }
            }}
            maxLength={10}
          />
          <Button
            type="submit"
            className="mt-[24px] self-end bg-black px-[20px] py-[12px] text-white md:mt-[36px] md:px-[28px]"
          >
            저장
          </Button>
        </form>
      </FormProvider>
      <Button className="self-start px-[12px] py-[12px]" onClick={() => setIsOpenResignModal((prev) => !prev)}>
        회원탈퇴
      </Button>
      {isOpenResignModal && <ResignModal onClick={() => alert("확인")} onClose={() => setIsOpenResignModal(false)} />}
    </>
  )
}
