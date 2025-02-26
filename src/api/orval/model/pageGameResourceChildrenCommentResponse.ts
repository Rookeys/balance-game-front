import type { GameResourceChildrenCommentResponse } from "./gameResourceChildrenCommentResponse"
import type { SortObject } from "./sortObject"
import type { PageableObject } from "./pageableObject"

export interface PageGameResourceChildrenCommentResponse {
  totalElements?: number
  totalPages?: number
  first?: boolean
  last?: boolean
  size?: number
  content?: GameResourceChildrenCommentResponse[]
  number?: number
  sort?: SortObject
  numberOfElements?: number
  pageable?: PageableObject
  empty?: boolean
}
