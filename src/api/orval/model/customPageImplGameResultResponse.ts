import type { GameResultResponse } from "./gameResultResponse"
import type { PageableObject } from "./pageableObject"
import type { SortObject } from "./sortObject"

export interface CustomPageImplGameResultResponse {
  content?: GameResultResponse[]
  pageable?: PageableObject
  hasPrev?: boolean
  hasNext?: boolean
  totalElements?: number
  last?: boolean
  totalPages?: number
  first?: boolean
  size?: number
  number?: number
  sort?: SortObject
  numberOfElements?: number
  empty?: boolean
}
