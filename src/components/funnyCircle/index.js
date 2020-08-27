import React, { useRef, useCallback, useEffect } from "react"
import anime from "animejs"

const FunnyCircle = () => {
  const circleRef = useRef(null)
  const requestRef = useRef(null)
  const delta = useRef(0)
  const deg = useRef(0)

  const getDeltaY = ({ deltaY }) => {
    delta.current = deltaY
    const tar = { delta: delta.current }

    anime({
      targets: tar,
      delta: 0,
      duration: 100,
      round: 1,
      update: c => {
        delta.current = c.animations[0].currentValue
      },
    })
  }

  const turn = useCallback(() => {
    deg.current = deg.current += 0.8 + delta.current

    circleRef.current.style.setProperty("--deg", deg.current + "deg")

    requestRef.current = requestAnimationFrame(turn)
  }, [])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(turn)
    document.addEventListener("wheel", getDeltaY)

    return () => {
      cancelAnimationFrame(requestRef.current)
      document.removeEventListener("wheel", getDeltaY)
    }
  }, [turn])

  return <div className="funny-circle" ref={circleRef}></div>
}

export default FunnyCircle
