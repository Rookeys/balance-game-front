import { debounce } from "lodash-es"
import { useEffect, useState } from "react"

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

const useResizeHandler = (interval = 200) => {
  const [windowWidth, setWindowWidth] = useState<number>(0)
  useEffect(() => {
    let isMounted = true
    const resizeListener = () => {
      if (isMounted) {
        setWindowWidth(getWidth())
      }
    }
    window.addEventListener("resize", debounce(resizeListener, interval))
    resizeListener()
    return () => {
      isMounted = false
      window.removeEventListener("resize", resizeListener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return windowWidth
}

export default useResizeHandler
