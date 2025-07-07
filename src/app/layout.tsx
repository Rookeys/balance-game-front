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
  "짱픽은 나만의 이상형 월드컵을 만들고, 유저들과 공유하며 함께 즐길 수 있는 플랫폼입니다. 다양한 게임을 제작하고 즐기세요!"
const images = [
  {
    url: "/images/zznpk_og_image.png",
    alt: "zznpk OG IMAGE"
  }
]

export const metadata: Metadata = {
  metadataBase: new URL("https://zznpk.com"),
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
    title,
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
