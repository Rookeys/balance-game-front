import { createWriteStream } from "fs"
import { SitemapStream, streamToPromise } from "sitemap"

async function generateSitemap() {
  const hostname = "https://zznpk.com"
  const sitemap = new SitemapStream({ hostname })
  const writeStream = createWriteStream("public/sitemap.xml")

  sitemap.pipe(writeStream)

  // ✅ 1. 고정 페이지 추가
  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 })

  // ✅ 2. 게임 리스트 가져오기 (예: API 요청)
  // const res = await fetch("https://api.zznpk.com/games")
  // const games = await res.json()
  const games = ["2", "3", "6"] // 예시

  games.forEach((game) => {
    sitemap.write({
      url: `/game/${game}`,
      changefreq: "weekly",
      priority: 0.8
    })
  })

  sitemap.end()
  await streamToPromise(sitemap)
  console.log("✅ Sitemap 생성 완료!")
}

generateSitemap().catch(console.error)
