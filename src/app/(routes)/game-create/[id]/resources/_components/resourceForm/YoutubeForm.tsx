"use client"
import {
  getGetResourcesQueryKey,
  useUpdateResource
} from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { GameResourceRequest } from "@/api/orval/model/gameResourceRequest"
import { GameResourceRequestType } from "@/api/orval/model/gameResourceRequestType"
import { GameResourceResponse } from "@/api/orval/model/gameResourceResponse"
import InputText from "@/components/form/inputText/InputText"
import { putGameYoutubeResourceSchema, PutGameYoutubeResourceType } from "@/validations/gameResourceSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams } from "next/navigation"
import { FormProvider, useForm } from "react-hook-form"
import YoutubeThumbnailBox from "../YoutubeThumbnailBox"
import FormAction from "./FormAction"
import { useQueryClient } from "@tanstack/react-query"

// const InputErrorMessage = dynamic(() => import("@/components/form/_components").then((mod) => mod.InputErrorMessage))

export default function YoutubeForm(props: GameResourceResponse) {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const { mutateAsync: UpdateYoutubeResource } = useUpdateResource()

  const formMethods = useForm<PutGameYoutubeResourceType>({
    defaultValues: {
      title: props.title,
      content: props.content,
      type: GameResourceRequestType.LINK,
      startSec: props.startSec ?? 0,
      endSec: props.endSec ?? 0
    },
    resolver: zodResolver(putGameYoutubeResourceSchema)
  })

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting }
  } = formMethods

  const onSubmit = async (data: PutGameYoutubeResourceType) => {
    const putGameResourceRequest = {
      ...data
    } satisfies GameResourceRequest

    await UpdateYoutubeResource({
      gameId: Number(id),
      resourceId: Number(props.resourceId),
      data: putGameResourceRequest
    })

    await queryClient.invalidateQueries({ queryKey: getGetResourcesQueryKey(Number(id)) })
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex w-fit border-b border-dark dark:border-gray">
          <article className="w-[180px] flex-shrink-0 border-r border-dark dark:border-gray">
            <YoutubeThumbnailBox url={watch("content") ?? ""} start={watch("startSec")} end={watch("endSec")} />
          </article>
          <article className="w-[180px] flex-shrink-0 border-r border-dark p-4 dark:border-gray">
            <InputText
              id="name"
              value={watch("title")}
              onChange={(e) => setValue("title", e.target.value, { shouldValidate: true })}
            />
          </article>
          <article className="w-[360px] flex-shrink-0 border-r border-dark p-4 dark:border-gray">
            <div className="flex flex-col gap-[12px]">
              <InputText
                id="url"
                value={watch("content")}
                onChange={(e) => setValue("content", e.target.value, { shouldValidate: true })}
              />
              {/* // Todo 에러 발생 시 토스트메세지 출력하는것도 괜찮을것 같음 */}
              {/* {!!errors.url?.message && <InputErrorMessage id={"url"} errorMessage={errors.url?.message} />} */}
              <div className="flex gap-[12px]">
                <InputText
                  id="startTime"
                  className="max-w-[100px]"
                  placeholder="시작(초)"
                  type="text"
                  pattern="\d*"
                  value={watch("startSec") ?? ""}
                  // onChange={(e) => setValue("startSec", Number(e.target.value), { shouldValidate: true })}
                  onChange={(e) => {
                    const value = e.target.value
                    // 숫자 외의 문자가 입력되지 않도록 처리
                    if (/^\d*$/.test(value)) {
                      setValue("startSec", value === "" ? undefined : Number(value), { shouldValidate: true })
                    }
                  }}
                />
                <InputText
                  id="endTime"
                  className="max-w-[100px]"
                  placeholder="종료(초)"
                  type="text"
                  pattern="\d*"
                  value={watch("endSec") ?? ""}
                  // onChange={(e) => setValue("endSec", Number(e.target.value), { shouldValidate: true })}
                  onChange={(e) => {
                    const value = e.target.value
                    if (/^\d*$/.test(value)) {
                      setValue("endSec", value === "" ? undefined : Number(value), { shouldValidate: true })
                    }
                  }}
                />
              </div>
            </div>
          </article>
          <article className="flex w-[180px] flex-shrink-0 items-center justify-center border-r border-dark p-4 dark:border-gray">
            <p>{(((props?.winningNums || 0) / (props.totalPlayNums || 1)) * 100).toFixed(2)} %</p>
          </article>
          <article className="w-[180px] flex-shrink-0 p-4">
            <FormAction resourceId={props.resourceId as number} name={props.title} disabled={isSubmitting} />
          </article>
        </section>
      </form>
    </FormProvider>
  )
}
