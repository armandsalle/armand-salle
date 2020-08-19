import React, { useEffect, useRef, useCallback } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"

const VariantWord = ({ word, data: { canRunAnimation, setRunAnimation } }) => {
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
        targets: ".in-view .word, .in-view .variant",
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

  const wordToArr = word.split(" ")

  return (
    <>
      <div ref={setRefs}>
        <div>
          <span className="variant">
            <span className="bar"></span>
            {wordToArr[0]}
          </span>
        </div>
        {wordToArr.length > 0 && (
          <>
            {" "}
            <div>
              <span className="word">{wordToArr[1]}</span>
            </div>
          </>
        )}
      </div>
      <br />
    </>
  )
}

export default VariantWord
