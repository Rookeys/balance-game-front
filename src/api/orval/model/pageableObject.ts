import type { SortObject } from "./sortObject"

export interface PageableObject {
  paged?: boolean
  pageNumber?: number
  pageSize?: number
  offset?: number
  sort?: SortObject
  unpaged?: boolean
}
