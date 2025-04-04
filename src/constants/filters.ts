import { GetMainGameListSortType } from "@/api/orval/model/getMainGameListSortType"
import { GetResourcesSortType } from "@/api/orval/model/getResourcesSortType"

export const gameListFilters = [
  { value: GetMainGameListSortType.RECENT, label: "최신순" },
  { value: GetMainGameListSortType.WEEK, label: "인기순" }
]

export const resourceListFilters = [
  { value: GetResourcesSortType.RESENT, label: "최신순" },
  { value: GetResourcesSortType.OLD, label: "등록순" },
  { value: GetResourcesSortType.WIN_RATE_DESC, label: "승률 높" },
  { value: GetResourcesSortType.WIN_RATE_ASC, label: "승률 낮" }
]
