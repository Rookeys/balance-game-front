export function getYoutubeThumbnail(url?: string): string {
  const videoIdMatch = url?.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )

  // * 일부 유튜브 영상에서 .webp 썸네일이 제공되지 않아 .jpg로 통일

  if (!videoIdMatch || videoIdMatch.length < 2) {
    // return "https://i.ytimg.com/vi_webp/0/hqdefault.webp"
    return "https://i.ytimg.com/vi/0/hqdefault.jpg"
  }

  const videoId = videoIdMatch[1]

  // return `https://i.ytimg.com/vi_webp/${videoId}/hqdefault.webp`
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}
