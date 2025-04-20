"use client"

import { useGetPreSignedUrl } from "@/api/orval/client/presigned-url-controller/presigned-url-controller"
import { useUpdateProfile } from "@/api/orval/client/user-profile-controller/user-profile-controller"
import { UserRequest } from "@/api/orval/model/userRequest"
import { Button } from "@/components/Button"
import InputText from "@/components/form/inputText/InputText"
import axios from "axios"
import { Camera } from "lucide-react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import ResignModal from "./ResignModal"

export type EditProfileType = UserRequest & { newImage?: File[] | null }

export default function ProfileEditPageClient() {
  const [isOpenResignModal, setIsOpenResignModal] = useState<boolean>(false)

  const { data: session, update } = useSession()

  const { mutateAsync: editProfile } = useUpdateProfile()

  const { mutateAsync: RequestPresignedUrl } = useGetPreSignedUrl()

  const formMethods = useForm<EditProfileType>({
    values: {
      nickname: session?.user.nickname ?? ""
    }
  })

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = formMethods

  const onSubmit = async (data: EditProfileType) => {
    let newImageURL = null
    if (data.newImage && data.newImage.length > 0) {
      const presignedUrl = (await RequestPresignedUrl({ data: { prefix: "image", length: 1 } }))[0] // 해당 폼에서는 무조건 1임

      await axios.put(presignedUrl, data.newImage[0], {
        headers: {
          "Content-Type": data.newImage[0].type
        }
      })
      newImageURL = new URL(presignedUrl).origin + new URL(presignedUrl).pathname
    }

    const imageURL = newImageURL ? newImageURL : session?.user.image

    const putProfileRequest = {
      ...data,
      url: imageURL
    } satisfies UserRequest

    await editProfile({
      data: putProfileRequest
    })

    await update({
      nickname: data.nickname,
      image: imageURL
    })

    setValue("newImage", [], { shouldValidate: true })
  }

  const newImageData = watch("newImage")
  const newImage = newImageData?.length && newImageData?.length > 0 ? newImageData[0] : ""

  return (
    <>
      {/* <figure className="relative h-[60px] w-[60px] flex-shrink-0 md:h-[80px] md:w-[80px]">
        <Image src={session?.user?.image ?? "/images/Rookeys.png"} alt="" fill className="rounded-full" />
        <div className="absolute bottom-0 end-0 rounded-full border bg-white p-[6px]">
          <Camera size={16} />
        </div>
      </figure> */}
      <label className="relative h-[60px] w-[60px] flex-shrink-0 cursor-pointer md:h-[80px] md:w-[80px]">
        {/* <Image src={URL.createObjectURL(watch("newImage")[0])} alt="" fill className="rounded-full object-cover" /> */}
        <Image
          src={newImage ? URL.createObjectURL(newImage) : session?.user?.image || "/images/Rookeys.png"}
          alt="user-profile"
          fill
          className="rounded-full object-cover"
        />
        <div className="absolute bottom-0 end-0 rounded-full border bg-white p-[6px]">
          <Camera size={16} />
        </div>
        {/* visually hidden input */}
        <input
          // id="newImage"
          // name="newImage"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const files = e.target.files
            if (files && files.length > 0) {
              setValue("newImage", Array.from(files), { shouldValidate: true })
            }
          }}
        />
      </label>
      <FormProvider {...formMethods}>
        <form className="flex flex-col gap-[4px]" onSubmit={handleSubmit(onSubmit)}>
          <p>닉네임</p>
          <InputText
            id="nickname"
            value={watch("nickname")}
            onChange={(e) => {
              setValue("nickname", e.target.value, { shouldValidate: true, shouldDirty: true })
            }}
            maxLength={10}
          />
          <Button
            type="submit"
            className="mt-[24px] self-end bg-black px-[20px] py-[12px] text-white md:mt-[36px] md:px-[28px]"
            disabled={isSubmitting}
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
