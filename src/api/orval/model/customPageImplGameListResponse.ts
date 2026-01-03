import type { GameListResponse } from "./gameListResponse"
import type { PageableObject } from "./pageableObject"
import type { SortObject } from "./sortObject"

export interface CustomPageImplGameListResponse {
  content?: GameListResponse[]
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
