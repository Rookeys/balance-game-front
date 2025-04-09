import { GetMainGameListSortType } from "@/api/orval/model/getMainGameListSortType"
import { GetParentCommentsByGameResource1SortType } from "@/api/orval/model/getParentCommentsByGameResource1SortType"
import { GetResourcesUsingPageSortType } from "@/api/orval/model/getResourcesUsingPageSortType"

export const gameListFilters = [
  { value: GetMainGameListSortType.RECENT, label: "최신순" },
  { value: GetMainGameListSortType.WEEK, label: "인기순" }
]

export const resourceListFilters = [
  { value: GetResourcesUsingPageSortType.RESENT, label: "최신순" },
  { value: GetResourcesUsingPageSortType.OLD, label: "등록순" },
  { value: GetResourcesUsingPageSortType.WIN_RATE_DESC, label: "승률 높" },
  { value: GetResourcesUsingPageSortType.WIN_RATE_ASC, label: "승률 낮" }
]

export const commentListFilters = [
  { value: GetParentCommentsByGameResource1SortType.RECENT, label: "최신순" },
  { value: GetParentCommentsByGameResource1SortType.OLD, label: "등록순" },
  { value: GetParentCommentsByGameResource1SortType.LIKE_DESC, label: "좋아요 높" },
  { value: GetParentCommentsByGameResource1SortType.LIKE_ASC, label: "좋아요 낮" }
]
