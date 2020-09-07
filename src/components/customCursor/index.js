import React, { useEffect, useRef, useLayoutEffect, useContext } from "react"
import useMousePosition from "../../hooks/useMousePosition"
import { ProjectHoverContext } from "../../contexts/projectHoverContext"

const CustomCursor = () => {
  const { isHover } = useContext(ProjectHoverContext)

  const customCursorRef = useRef(null)
  const customCursorHeight = useRef(null)
  const customCursorWidth = useRef(null)

  const { x, y } = useMousePosition()

  useEffect(() => {
    customCursorWidth.current =
      customCursorRef.current.querySelector("svg").clientWidth / 2
    customCursorHeight.current =
      customCursorRef.current.querySelector("svg").clientHeight / 2
  }, [])

  useEffect(() => {
    if (y <= 0 || x <= 0 || x >= window.innerWidth || y >= window.innerHeight) {
      customCursorRef.current.style.opacity = 0
    } else if (customCursorRef.current.style.opacity !== 1) {
      customCursorRef.current.style.opacity = 1
    }
  }, [x, y])

  useLayoutEffect(() => {
    let newX = 0
    let newY = 0
    let x = 0
    let y = 0
    let raf

    const handlePosition = e => {
      x = e.pageX
      y = e.pageY
    }

    window.addEventListener("mousemove", handlePosition)

    const boom = () => {
      newX += (x - customCursorWidth.current - newX) * 0.2
      newY += (y - customCursorHeight.current - newY) * 0.2

      const transform = `translate(${newX}px, ${newY}px)`
      customCursorRef.current.style.transform = transform

      raf = requestAnimationFrame(boom)
    }

    raf = requestAnimationFrame(boom)

    return () => {
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="custom-cursor" ref={customCursorRef}>
      <svg
        className="progress"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="30"
          cy="30"
          r="15"
          fill="none"
          strokeWidth="3"
          shapeRendering="optimizeQuality"
        />
        <circle
          className="progress__value"
          cx="30"
          cy="30"
          r="15"
          fill="none"
          strokeWidth="3"
          shapeRendering="optimizeQuality"
        />
      </svg>
      <span>{isHover ? "CLICK" : "DRAG"}</span>
    </div>
  )
}

export default CustomCursor
