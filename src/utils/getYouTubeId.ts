export function getYouTubeId(url?: string) {
  if (!url) return ""

  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S+\/\S*\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/
  const match = url.match(regex)
  return match ? match[1] : ""
}
