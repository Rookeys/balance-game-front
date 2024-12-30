export function getYoutubeThumbnail(url: string): string {
  const videoIdMatch = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )

  if (!videoIdMatch || videoIdMatch.length < 2) {
    return "https://i.ytimg.com/vi_webp/0/hqdefault.webp"
  }

  const videoId = videoIdMatch[1]

  return `https://i.ytimg.com/vi_webp/${videoId}/hqdefault.webp`
}
