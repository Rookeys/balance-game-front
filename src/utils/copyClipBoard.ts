export const copyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    // Todo 토스트 메세지
  } catch {}
}
