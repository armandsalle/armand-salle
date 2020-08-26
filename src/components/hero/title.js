import React, { useEffect, useRef, useCallback, useState } from "react"
import Word from "./word"
import { useInView } from "react-intersection-observer"
import anime from "animejs"

const Title = React.memo(({ word, variant, hasDelay }) => {
  const [animationCanRun, setAnimationRun] = useState(true)

  const wordToArr = word.split(" ")

  const [variantRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
    threshold: 0.1,
  })

  const refText = useRef(null)

  const setRefs = useCallback(
    node => {
      refText.current = node
      variantRef(node)
    },
    [variantRef]
  )

  useEffect(() => {
    if (inView && animationCanRun) {
      anime({
        targets: refText.current.querySelectorAll(".word, .variant"),
        translateY: ["100%", 0],
        opacity: [0, 1],
        easing: "easeOutSine",
        duration: 800,
        delay: () => (hasDelay ? 1200 : 0),
        begin: () => setAnimationRun(false),
      })
    }
  }, [inView, refText, hasDelay, animationCanRun, setAnimationRun])

  return (
    <>
      <div ref={setRefs}>
        {variant ? (
          <>
            <div>
              <span className="variant">
                <span className="bar"></span>
                {wordToArr[0]}
              </span>
            </div>
            {wordToArr.length > 0 && (
              <>
                {" "}
                <Word word={wordToArr[1]} />
              </>
            )}
          </>
        ) : (
          <Word word={word} />
        )}
      </div>
      <br />
    </>
  )
})

export default Title
