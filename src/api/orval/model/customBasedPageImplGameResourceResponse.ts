import type { GameResourceResponse } from "./gameResourceResponse"
import type { PageableObject } from "./pageableObject"
import type { SortObject } from "./sortObject"

export interface CustomBasedPageImplGameResourceResponse {
  content?: GameResourceResponse[]
  pageable?: PageableObject
  hasPrev?: boolean
  hasNext?: boolean
  last?: boolean
  totalElements?: number
  totalPages?: number
  first?: boolean
  size?: number
  number?: number
  sort?: SortObject
  numberOfElements?: number
  empty?: boolean
}
