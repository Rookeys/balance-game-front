import type { GameResourceResponse } from "./gameResourceResponse"
import type { SortObject } from "./sortObject"
import type { PageableObject } from "./pageableObject"

export interface PageGameResourceResponse {
  totalElements?: number
  totalPages?: number
  first?: boolean
  last?: boolean
  size?: number
  content?: GameResourceResponse[]
  number?: number
  sort?: SortObject
  numberOfElements?: number
  pageable?: PageableObject
  empty?: boolean
}
