"use client"

import { useSubmitGamesReport } from "@/api/orval/client/game-report-controller/game-report-controller"
import { GameReportRequestTargetType } from "@/api/orval/model/gameReportRequestTargetType"
import { COLORS } from "@/styles/theme/colors"
import { log } from "@/utils/log"
import { reportGameSchema, ReportGameType } from "@/validations/reportSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, XIcon } from "lucide-react"
import { FieldValues, useForm } from "react-hook-form"
import { Button } from "./Button"
import InputText from "./form/inputText/InputText"
import ModalWrapper from "./modal/ModalWrapper"
import axios from "axios"
import { toast } from "sonner"

interface Params {
  id?: string
  onClose?: () => void
  overlayClose?: boolean
}

const reportItems: { id: keyof ReportGameType; label: string; value: string }[] = [
  { id: "sexual", label: "음란성 콘텐츠", value: "SEXUAL_CONTENT" },
  { id: "hateful", label: "혐오감 유발 컨텐츠", value: "HATEFUL_CONTENT" },
  { id: "copyright", label: "개인정보 또는 저작권 침해", value: "COPYRIGHT" },
  { id: "etc", label: "기타", value: "ETC" }
]

export default function GameReportModal({ id, onClose, overlayClose }: Params) {
  const { mutateAsync: reportGame } = useSubmitGamesReport()

  const {
    handleSubmit,
    register,
    watch,
    formState: { isSubmitting }
  } = useForm<ReportGameType>({
    defaultValues: {
      sexual: false,
      hateful: false,
      copyright: false,
      etc: false,
      etcReason: ""
    },
    resolver: zodResolver(reportGameSchema)
  })

  const onSubmit = async (data: FieldValues) => {
    try {
      const selectedValues = reportItems.filter((item) => data[item.id]).map((item) => item.value)

      await reportGame({
        gameId: Number(id),
        data: { targetType: GameReportRequestTargetType.GAME, reasons: selectedValues, etcReason: data.etcReason }
      })
      toast.success("게임을 신고하였습니다.")
      if (onClose) {
        onClose()
      }
    } catch (error) {
      log(error)
      if (axios.isAxiosError(error)) {
        const errorCode = error.response?.data?.errorCode
        if (errorCode === "400_9") {
          toast.error("이미 신고한 댓글입니다.")
        } else {
          toast.error("오류가 발생했습니다.")
        }
      }
    }
  }

  return (
    <ModalWrapper onClose={onClose} overlayClose={overlayClose}>
      <section
        className="z-[999] h-full w-full max-w-[500px] rounded-[16px] bg-background px-[16px] pt-[16px]"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="flex items-center justify-end">
            <XIcon size={24} color={COLORS.NEUTRAL_700} className="cursor-pointer" onClick={onClose} />
          </section>
          <section className="flex flex-col gap-[24px] py-[20px]">
            <article className="flex flex-col gap-[4px]">
              <p className="font-sb-aggro-medium text-heading-4 text-label-normal md:text-heading-3">
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
                      {...register(data.id as keyof ReportGameType)}
                    />
                    {watch(data.id) && (
                      <div className="pointer-events-none absolute start-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <Check size={16} stroke={COLORS.WHITE} />
                      </div>
                    )}
                  </div>
                  <label className="text-body2-regular text-label-normal" htmlFor={data.id}>
                    {data.label}
                  </label>
                </div>
              ))}
              {watch("etc") && (
                <InputText
                  className="w-full"
                  id="etcReason"
                  placeholder="상세 내용을 작성해 주세요."
                  {...register("etcReason")}
                />
              )}
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
