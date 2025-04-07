import type { SortObject } from "./sortObject"

export interface PageableObject {
  offset?: number
  sort?: SortObject
  unpaged?: boolean
  paged?: boolean
  pageNumber?: number
  pageSize?: number
}
