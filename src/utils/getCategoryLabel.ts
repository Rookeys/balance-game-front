import { categories } from "@/constants/categories"

export function getCategoryLabel(value: string | undefined): string {
  if (!value) return "카테고리"
  const found = categories.find((c) => c.value === value.toUpperCase())
  return found?.label ?? "카테고리"
}
