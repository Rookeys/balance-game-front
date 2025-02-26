import type { GameResourceParentCommentResponse } from "./gameResourceParentCommentResponse"
import type { PageableObject } from "./pageableObject"
import type { SortObject } from "./sortObject"

export interface CustomPageImplGameResourceParentCommentResponse {
  content?: GameResourceParentCommentResponse[]
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
