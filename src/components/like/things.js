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
        targets: thingText.current.querySelector(".like__thing__number"),
        opacity: [0, 1],
        easing: "easeOutSine",
        duration: 600,
        delay: 500,
      })
    }
  }, [inView])

  return (
    <div className="like__thing" ref={setRefs}>
      <div className="like__thing__title">
        <span className="like__thing__number">0{index + 1}</span>
        {inner}
      </div>
    </div>
  )
}

const Things = ({ likeList }) => {
  return (
    <div className="like__things">
      {likeList.map((el, i) => {
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
