"use client"
import {
  getGetGameStatusQueryKey,
  useGetGameStatus,
  useSaveGame,
  useUpdateGameStatus
} from "@/api/orval/client/game-room-controller/game-room-controller"
import { GameRequest } from "@/api/orval/model/gameRequest"
import { GameRequestAccessType } from "@/api/orval/model/gameRequestAccessType"
import { GameRequestCategoriesItem } from "@/api/orval/model/gameRequestCategoriesItem"
import { Button } from "@/components/Button"
import { InputErrorMessage, InputLabel } from "@/components/form/_components"
import InputText from "@/components/form/inputText/InputText"
import { useAsyncRoutePush } from "@/hooks/useAsyncRoutePush"
import { postGameSchema } from "@/validations/gameSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

type CategoryType = (typeof GameRequestCategoriesItem)[keyof typeof GameRequestCategoriesItem]

export default function GameForm() {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const { data } = useGetGameStatus(Number(id), { query: { enabled: !!id } })

  const {
    watch,
    setValue,
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm<GameRequest>({
    values: {
      title: data?.title ?? "",
      isBlind: false,
      description: data?.description ?? "",
      categories: data?.categories ?? [],
      isNamePrivate: false,
      accessType: data?.accessType ?? GameRequestAccessType.PUBLIC,
      inviteCode: data?.inviteCode ?? ""
    },
    // values: mapValues(data ?? {}, (value) => value ?? ""),
    resolver: zodResolver(postGameSchema)
  })

  const asyncPush = useAsyncRoutePush()

  const { mutateAsync: CreateGame } = useSaveGame()
  const { mutateAsync: UpdateGame } = useUpdateGameStatus()

  const selectedCategories = watch("categories")

  const categories = Object.values(GameRequestCategoriesItem)

  const handleCategoryChange = (category: CategoryType) => {
    let newCategories = [...selectedCategories]
    if (newCategories.includes(category)) {
      newCategories = newCategories.filter((c) => c !== category)
    } else if (newCategories.length < 2) {
      newCategories.push(category)
    }
    setValue("categories", newCategories)
  }

  const onSubmit = async (data: GameRequest) => {
    try {
      console.log("data", data)
      if (id) {
        await UpdateGame({ gameId: Number(id), data })
        queryClient.invalidateQueries({ queryKey: getGetGameStatusQueryKey(Number(id)) })
        await asyncPush(`/game-create/${id}/medias`)
      } else {
        const res = await CreateGame({ data })
        await asyncPush(`/game-create/${res}/medias`)
      }
    } catch {
      toast.error("오류가 발생했습니다. 다시 시도해주세요")
    }
  }

  return (
    <form
      className="flex w-full max-w-[500px] flex-col items-start justify-center gap-[28px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputText
        className="w-full"
        id="title"
        label="제목"
        // {...register("title")}
        value={watch("title")}
        onChange={(e) => setValue("title", e.target.value)}
        errorMessage={errors.title?.message}
      />
      <InputText
        className="w-full"
        id="description"
        label="설명"
        // {...register("description")}
        value={watch("description")}
        onChange={(e) => setValue("description", e.target.value)}
        errorMessage={errors.description?.message}
      />
      <article className="flex flex-col gap-[4px]">
        <InputLabel label="카테고리 선택" />
        {/* <Controller
          name="categories"
          control={control}
          render={({ field }) => <Select {...field} placeholder="카테고리 선택" items={categories} />}
        /> */}
        {!!errors.categories?.message && (
          <InputErrorMessage id={"categories"} errorMessage={errors.categories?.message} />
        )}
      </article>
      <article className="flex flex-col gap-[4px]">
        <InputLabel label="제작자 표시 (익명으로 설정 시 팔로워들이 확인할 수 없습니다)" />
        {/* <Controller
          name="isNamePrivate"
          control={control}
          render={({ field }) => <RadioGroup {...field} items={isNamePrivateItems} />}
        /> */}
        <Controller
          name="accessType"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={GameRequestAccessType.PUBLIC}
                  checked={field.value === GameRequestAccessType.PUBLIC}
                  onChange={() => field.onChange(GameRequestAccessType.PUBLIC)}
                />
                <span>전체공개</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={GameRequestAccessType.PROTECTED}
                  checked={field.value === GameRequestAccessType.PROTECTED}
                  onChange={() => field.onChange(GameRequestAccessType.PROTECTED)}
                />
                <span>일부공개</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={GameRequestAccessType.PRIVATE}
                  checked={field.value === GameRequestAccessType.PRIVATE}
                  onChange={() => field.onChange(GameRequestAccessType.PRIVATE)}
                />
                <span>비공개</span>
              </label>
            </div>
          )}
        />
      </article>
      <article className="flex flex-col gap-[4px]">
        <InputLabel label="썸네일 블라인드" />
        <Controller
          name="isBlind"
          control={control}
          render={({ field }) => (
            <div className="flex space-x-4">
              <button
                type="button"
                className={`rounded-lg px-4 py-2 ${field.value ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => field.onChange(true)}
              >
                True
              </button>
              <button
                type="button"
                className={`rounded-lg px-4 py-2 ${!field.value ? "bg-red-500 text-white" : "bg-gray-300"}`}
                onClick={() => field.onChange(false)}
              >
                False
              </button>
            </div>
          )}
        />
      </article>
      <div>
        <h3 className="text-md font-semibold">카테고리 선택 (최대 2개)</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`rounded-lg border px-3 py-1 ${selectedCategories.includes(category) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => handleCategoryChange(category as CategoryType)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <InputText
        className="w-full"
        id="inviteCode"
        label="초대코드"
        // {...register("inviteCode")}
        value={watch("inviteCode")}
        onChange={(e) => setValue("inviteCode", e.target.value)}
        errorMessage={errors.inviteCode?.message}
      />
      <p className="text-sm text-gray">
        ⭐️ 게임의 부적절함을 확인하기 위해 일부공개 게임은 개발자가 확인할 수 있습니다
      </p>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary text-light hover:bg-primary-60 dark:bg-primary-70 dark:hover:bg-primary-80"
      >
        다음
      </Button>
    </form>
  )
}

// "use client"
// import { useForm, Controller } from "react-hook-form"

// const PrivacyOptions = () => {
//   const { control, handleSubmit } = useForm({
//     defaultValues: { privacy: "public", toggle: false, booleanOption: true }
//   })

//   const onSubmit = (data: { privacy: string; toggle: boolean; booleanOption: boolean }) => {
//     console.log("Selected Privacy Option:", data.privacy)
//     console.log("Toggle State:", data.toggle)
//     console.log("Boolean Option State:", data.booleanOption)
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="w-80 space-y-4 rounded-lg border p-4">
//       <h2 className="text-lg font-semibold">공개 범위 설정</h2>
//       <Controller
//         name="privacy"
//         control={control}
//         render={({ field }) => (
//           <div className="flex flex-col space-y-2">
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 value="public"
//                 checked={field.value === "public"}
//                 onChange={() => field.onChange("public")}
//               />
//               <span>전체공개</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 value="partial"
//                 checked={field.value === "partial"}
//                 onChange={() => field.onChange("partial")}
//               />
//               <span>일부공개</span>
//             </label>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 value="private"
//                 checked={field.value === "private"}
//                 onChange={() => field.onChange("private")}
//               />
//               <span>비공개</span>
//             </label>
//           </div>
//         )}
//       />
//       <Controller
//         name="toggle"
//         control={control}
//         render={({ field }) => (
//           <label className="flex cursor-pointer items-center space-x-2">
//             <div
//               className={`flex h-6 w-12 items-center rounded-full bg-gray-300 p-1 duration-300 ${field.value ? "bg-blue-500" : ""}`}
//               onClick={() => field.onChange(!field.value)}
//             >
//               <div
//                 className={`h-5 w-5 transform rounded-full bg-white shadow-md duration-300 ${field.value ? "translate-x-6" : ""}`}
//               />
//             </div>
//             <span>{field.value ? "활성화" : "비활성화"}</span>
//           </label>
//         )}
//       />
// <Controller
//   name="booleanOption"
//   control={control}
//   render={({ field }) => (
//     <div className="flex space-x-4">
//       <button
//         type="button"
//         className={`rounded-lg px-4 py-2 ${field.value ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//         onClick={() => field.onChange(true)}
//       >
//         True
//       </button>
//       <button
//         type="button"
//         className={`rounded-lg px-4 py-2 ${!field.value ? "bg-red-500 text-white" : "bg-gray-300"}`}
//         onClick={() => field.onChange(false)}
//       >
//         False
//       </button>
//     </div>
//   )}
// />
//       <button type="submit" className="rounded-lg bg-blue-500 px-4 py-2 text-white">
//         저장
//       </button>
//     </form>
//   )
// }

// export default PrivacyOptions
