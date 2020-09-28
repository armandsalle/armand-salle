import { useState, useEffect } from "react"

const useTouchScreenDetector = () => {
  const [isTouchScreen, setScreenType] = useState(false)

  useEffect(() => {
    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    ) {
      setScreenType(true)
    }
  }, [setScreenType])
  return isTouchScreen
}

export default useTouchScreenDetector
