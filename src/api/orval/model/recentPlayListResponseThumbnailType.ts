/**
 * 썸네일 타입 (IMAGE, LINK)
 */
export type RecentPlayListResponseThumbnailType =
  (typeof RecentPlayListResponseThumbnailType)[keyof typeof RecentPlayListResponseThumbnailType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const RecentPlayListResponseThumbnailType = {
  IMAGE: "IMAGE",
  LINK: "LINK"
} as const
