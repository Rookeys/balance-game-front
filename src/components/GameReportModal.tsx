"use client"

import { Check, XIcon } from "lucide-react"
import { FieldValues, useForm } from "react-hook-form"
import { Button } from "./Button"
import ModalWrapper from "./modal/ModalWrapper"
import { sleep } from "@/utils/sleep"
import { COLORS } from "@/styles/theme/colors"
import InputText from "./form/inputText/InputText"

interface Params {
  id?: string
  onClose?: () => void
  overlayClose?: boolean
  // onClick?: () => void
}

interface ReportFormData {
  obscenity?: boolean
  disgust?: boolean
  copyright?: boolean
  etc?: boolean
}

const reportItems: { id: keyof ReportFormData; label: string }[] = [
  { id: "obscenity", label: "음란성 콘텐츠" },
  { id: "disgust", label: "혐오감 유발 컨텐츠" },
  { id: "copyright", label: "개인정보 또는 저작권 침해" },
  { id: "etc", label: "기타" }
]

export default function GameReportModal({ id, onClose, overlayClose }: Params) {
  const {
    handleSubmit,
    register,
    watch,
    formState: { isSubmitting }
  } = useForm<ReportFormData>({
    defaultValues: {
      obscenity: false,
      disgust: false,
      copyright: false,
      etc: false
    }
  })

  const onSubmit = async (data: FieldValues) => {
    await sleep(2000)
    alert(`${id}신고 ${JSON.stringify(data)}`)
  }

  return (
    <ModalWrapper onClose={onClose} overlayClose={overlayClose}>
      <section
        className="z-[999] mx-[16px] w-full max-w-[500px] rounded-[16px] bg-[#FFFFFF] px-[16px] pt-[16px]"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="flex items-center justify-end">
            <XIcon size={24} color={COLORS.NEUTRAL_700} className="cursor-pointer" onClick={onClose} />
          </section>
          <section className="flex flex-col gap-[24px] py-[20px]">
            <article className="flex flex-col gap-[4px]">
              <p className="font-sb-aggro text-heading-4 text-label-normal md:text-heading-3">
                어떤 사유로 신고하시나요?
              </p>
              <p className="text-label-regular text-label-neutral">중복 선택 가능</p>
            </article>
            <article>
              {reportItems.map((data) => (
                <div className="flex items-center gap-[12px] py-[16px]" key={data.id}>
                  <div className="relative h-[20px] w-fit">
                    <input
                      id={data.id}
                      type="checkbox"
                      className="h-[20px] w-[20px] appearance-none rounded-[4px] border-[1px] border-line-normal checked:bg-primary-normal"
                      {...register(data.id as keyof ReportFormData)}
                    />
                    {watch(data.id) && (
                      <div className="pointer-events-none absolute start-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <Check size={16} stroke={COLORS.WHITE} />
                      </div>
                    )}
                  </div>
                  <label className="text-body-regular text-label-normal" htmlFor={data.id}>
                    {data.label}
                  </label>
                </div>
              ))}
              {watch("etc") && <InputText className="w-full" id="etcReason" placeholder="상세 내용을 작성해 주세요." />}
            </article>
            <p className="text-label-regular text-label-alternative">
              운영 방침에 따라 신고 사유에 해당하는지 검토 후 처리 예정입니다.
            </p>
            <Button className="mt-[16px]" type="submit" disabled={isSubmitting}>
              신고하기
            </Button>
          </section>
        </form>
      </section>
    </ModalWrapper>
  )
}
