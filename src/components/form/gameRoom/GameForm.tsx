"use client"
import { useSaveGame, useUpdateGameStatus } from "@/api/orval/client/game-room-controller/game-room-controller"
import {
  getGetMyGameStatusQueryKey,
  useGetMyGameStatus
} from "@/api/orval/client/user-profile-controller/user-profile-controller"
import { GameRequest } from "@/api/orval/model/gameRequest"
import { GameRequestAccessType } from "@/api/orval/model/gameRequestAccessType"
import { useAsyncRoutePush } from "@/hooks/useAsyncRoutePush"
import { useNavigationStore } from "@/store/isGuardEnabled"
import { postGameSchema, PostGameType } from "@/validations/gameSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { FieldErrors, FormProvider, useForm } from "react-hook-form"
import { toast } from "sonner"
import BottomBar from "./_components/BottomBar"
import MobileTab from "./_components/MobileTab"
import SideBar from "./_components/SideBar"

const GameInformationForm = dynamic(() => import("./_components/GameInformationForm"))
const GameAccessForm = dynamic(() => import("./_components/GameAccessForm"))

export default function GameForm() {
  const { id } = useParams()
  const [step, setStep] = useState<1 | 2>(1)
  const setIsGuardEnabled = useNavigationStore((state) => state.setIsGuard)

  const queryClient = useQueryClient()

  const { data } = useGetMyGameStatus(Number(id), { query: { enabled: !!id } })

  const formMethods = useForm<PostGameType>({
    values: {
      title: data?.title ?? "",
      existsBlind: false,
      description: data?.description ?? "",
      categories: data?.categories ?? [],
      existsNamePrivate: false,
      accessType: data?.accessType ?? GameRequestAccessType.PUBLIC,
      inviteCode: data?.inviteCode ?? ""
    },
    resolver: zodResolver(postGameSchema)
  })

  const {
    handleSubmit,
    formState: { isDirty }
  } = formMethods

  useEffect(() => {
    if (isDirty) {
      setIsGuardEnabled(true)
    } else {
      setIsGuardEnabled(false)
    }
  }, [isDirty, setIsGuardEnabled])

  const asyncPush = useAsyncRoutePush()

  const { mutateAsync: CreateGame } = useSaveGame()
  const { mutateAsync: UpdateGame } = useUpdateGameStatus()

  const onSubmit = async (data: PostGameType) => {
    try {
      console.log("data", data)
      setIsGuardEnabled(false)
      if (id) {
        await UpdateGame({ gameId: Number(id), data })
        queryClient.invalidateQueries({ queryKey: getGetMyGameStatusQueryKey(Number(id)) })
        await asyncPush(`/game-create/${id}/medias`)
      } else {
        const res = await CreateGame({ data })
        await asyncPush(`/game-create/${res}/medias`)
      }
    } catch {
      toast.error("오류가 발생했습니다. 다시 시도해주세요")
    }
  }

  const errorHandle = (e: FieldErrors<GameRequest>) => {
    const firstError = Object.values(e)[0]?.message

    if (firstError) {
      toast.error(firstError)
    }
  }

  return (
    <FormProvider {...formMethods}>
      <MobileTab step={step} setStep={setStep} />
      <form
        className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0"
        onSubmit={handleSubmit(onSubmit, errorHandle)}
      >
        {step === 1 && <GameInformationForm />}
        {step === 2 && <GameAccessForm />}
        <SideBar step={step} setStep={setStep} />
        <BottomBar step={step} setStep={setStep} />
      </form>
    </FormProvider>
  )
}

// "use client"
// import {
//   getGetGameStatusQueryKey,
//   useGetGameStatus,
//   useSaveGame,
//   useUpdateGameStatus
// } from "@/api/orval/client/game-room-controller/game-room-controller"
// import { GameRequest } from "@/api/orval/model/gameRequest"
// import { GameRequestAccessType } from "@/api/orval/model/gameRequestAccessType"
// import { GameRequestCategoriesItem } from "@/api/orval/model/gameRequestCategoriesItem"
// import { Button } from "@/components/Button"
// import { InputLabel } from "@/components/form/_components"
// import InputText from "@/components/form/inputText/InputText"
// import Radio from "@/components/form/radio/Radio"
// import { useAsyncRoutePush } from "@/hooks/useAsyncRoutePush"
// import useBeforeUnload from "@/hooks/useBeforeUnload"
// import { postGameSchema } from "@/validations/gameSchema"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useQueryClient } from "@tanstack/react-query"
// import { useParams } from "next/navigation"
// import { Controller, FormProvider, useForm } from "react-hook-form"
// import { toast } from "sonner"

// type CategoryType = (typeof GameRequestCategoriesItem)[keyof typeof GameRequestCategoriesItem]

// export default function GameForm() {
//   const { id } = useParams()
//   useBeforeUnload(!(process.env.NODE_ENV === "development"))

//   const queryClient = useQueryClient()

//   const { data } = useGetGameStatus(Number(id), { query: { enabled: !!id } })

//   const formMethods = useForm<GameRequest>({
//     values: {
//       title: data?.title ?? "",
//       existsBlind: false,
//       description: data?.description ?? "",
//       categories: data?.categories ?? [],
//       existsNamePrivate: false,
//       accessType: data?.accessType ?? GameRequestAccessType.PUBLIC,
//       inviteCode: data?.inviteCode ?? ""
//     },
//     resolver: zodResolver(postGameSchema)
//   })

//   const {
//     watch,
//     setValue,
//     handleSubmit,
//     control,
//     formState: { errors, isSubmitting }
//   } = formMethods

//   const asyncPush = useAsyncRoutePush()

//   const { mutateAsync: CreateGame } = useSaveGame()
//   const { mutateAsync: UpdateGame } = useUpdateGameStatus()

//   const selectedCategories = watch("categories")

//   const categories = Object.values(GameRequestCategoriesItem)

//   const handleCategoryChange = (category: CategoryType) => {
//     let newCategories = [...selectedCategories]
//     if (newCategories.includes(category)) {
//       newCategories = newCategories.filter((c) => c !== category)
//     } else if (newCategories.length < 2) {
//       newCategories.push(category)
//     }
//     setValue("categories", newCategories)
//   }

//   const onSubmit = async (data: GameRequest) => {
//     try {
//       console.log("data", data)
//       if (id) {
//         await UpdateGame({ gameId: Number(id), data })
//         queryClient.invalidateQueries({ queryKey: getGetGameStatusQueryKey(Number(id)) })
//         await asyncPush(`/game-create/${id}/medias`)
//       } else {
//         const res = await CreateGame({ data })
//         await asyncPush(`/game-create/${res}/medias`)
//       }
//     } catch {
//       toast.error("오류가 발생했습니다. 다시 시도해주세요")
//     }
//   }

//   return (
//     <FormProvider {...formMethods}>
//       <form className="" onSubmit={handleSubmit(onSubmit)}>
//         <InputText
//           className="w-full"
//           id="title"
//           label="제목"
//           // {...register("title")}
//           value={watch("title")}
//           onChange={(e) => setValue("title", e.target.value)}
//           errorMessage={errors.title?.message}
//         />
//         <InputText
//           className="w-full"
//           id="description"
//           label="설명"
//           // {...register("description")}
//           value={watch("description")}
//           onChange={(e) => setValue("description", e.target.value)}
//           errorMessage={errors.description?.message}
//         />
//         <article className="flex flex-col gap-[4px]">
//           <InputLabel label="제작자 표시 (익명으로 설정 시 팔로워들이 확인할 수 없습니다)" />
//           <Controller
//             name="existsNamePrivate"
//             control={control}
//             render={({ field }) => (
//               <div className="flex space-x-4">
//                 <button
//                   type="button"
//                   className={`rounded-lg px-4 py-2 ${field.value ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//                   onClick={() => field.onChange(true)}
//                 >
//                   True
//                 </button>
//                 <button
//                   type="button"
//                   className={`rounded-lg px-4 py-2 ${!field.value ? "bg-red-500 text-white" : "bg-gray-300"}`}
//                   onClick={() => field.onChange(false)}
//                 >
//                   False
//                 </button>
//               </div>
//             )}
//           />
//           <InputLabel label="게임공개 여부" />
//           <Controller
//             name="accessType"
//             control={control}
//             render={({ field }) => (
//               <div className="flex flex-col gap-[4px]">
//                 <Radio
//                   id={GameRequestAccessType.PUBLIC}
//                   value={GameRequestAccessType.PUBLIC}
//                   checked={field.value === GameRequestAccessType.PUBLIC}
//                   onChange={() => field.onChange(GameRequestAccessType.PUBLIC)}
//                   label="공개"
//                 />
//                 <Radio
//                   id={GameRequestAccessType.PROTECTED}
//                   value={GameRequestAccessType.PROTECTED}
//                   checked={field.value === GameRequestAccessType.PROTECTED}
//                   onChange={() => field.onChange(GameRequestAccessType.PROTECTED)}
//                   label="일부공개"
//                 />
//                 <Radio
//                   id={GameRequestAccessType.PRIVATE}
//                   value={GameRequestAccessType.PRIVATE}
//                   checked={field.value === GameRequestAccessType.PRIVATE}
//                   onChange={() => field.onChange(GameRequestAccessType.PRIVATE)}
//                   label="비공개"
//                 />
//               </div>
//             )}
//           />
//         </article>
//         <article className="flex flex-col gap-[4px]">
//           <InputLabel label="썸네일 블라인드" />
//           <Controller
//             name="existsBlind"
//             control={control}
//             render={({ field }) => (
//               <div className="flex space-x-4">
//                 <button
//                   type="button"
//                   className={`rounded-lg px-4 py-2 ${field.value ? "bg-blue-500 text-white" : "bg-gray-300"}`}
//                   onClick={() => field.onChange(true)}
//                 >
//                   True
//                 </button>
//                 <button
//                   type="button"
//                   className={`rounded-lg px-4 py-2 ${!field.value ? "bg-red-500 text-white" : "bg-gray-300"}`}
//                   onClick={() => field.onChange(false)}
//                 >
//                   False
//                 </button>
//               </div>
//             )}
//           />
//         </article>
//         <div>
//           <h3 className="text-md font-semibold">카테고리 선택 (최대 2개)</h3>
//           <div className="mt-2 flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 type="button"
//                 className={`rounded-lg border px-3 py-1 ${selectedCategories.includes(category) ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//                 onClick={() => handleCategoryChange(category as CategoryType)}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//         <InputText
//           className="w-full"
//           id="inviteCode"
//           label="초대코드"
//           // {...register("inviteCode")}
//           value={watch("inviteCode")}
//           onChange={(e) => setValue("inviteCode", e.target.value)}
//           errorMessage={errors.inviteCode?.message}
//         />
//         <p className="text-sm text-gray">
//           ⭐️ 게임의 부적절함을 확인하기 위해 일부공개 게임은 개발자가 확인할 수 있습니다
//         </p>
//         <Button
//           type="submit"
//           disabled={isSubmitting}
//           className="bg-primary text-light hover:bg-primary-60 dark:bg-primary-70 dark:hover:bg-primary-80"
//         >
//           다음
//         </Button>
//       </form>
//     </FormProvider>
//   )
// }
