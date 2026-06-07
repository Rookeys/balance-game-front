import type { GetCategoryNumsSearchType } from "./getCategoryNumsSearchType"

export type GetCategoryNumsParams = {
  /**
   * 검색어
   */
  search?: string
  /**
   * 검색 타입 (TITLE: 제목, NICKNAME: 닉네임)
   */
  searchType?: GetCategoryNumsSearchType
}
