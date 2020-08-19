import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"
import HeroImage from "./heroImage"
import VariantWord from "./variantWord"
import Word from "./word"

const Hero = () => {
  const titleLeft = [
    { text: "CREATIVE", variant: false },
    { text: "FRONTEND", variant: false },
    { text: "DEVELOPER", variant: false },
    { text: "FREELANCE", variant: true },
  ]

  const titleRight = [
    { text: "WITH A GREAT", variant: false },
    { text: "INTEREST IN", variant: false },
    { text: "PRINT AND", variant: true },
    { text: "WEB DESIGN", variant: true },
  ]

  const [canRunAnimation, setRunAnimation] = useState(false)

  const [imgRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  })

  useEffect(() => {
    if (inView) {
      // Title animation
      anime({
        targets: ".img-wrapper",
        opacity: [0, 1],
        easing: "easeOutSine",
        duration: 600,
        delay: 1000,
      })
    }
  }, [inView])

  return (
    <div className="container mt-3">
      <div className="hero">
        <div className="img-wrapper" ref={imgRef}>
          <HeroImage />
        </div>
        <h2 className="h2">
          {titleLeft.map((w, i) => {
            return w.variant ? (
              <VariantWord
                word={w.text}
                key={i}
                data={{ canRunAnimation, setRunAnimation }}
              />
            ) : (
              <Word
                word={w.text}
                key={i}
                data={{ canRunAnimation, setRunAnimation }}
              />
            )
          })}
        </h2>
        <h2 className="h2 align-right">
          {titleRight.map((w, i) => {
            return w.variant ? (
              <VariantWord
                word={w.text}
                key={i}
                data={{ canRunAnimation, setRunAnimation }}
              />
            ) : (
              <Word
                word={w.text}
                key={i}
                data={{ canRunAnimation, setRunAnimation }}
              />
            )
          })}
        </h2>
      </div>
    </div>
  )
}

export default Hero
