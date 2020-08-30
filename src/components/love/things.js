import React, { useEffect, useRef, useCallback } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"

const Thing = ({ index, inner }) => {
  const [thingViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  })

  const thingText = useRef(null)

  const setRefs = useCallback(
    node => {
      thingText.current = node
      thingViewRef(node)
    },
    [thingViewRef]
  )

  useEffect(() => {
    if (inView) {
      thingText.current.classList.add("thing-visible")

      anime({
        targets: thingText.current.querySelector(".love__thing__number"),
        opacity: [0, 1],
        easing: "easeOutSine",
        duration: 600,
        delay: 500,
      })
    }
  }, [inView])

  return (
    <div className="love__thing" ref={setRefs}>
      <div className="love__thing__title">
        <span className="love__thing__number">0{index + 1}</span>
        {inner}
      </div>
    </div>
  )
}

const Things = ({ loveList }) => {
  return (
    <div className="love__things">
      {loveList.map((el, i) => {
        const inner = el.split("<span>").map((text, i) =>
          i === 1 ? (
            <span key={i} className="pizza">
              {text}
            </span>
          ) : (
            <span key={i}>{text}</span>
          )
        )

        return <Thing key={i} index={i} inner={inner} />
      })}
    </div>
  )
}

export default Things
