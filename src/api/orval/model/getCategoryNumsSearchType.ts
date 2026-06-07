export type GetCategoryNumsSearchType = (typeof GetCategoryNumsSearchType)[keyof typeof GetCategoryNumsSearchType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetCategoryNumsSearchType = {
  TITLE: "TITLE",
  NICKNAME: "NICKNAME"
} as const
