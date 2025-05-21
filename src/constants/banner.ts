export type BannerItem = {
  src: string
  mdSrc: string
  title: string
  description: string
}

export const banner: BannerItem[] = [
  {
    src: "/images/banner/play_banner_sm.webp",
    mdSrc: "/images/banner/play_banner_lg.webp",
    title: "인기 월드컵 플레이하기",
    description: "심심함을 짜릿함으로!"
  },
  {
    src: "/images/banner/download_banner_sm.webp",
    mdSrc: "/images/banner/download_banner_lg.webp",
    title: "안드로이드 앱 다운로드",
    description: "플레이스토어에서 앱을 다운로드 하세요"
  }
]
