import type { GameResultResponse } from "./gameResultResponse"
import type { SortObject } from "./sortObject"
import type { PageableObject } from "./pageableObject"

export interface PageGameResultResponse {
  totalElements?: number
  totalPages?: number
  first?: boolean
  last?: boolean
  size?: number
  content?: GameResultResponse[]
  number?: number
  sort?: SortObject
  numberOfElements?: number
  pageable?: PageableObject
  empty?: boolean
}
