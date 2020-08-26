import React, { useCallback, useRef, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"

const HeroTitle = ({ title, infoFirstLine, infoSecondLine }) => {
  const titleRef = useRef(null)
  const firstLineRef = useRef(null)
  const secondLineRef = useRef(null)

  const [heroTitleRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  })

  const spanify = useCallback(ref => {
    ref.current.innerHTML = ref.current.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
  }, [])

  useEffect(() => {
    spanify(titleRef)
  }, [spanify])

  useEffect(() => {
    if (inView) {
      // Title animation
      anime
        .timeline()
        .set("h1", {
          opacity: 1,
        })
        .add({
          targets: "h1 .letter",
          translateY: ["100%", 0],
          opacity: [0, 1],
          easing: "easeOutSine",
          duration: 800,
          delay: (el, i) => 20 * i,
        })
        .add(
          {
            targets: ".info span",
            translateY: ["100%", 0],
            easing: "easeOutSine",
            duration: 600,
            delay: (_, i) => 100 * i,
          },
          "-=600"
        )
    }
  }, [inView])

  return (
    <header className="container hero-title" ref={heroTitleRef}>
      <h1 className="h1" ref={titleRef}>
        {title}
      </h1>
      <div className="info" ref={firstLineRef}>
        <span>{infoFirstLine}</span>
      </div>
      <div className="info info--second" ref={secondLineRef}>
        <span>{infoSecondLine}</span>
      </div>
    </header>
  )
}

export default HeroTitle
