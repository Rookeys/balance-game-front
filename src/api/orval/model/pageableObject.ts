import type { SortObject } from "./sortObject"

export interface PageableObject {
  offset?: number
  sort?: SortObject
  paged?: boolean
  pageNumber?: number
  pageSize?: number
  unpaged?: boolean
}
