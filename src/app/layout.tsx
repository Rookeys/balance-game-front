import LoginConfirmModal from "@/components/modal/LoginConfirmModal"
import ToasterWithTheme from "@/components/ToasterWithTheme"
import "@/styles/globals.css"
import "@/styles/reset.css"
import { cn } from "@/utils/cn"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { PretendardVariable, SBAggroMedium } from "./fonts"

const title = "짱픽 - 이상형 월드컵 커뮤니티"
const description =
  "짱픽은 이상형 월드컵을 직접 만들고 공유할 수 있는 커뮤니티 플랫폼입니다. 나만의 월드컵 게임을 제작하고 친구들과 함께 즐겨보세요."
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
    type: "website",
    description,
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body
        className={cn(
          PretendardVariable.variable,
          SBAggroMedium.variable,
          "font-pretendard text-label-normal antialiased"
        )}
      >
        <ThemeProvider>
          <div id="portal" />
          {children}
          <LoginConfirmModal />
          <ToasterWithTheme />
        </ThemeProvider>
      </body>
    </html>
  )
}
