"use client"
import React, { ReactNode, useEffect, useRef, useState } from "react"

interface PullToRefreshProps {
  children: ReactNode
  onRefresh?: () => Promise<void>
  maxDistance: number
  loadingComponent: ReactNode
}

const PullToRefreshLogic = ({ children, maxDistance, onRefresh, loadingComponent }: PullToRefreshProps) => {
  const spinnerRef = useRef<HTMLDivElement>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [startY, setStartY] = useState(0)
  const [isTouch, setIsTouch] = useState(false)
  const [pulled, setPulled] = useState(false)

  useEffect(() => {
    const touchMoveListener = (e: TouchEvent) => {
      if (isTouch && pulled) {
        onMove(e.touches[0].clientY)
        e.preventDefault()
      }
    }

    document.addEventListener("touchmove", touchMoveListener, { passive: false })

    return () => {
      document.removeEventListener("touchmove", touchMoveListener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch, pulled])

  const resetToInitial = () => {
    if (spinnerRef.current) {
      spinnerRef.current.style.height = "0"
      spinnerRef.current.style.willChange = "auto"
    }
    setPulled(false)
    setIsRefreshing(false)
  }

  const onStart = (y: number, touch: boolean) => {
    setStartY(y)
    setIsTouch(touch)
    setPulled(true)
    if (spinnerRef.current) {
      spinnerRef.current.style.willChange = "height"
    }
  }

  const onMove = (y: number) => {
    if (pulled && spinnerRef.current) {
      const moveY = y
      const pulledDistance = Math.min(Math.pow(moveY - startY, 0.875), maxDistance)

      if (pulledDistance > 0) {
        spinnerRef.current.style.height = `${pulledDistance}px`
        preventBodyScroll()

        if (pulledDistance >= maxDistance) {
          setIsRefreshing(true)
        } else {
          setIsRefreshing(false)
        }
      } else {
        ableBodyScroll()
        resetToInitial()
      }
    }
  }

  const handleEnd = () => {
    if (isTouch && pulled) {
      onEnd()
    }
  }
  const onEnd = async () => {
    if (pulled) {
      ableBodyScroll()
      if (isRefreshing && typeof window !== "undefined") {
        try {
          if (onRefresh) {
            await onRefresh()
          } else {
            window.location.reload()
          }
          await new Promise((resolve) => {
            setTimeout(resolve, 500) // 최대 1초까지 기다림
          })
          resetToInitial()
        } catch (error) {
          console.error("Error while refreshing:", error)
        }
      } else {
        resetToInitial()
      }
    }
  }

  const ableBodyScroll = () => {
    document.body.style.overflow = "auto"
  }

  const preventBodyScroll = () => {
    document.body.style.overflow = "hidden"
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.scrollY === 0) {
      onStart(e.touches[0].clientY, true)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (window.scrollY === 0) {
      onStart(e.clientY, false)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isTouch && pulled) {
      onMove(e.clientY)
      e.preventDefault()
    }
  }

  const handleMouseUp = () => {
    if (!isTouch) {
      onEnd()
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center" ref={spinnerRef}>
        {isRefreshing && loadingComponent}
      </div>
      <div
        onTouchStart={handleTouchStart}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleEnd}
      >
        {children}
      </div>
    </div>
  )
}

export default PullToRefreshLogic
