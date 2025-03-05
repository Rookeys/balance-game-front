type PostMessageToRNType<T> = {
  type: string
  data: T
}

export const postMessageToRN = <T>({ type, data }: PostMessageToRNType<T>) => {
  const message = JSON.stringify({ type, data })
  window.ReactNativeWebView.postMessage(message)
}

// 사용예시)
// function onPlayerReady(event) {
//   postMessageToRN({ type: "duration", data: player.getDuration() })
// }

// function onPlayerStateChange(event) {
//   postMessageToRN({ type: "player-state", data: event.data })
// }
