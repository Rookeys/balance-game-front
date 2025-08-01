import LoginConfirmModal from "@/components/modal/LoginConfirmModal"
import ToasterWithTheme from "@/components/ToasterWithTheme"
import "@/styles/globals.css"
import "@/styles/reset.css"
import { cn } from "@/utils/cn"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { PretendardVariable, SBAggroMedium } from "./fonts"
import { GoogleAnalytics } from "@next/third-parties/google"

const title = "짜릿한 선택! 짱픽 - 이상형 월드컵"
const description =
  "짱픽은 나만의 이상형 월드컵을 만들고 공유하는 플랫폼입니다. 다양한 주제로 월드컵 게임을 즐겨보세요!"
const images = [
  {
    url: "/images/zznpk_og_image.png",
    alt: "zznpk OG IMAGE"
  }
]

export const metadata: Metadata = {
  metadataBase: new URL("https://zznpk.com"),
  keywords: [
    "짱픽",
    "zznpk",
    "이상형 월드컵",
    "아이돌 이상형 월드컵",
    "연예인 이상형 월드컵",
    "캐릭터 월드컵",
    "음식 이상형 월드컵",
    "이상형 월드컵 만들기",
    "밸런스게임",
    "심심할 때 할만한 게임",
    "친구랑 할 게임",
    "이상형 테스트",
    "재밌는 웹게임",
    "인기 월드컵 게임"
  ],
  title: {
    default: title,
    template: "짱픽 | %s"
  },
  description,
  openGraph: {
    siteName: title,
    title: {
      default: title,
      template: "짱픽 | %s"
    },
    description,
    type: "website",
    images,
    url: "https://zznpk.com"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images
  }
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta name="naver-site-verification" content="c82e16f6e793b893a8207a20197977fcf80170a0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="canonical" href="https://zznpk.com" />
      </head>
      <body
        className={cn(
          PretendardVariable.variable,
          SBAggroMedium.variable,
          "font-pretendard text-label-normal antialiased"
        )}
      >
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <ThemeProvider defaultTheme="light">
          <div id="portal" />
          {children}
          <LoginConfirmModal />
          <ToasterWithTheme />
        </ThemeProvider>
      </body>
    </html>
  )
}
