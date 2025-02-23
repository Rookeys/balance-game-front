import type { GameResourceParentCommentResponse } from "./gameResourceParentCommentResponse"
import type { SortObject } from "./sortObject"
import type { PageableObject } from "./pageableObject"

export interface PageGameResourceParentCommentResponse {
  totalElements?: number
  totalPages?: number
  first?: boolean
  last?: boolean
  size?: number
  content?: GameResourceParentCommentResponse[]
  number?: number
  sort?: SortObject
  numberOfElements?: number
  pageable?: PageableObject
  empty?: boolean
}
