import type { GameCategoryNumsResponseCategoryNums } from "./gameCategoryNumsResponseCategoryNums"

export interface GameCategoryNumsResponse {
  /** 전체 게임 수 */
  totalNums?: number
  /** 각 카테고리에 포함된 게임 수 */
  categoryNums?: GameCategoryNumsResponseCategoryNums
}
