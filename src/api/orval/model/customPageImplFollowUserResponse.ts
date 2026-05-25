import type { FollowUserResponse } from "./followUserResponse"
import type { PageableObject } from "./pageableObject"
import type { SortObject } from "./sortObject"

export interface CustomPageImplFollowUserResponse {
  content?: FollowUserResponse[]
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
