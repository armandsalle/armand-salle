import React, { useCallback, useContext, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"
import Line from "./line"
import { AnimationContext } from "../../contexts/animationContext"

const Text = React.memo(
  ({ children, col, className, splitAndAnime, as, love }) => {
    const { animationsCanRuns } = useContext(AnimationContext)

    const inner = useRef(
      children.split("<br />").map((text, i) =>
        love && i === 0 ? (
          <Line key={i} className="color-primary">
            {text}
          </Line>
        ) : (
          <Line key={i}>{text}</Line>
        )
      )
    )

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
      if (inView && animationsCanRuns) {
        // Text line animation
        anime({
          targets: textRef.current.querySelectorAll("span.line"),
          translateY: ["100%", 0],
          easing: "easeOutSine",
          duration: 800,
          delay: (_, i) => i * 100,
        })
      }
    }, [inView, textRef, animationsCanRuns])

    switch (as) {
      case "p":
        return (
          <p
            className={`${className} ${col ? "col-" + col : ""}`}
            ref={setRefs}
          >
            {splitAndAnime && inner.current}
            {!splitAndAnime && children}
          </p>
        )
      case "h2":
        return (
          <h2
            className={`${className} ${col ? "col-" + col : ""}`}
            ref={setRefs}
          >
            {splitAndAnime && inner.current}
            {!splitAndAnime && children}
          </h2>
        )
      default:
        return (
          <p
            className={`${className} ${col ? "col-" + col : ""}`}
            ref={setRefs}
          >
            {splitAndAnime && inner.current}
            {!splitAndAnime && children}
          </p>
        )
    }
  }
)

export default Text
