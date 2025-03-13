import localFont from "next/font/local"

// 토스 글꼴 지원이 default, bold 만 지원됨.
// 추 후 여러 weight 가 필요하면 다른 글꼴 사용하기 (우선 400 ~ 700 으로 냅두기)
export const MoneygraphyRounded = localFont({
  src: "../../../public/fonts/Moneygraphy-Rounded.woff",
  variable: "--font-moneygraphy-rounded",
  weight: "400 500 600 700",
  display: "swap"
})
