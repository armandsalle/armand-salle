import React, { useEffect, useRef, useCallback } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"

const Word = ({ word, data: { canRunAnimation, setRunAnimation } }) => {
  const [variantRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "10px",
  })

  const refText = useRef()

  const setRefs = useCallback(
    node => {
      refText.current = node
      variantRef(node)
    },
    [variantRef]
  )

  useEffect(() => {
    if (inView) {
      refText.current.classList.add("in-view")

      anime({
        targets: ".in-view .word",
        translateY: ["100%", 0],
        easing: "easeOutSine",
        duration: 800,
        delay: (_, i) => {
          return canRunAnimation ? 100 * i : 1000 + 100 * i
        },
        begin: () => {
          refText.current.classList.remove("in-view")
          setRunAnimation(true)
        },
      })
    }
  }, [inView, refText])

  return (
    <>
      <div ref={setRefs}>
        <span className="word">{word}</span>
      </div>
      <br />
    </>
  )
}

export default Word
