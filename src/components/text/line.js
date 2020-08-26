import React, { useCallback, useRef, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"

const Line = ({ children }) => {
  const textRef = useRef(null)
  const [textViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
    threshold: 0.2,
  })

  const setRefs = useCallback(
    node => {
      textRef.current = node
      textViewRef(node)
    },
    [textViewRef]
  )

  useEffect(() => {
    if (inView) {
      // Text line animation
      anime({
        targets: textRef.current.querySelectorAll("span.line"),
        translateY: ["100%", 0],
        easing: "easeOutSine",
        duration: 800,
      })
    }
  }, [inView, textRef])

  return (
    <span className="hide" ref={setRefs}>
      <span className="line">{children}</span>
    </span>
  )
}

export default Line
