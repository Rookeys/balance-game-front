export type GetMainGameListSortType = (typeof GetMainGameListSortType)[keyof typeof GetMainGameListSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMainGameListSortType = {
  old: "old",
  recent: "recent",
  playDesc: "playDesc",
  week: "week",
  month: "month"
} as const
