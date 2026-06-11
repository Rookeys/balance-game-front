import { categories } from "@/constants/categories"
import { createWriteStream } from "fs"
import { finished } from "stream/promises"
import { SitemapStream, streamToPromise } from "sitemap"
import { gameId } from "./gameId.js"

async function generateSitemap() {
  const hostname = "https://zznpk.com"
  const sitemapPath = "src/app/sitemap.xml"
  const sitemap = new SitemapStream({ hostname })
  const writeStream = createWriteStream(sitemapPath)

  sitemap.pipe(writeStream)

  const now = new Date().toISOString()
  const sitemapEntries = [
    {
      url: "/",
      changefreq: "daily" as const,
      priority: 1.0,
      lastmod: now
    },
    ...categories.map((category) => ({
      url: `/category/${category.value.toLowerCase()}`,
      changefreq: "weekly" as const,
      priority: 0.6,
      lastmod: now
    })),
    ...gameId.map((id) => ({
      url: `/game/${id}`,
      changefreq: "weekly" as const,
      priority: 0.8,
      lastmod: now
    }))
  ]

  for (const entry of sitemapEntries) {
    sitemap.write(entry)
  }

  sitemap.end()
  await Promise.all([streamToPromise(sitemap), finished(writeStream)])

  console.log(`✅ Sitemap 생성 완료! (총 ${sitemapEntries.length}개 URL → ${sitemapPath})`)
}

generateSitemap().catch(console.error)
