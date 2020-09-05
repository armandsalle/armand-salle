import React, { useEffect, useRef, useCallback } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"

const MiniText = ({ miniText }) => {
  const [textViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  })

  const textRef = useRef(null)

  const setRefs = useCallback(
    node => {
      textRef.current = node
      textViewRef(node)
    },
    [textViewRef]
  )

  useEffect(() => {
    if (inView) {
      anime({
        targets: textRef.current.querySelectorAll(".word span"),
        translateY: ["100%", 0],
        duration: 600,
        delay: (_, i) => 200 + i * 20,
      })
    }
  }, [inView])

  return (
    <div className="like__miniText" ref={setRefs}>
      {miniText.split(" ").map((el, i) => (
        <span key={i} className="word">
          {el.split("").map((e, index) => (
            <span key={index}>{e}</span>
          ))}
        </span>
      ))}
    </div>
  )
}

export default MiniText
