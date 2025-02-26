import type { GameListResponse } from "./gameListResponse"
import type { SortObject } from "./sortObject"
import type { PageableObject } from "./pageableObject"

export interface PageGameListResponse {
  totalElements?: number
  totalPages?: number
  first?: boolean
  last?: boolean
  size?: number
  content?: GameListResponse[]
  number?: number
  sort?: SortObject
  numberOfElements?: number
  pageable?: PageableObject
  empty?: boolean
}
