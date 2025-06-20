import { createWriteStream } from "fs"
import { SitemapStream, streamToPromise } from "sitemap"

async function generateSitemap() {
  const hostname = "https://zznpk.com"
  const sitemap = new SitemapStream({ hostname })
  const writeStream = createWriteStream("src/app/sitemap.xml")

  sitemap.pipe(writeStream)

  const now = new Date().toISOString()

  // 루트 페이지 sitemap
  sitemap.write({
    url: "/",
    changefreq: "daily",
    priority: 1.0,
    lastmod: now
  })

  // // 카테고리 페이지들 추가
  // for (const category of categories) {
  //   const path = `/category/${category.value.toLowerCase()}`
  //   sitemap.write({
  //     url: path,
  //     changefreq: "weekly",
  //     priority: 0.6,
  //     lastmod: now
  //   })
  // }

  // Todo 백엔드 uuid 작업 완료 후 진행
  // 게임 리스트 가져오기
  // const res = await fetch("")
  // const games = await res.json()

  // games.forEach((game) => {
  //   sitemap.write({
  //     url: `/game/${game}`,
  //     changefreq: "weekly",
  //     priority: 0.8,
  //     lastmod: now,
  //   })
  // })

  sitemap.end()
  await streamToPromise(sitemap)
  console.log("✅ Sitemap 생성 완료!")
}

generateSitemap().catch(console.error)
