import { GameRequest } from "@/api/orval/model/gameRequest"
import { GameRequestCategoriesItem } from "@/api/orval/model/gameRequestCategoriesItem"
import { Button } from "@/components/Button"
import { cn } from "@/utils/cn"
import { useFormContext } from "react-hook-form"
import Textarea from "../../textarea/Textarea"

type CategoryType = (typeof GameRequestCategoriesItem)[keyof typeof GameRequestCategoriesItem]

export default function GameInformationForm() {
  const { watch, setValue } = useFormContext<GameRequest>()

  const categories = Object.values(GameRequestCategoriesItem)

  const selectedCategories = watch("categories")

  const handleCategoryChange = (category: CategoryType) => {
    if (!!selectedCategories) {
      let newCategories = [...selectedCategories]
      if (newCategories.includes(category)) {
        newCategories = newCategories.filter((c) => c !== category)
      } else if (newCategories.length < 2) {
        newCategories.push(category)
      }
      setValue("categories", newCategories)
    }
  }

  return (
    <section className="flex w-full flex-col gap-[40px]">
      <article className="flex flex-col gap-[4px]">
        <div className="flex gap-[4px]">
          <p>월드컵 정보를 입력해 주세요</p>
          <p>🎮</p>
        </div>
        <p>
          다른 사람들이 월드컵을 플레이하기 전 보게 될 거예요. 개성이 드러나는 제목과 설명으로 나만의 월드컵을 표현해
          보세요!
        </p>
      </article>
      <article className="flex flex-col gap-[12px]">
        <Textarea
          id="title"
          value={watch("title")}
          onChange={(e) => {
            if (e.target.value.length <= 50) {
              setValue("title", e.target.value, { shouldValidate: true, shouldDirty: true })
            }
          }}
          placeholder="제목을 입력해주세요"
          label="제목"
          maxLength={50}
          disableEnter
          rows={3}
        />
      </article>
      <article className="flex flex-col gap-[12px]">
        <Textarea
          id="description"
          value={watch("description")}
          onChange={(e) => {
            if (e.target.value.length <= 100) {
              setValue("description", e.target.value, { shouldValidate: true, shouldDirty: true })
            }
          }}
          placeholder="설명을 입력해주세요"
          label="설명"
          maxLength={100}
          disableEnter
          rows={3}
        />
      </article>
      <article className="flex flex-col gap-[12px]">
        <div className="flex flex-col gap-[4px]">
          <p>카테고리</p>
          <p>월드컵과 가장 잘 맞는 카테고리를 골라주세요. 카테고리는 최대 두 개까지 선택할 수 있어요.</p>
        </div>
        <div className="flex flex-wrap gap-[12px] rounded-[12px] border px-[16px] py-[20px]">
          {categories.map((category) => (
            <Button
              key={category}
              type="button"
              variant="custom"
              className={cn(
                "rounded-[4px] px-[8px] py-[4px]",
                selectedCategories?.includes(category) ? "bg-blue-50 text-white" : "bg-gray-30"
              )}
              onClick={() => handleCategoryChange(category as CategoryType)}
            >
              {category}
            </Button>
          ))}
        </div>
      </article>
    </section>
  )
}
