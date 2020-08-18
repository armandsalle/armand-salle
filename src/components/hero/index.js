import React, { useEffect } from "react"
import HeroImage from "./heroImage"
import { useInView } from "react-intersection-observer"
import anime from "animejs"

const Hero = () => {
  const [heroRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  })

  useEffect(() => {
    if (inView) {
      // Title animation
      anime
        .timeline()
        .add({
          targets: "h2 .word, .variant",
          translateY: ["100%", 0],
          easing: "easeOutSine",
          duration: 800,
          delay: (el, i) => 600 + 80 * i,
        })
        .add(
          {
            targets: ".img-wrapper",
            opacity: [0, 1],
            easing: "easeOutSine",
            duration: 600,
          },
          "-=600"
        )
    }
  }, [inView])

  return (
    <div className="container mt-3">
      <div className="hero" ref={heroRef}>
        <div className="img-wrapper">
          <HeroImage />
        </div>
        <h2 className="h2">
          <div>
            <span className="word">CREATIVE</span>
          </div>
          <br />
          <div>
            <span className="word">FRONTEND</span>
          </div>
          <br />
          <div>
            <span className="word">DEVELOPER</span>
          </div>
          <br />
          <div>
            {" "}
            <span className="variant">
              <span className="bar"></span>FREELANCE
            </span>
          </div>
        </h2>
        <h2 className="h2 align-right">
          <div>
            <span className="word">WITH A GREAT</span>
          </div>
          <br />
          <div>
            <span className="word">INTEREST IN</span>
          </div>
          <br />
          <div>
            <span className="variant">
              <span className="bar"></span>PRINT
            </span>
          </div>{" "}
          <div>
            <span className="word">AND</span>
          </div>
          <br />
          <div>
            <span className="variant">
              <span className="bar"></span>WEB
            </span>
          </div>{" "}
          <div>
            <span className="word">DESIGN</span>
          </div>
        </h2>
      </div>
    </div>
  )
}

export default Hero
