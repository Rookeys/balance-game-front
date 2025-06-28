export type BannerItem = {
  src: string
  mdSrc: string
  title: string
  description: string
  link?: string
}

export const banner: BannerItem[] = [
  {
    src: "/images/banner/banner_making_sm.webp",
    mdSrc: "/images/banner/banner_making_lg.webp",
    title: "정식 런칭 기념 이벤트",
    description: "이상형 월드컵 만들고\n스타벅스 기프티콘 받자!",
    link: "https://www.instagram.com/zzn_pk/#"
  },
  {
    src: "/images/banner/play_banner_sm.webp",
    mdSrc: "/images/banner/play_banner_lg.webp",
    title: "인기 월드컵 플레이하기",
    description: "심심함을 짜릿함으로!\n월드컵 신나게 즐기기"
  },
  {
    src: "/images/banner/download_banner_sm.webp",
    mdSrc: "/images/banner/download_banner_lg.webp",
    title: "플레이 스토어 다운로드",
    description: "언제 어디서나 짜릿하게!\n앱에서 짱픽만나기",
    link: "https://play.google.com/store/apps/details?id=com.rookeys.balancegame"
  }
]
