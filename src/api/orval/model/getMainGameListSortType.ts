export type GetMainGameListSortType = (typeof GetMainGameListSortType)[keyof typeof GetMainGameListSortType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetMainGameListSortType = {
  week: "week",
  month: "month",
  playDesc: "playDesc",
  old: "old",
  recent: "recent"
} as const
