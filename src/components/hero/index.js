import React, { useContext, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"
import Title from "./title"
import Img from "gatsby-image"
import cn from "classname"
import { AnimationContext } from "../../contexts/animationContext"

const Hero = React.memo(({ title, imagePath, about }) => {
  const { animationsCanRuns } = useContext(AnimationContext)

  const titleHeroRef = useRef(null)

  const [imgRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  })

  useEffect(() => {
    if (inView && animationsCanRuns) {
      anime
        .timeline({
          easing: "easeOutSine",
        })
        .add({
          targets: ".img-wrapper",
          opacity: [0, 1],
          duration: 600,
          delay: 1000,
        })
        .add(
          {
            targets: titleHeroRef.current.querySelectorAll(".word, .variant"),
            translateY: ["100%", 0],
            opacity: [0, 1],
            duration: 800,
            delay: (_, i) => i * 80,
          },
          "-=500"
        )
    }
  }, [inView, animationsCanRuns])

  return (
    <header className="container mt-3">
      <div className="hero">
        <div className={cn("img-wrapper", about && "--about")} ref={imgRef}>
          {!about && (
            <Img
              fluid={imagePath.src.childImageSharp.fluid}
              alt={imagePath.alt}
            />
          )}
          {about && (
            <>
              <div className="about-hero-img">
                <Img
                  fluid={imagePath.src.childImageSharp.fluid}
                  alt={imagePath.alt}
                />
              </div>
              <div className="about-hero-img">
                <Img
                  fluid={imagePath.src.childImageSharp.fluid}
                  alt={imagePath.alt}
                />
              </div>
            </>
          )}
        </div>
        <div className={cn(about && "hero-about")} ref={titleHeroRef}>
          {title.map((el, i) => (
            <h2 className={`${i === 1 ? "h2 align-right" : "h2"}`} key={i}>
              {el.map((w, i) => (
                <Title word={w.text} key={i} variant={w?.variant} />
              ))}
            </h2>
          ))}
        </div>
      </div>
    </header>
  )
})

export default Hero
