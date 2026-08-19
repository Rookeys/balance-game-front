"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"

const EXCLUDED_PATH_PREFIXES = ["/sign-in", "/sign-out", "/my-page", "/search", "/game-create"]
const EXCLUDED_PATH_PATTERNS = [/^\/game\/[^/]+\/play$/]

export default function AdsenseScript() {
  const pathname = usePathname()
  const isExcluded =
    EXCLUDED_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    EXCLUDED_PATH_PATTERNS.some((pattern) => pattern.test(pathname))

  if (isExcluded) return null

  return (
    <Script
      id="adsense-script"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6626308320183012"
    />
  )
}
