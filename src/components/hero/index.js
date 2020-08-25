import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"
import Title from "./title"
import Img from "gatsby-image"

const Hero = React.memo(({ title, imagePath }) => {
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
          <Img
            fluid={imagePath.src.childImageSharp.fluid}
            alt={imagePath.alt}
          />
        </div>
        {title.map((el, i) => (
          <h2 className={`${i === 1 ? "h2 align-right" : "h2"}`} key={i}>
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
})

export default Hero
