import { GetMainGameListCategory } from "@/api/orval/model/getMainGameListCategory"

export const GetMainGameListCategoryWithViewAll = {
  ...GetMainGameListCategory,
  VIEW_ALL: "VIEW_ALL"
} as const

export type GetMainGameListCategoryWithViewAll =
  (typeof GetMainGameListCategoryWithViewAll)[keyof typeof GetMainGameListCategoryWithViewAll]
