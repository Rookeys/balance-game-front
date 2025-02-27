"use client"
import InputText from "@/components/form/inputText/InputText"
import { FormProvider, useForm, type FieldValues } from "react-hook-form"
import type { ResourceType } from "../../page"
import YoutubeThumbnailBox from "../YoutubeThumbnailBox"
import FormAction from "./FormAction"

// const InputErrorMessage = dynamic(() => import("@/components/form/_components").then((mod) => mod.InputErrorMessage))

type YoutubeResourceType = {
  name: string
  url: string
  start?: number
  end?: number
}

export default function YoutubeForm(props: ResourceType) {
  const formMethods = useForm<YoutubeResourceType>({
    defaultValues: {
      name: props.name,
      url: props.url,
      start: props.start,
      end: props.end
    }
  })

  const { handleSubmit, setValue, watch } = formMethods

  const onSubmit = (data: FieldValues) => {
    console.log("data", data)
    // Todo start, end 가 0일때는 값 보내지않기
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex w-fit border-b border-dark dark:border-gray">
          <article className="w-[180px] flex-shrink-0 border-r border-dark dark:border-gray">
            <YoutubeThumbnailBox url={watch("url")} start={watch("start")} end={watch("end")} />
          </article>
          <article className="w-[180px] flex-shrink-0 border-r border-dark p-4 dark:border-gray">
            <InputText
              id="name"
              value={watch("name")}
              onChange={(e) => setValue("name", e.target.value, { shouldValidate: true })}
            />
          </article>
          <article className="w-[360px] flex-shrink-0 border-r border-dark p-4 dark:border-gray">
            <div className="flex flex-col gap-[12px]">
              <InputText
                id="url"
                value={watch("url")}
                onChange={(e) => setValue("url", e.target.value, { shouldValidate: true })}
              />
              {/* // Todo 에러 발생 시 토스트메세지 출력하는것도 괜찮을것 같음 */}
              {/* {!!errors.url?.message && <InputErrorMessage id={"url"} errorMessage={errors.url?.message} />} */}
              <div className="flex gap-[12px]">
                <InputText
                  id="startTime"
                  className="max-w-[100px]"
                  placeholder="시작(초)"
                  type="number"
                  min={0}
                  value={watch("start")}
                  onChange={(e) => setValue("start", Number(e.target.value), { shouldValidate: true })}
                />
                <InputText
                  id="endTime"
                  className="max-w-[100px]"
                  placeholder="종료(초)"
                  type="number"
                  min={0}
                  value={watch("end")}
                  onChange={(e) => setValue("end", Number(e.target.value), { shouldValidate: true })}
                />
              </div>
            </div>
          </article>
          <article className="flex w-[180px] flex-shrink-0 items-center justify-center border-r border-dark p-4 dark:border-gray">
            <p>{props.winRate}</p>
          </article>
          <article className="w-[180px] flex-shrink-0 p-4">
            <FormAction id={props.id} name={props.name} />
          </article>
        </section>
      </form>
    </FormProvider>
  )
}
