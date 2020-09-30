import React, { useEffect, useRef, useCallback, useContext } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"
import { AnimationContext } from "../../contexts/animationContext"

const Thing = React.memo(({ index, children, last }) => {
  return (
    <div className="like__thing">
      <div className="like__thing__bar"></div>
      <div className="like__thing__title">
        <span className="like__thing__number">0{index + 1}</span>
        {children}
      </div>

      {last && <div className="like__thing__bar --bottom"></div>}
    </div>
  )
})

const Things = ({ likeList }) => {
  const { animationsCanRuns } = useContext(AnimationContext)

  const thingText = useRef(null)

  const [thingViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
    threshold: 0.2,
  })

  const setRefs = useCallback(
    node => {
      thingText.current = node
      thingViewRef(node)
    },
    [thingViewRef]
  )

  useEffect(() => {
    if (inView && animationsCanRuns) {
      anime
        .timeline({
          easing: "easeOutSine",
        })
        .add({
          targets: thingText.current.querySelectorAll(".like__thing__bar"),
          width: "100%",
          delay: (_, i) => i * 100,
          duration: 500,
        })
        .add(
          {
            targets: thingText.current.querySelectorAll(".like__thing__number"),
            opacity: [0, 1],
            delay: (_, i) => 500 + i * 100,
            duration: 600,
          },
          0
        )
    }
  }, [inView, animationsCanRuns])

  const inner = useCallback(el => {
    return el.split("<span>").map((text, i) =>
      i === 1 ? (
        <span key={i} className="pizza">
          {text}
        </span>
      ) : (
        <span key={i}>{text}</span>
      )
    )
  }, [])

  return (
    <div className="like__things" ref={setRefs}>
      {likeList.map((el, i) => {
        return (
          <Thing key={i} index={i} last={!!(i === likeList.length - 1)}>
            {inner(el)}
          </Thing>
        )
      })}
    </div>
  )
}

export default Things
