import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"
import HeroImage from "./heroImage"
import Title from "./title"

const title = [
  [
    { text: "CREATIVE", variant: false },
    { text: "FRONTEND", variant: false },
    { text: "DEVELOPER", variant: false },
    { text: "FREELANCE", variant: true },
  ],
  [
    { text: "WITH A GREAT", variant: false },
    { text: "INTEREST IN", variant: false },
    { text: "PRINT AND", variant: true },
    { text: "WEB DESIGN", variant: true },
  ],
]

const Hero = () => {
  const [hasDelay, setDelay] = useState(true)

  const [imgRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  })

  useEffect(() => {
    if (inView) {
      // Image animation
      anime({
        targets: ".img-wrapper",
        opacity: [0, 1],
        easing: "easeOutSine",
        duration: 600,
        delay: 1000,
        begin: () => {
          // Start after delay
          setTimeout(() => {
            setDelay(false)
          }, 1000)
        },
      })
    }
  }, [inView, setDelay])

  return (
    <div className="container mt-3">
      <div className="hero">
        <div className="img-wrapper" ref={imgRef}>
          <HeroImage />
        </div>
        {title.map((el, i) => (
          <h2 className={`h2 ${i === 1 && "align-right"}`} key={i}>
            {el.map((w, i) => (
              <Title
                word={w.text}
                key={i}
                variant={w?.variant}
                hasDelay={hasDelay}
              />
            ))}
          </h2>
        ))}
      </div>
    </div>
  )
}

export default Hero
