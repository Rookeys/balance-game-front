import { authOptions } from "@/auth"
import LoginConfirmModal from "@/components/modal/LoginConfirmModal"
import RouterPreventer from "@/components/RouterPreventer"
import ToasterWithTheme from "@/components/ToasterWithTheme"
import AuthProvider from "@/lib/providers/AuthProvider"
import CookieProvider from "@/lib/providers/CookieProvider"
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider"
import "@/styles/globals.css"
import "@/styles/reset.css"
import { cn } from "@/utils/cn"
import { parseBoolean } from "@/utils/parseBoolean"
import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { NavigationGuardProvider } from "next-navigation-guard"
import { ThemeProvider } from "next-themes"
import { cookies } from "next/headers"
import { PretendardVariable, SBAggroMedium } from "./fonts"

const title = "짱픽"
const description =
  "이상형 월드컵을 직접 만들고 공유하세요! 짱픽에서 나만의 월드컵 게임을 제작하고 친구들과 함께 즐길 수 있습니다."
const images = [
  {
    url: "/images/zznpk_og_image.png",
    alt: "Zznpk OG IMAGE"
  }
]

export const metadata: Metadata = {
  metadataBase: new URL("https://zznpk.com"),
  title: {
    default: title,
    template: "짱픽 | %s"
  },
  description,
  keywords: ["이상형 월드컵", "월드컵 만들기", "이상형 게임", "짱픽", "zznpk"],
  authors: [{ name: "짱픽 Zznpk", url: "https://zznpk.com" }],
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
  const session = await getServerSession(authOptions)
  const cookieStore = await cookies()
  const noBlind = parseBoolean(cookieStore.get("noBlind")?.value)

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={cn(PretendardVariable.variable, SBAggroMedium.variable, "text-label-normal antialiased")}>
        <AuthProvider session={session}>
          <ReactQueryProvider>
            <CookieProvider noBlind={noBlind}>
              <NavigationGuardProvider>
                <ThemeProvider>
                  <div id="portal" />
                  {/* <Header /> */}
                  {/* <HeaderSSG /> */}
                  {children}
                  {/* <Footer /> */}
                  <LoginConfirmModal />
                  <ToasterWithTheme />
                </ThemeProvider>
                <RouterPreventer />
              </NavigationGuardProvider>
            </CookieProvider>
          </ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
