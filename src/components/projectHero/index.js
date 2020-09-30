import React, { useContext, useEffect } from "react"
import ProjectContent from "../projectContent"
import { useInView } from "react-intersection-observer"
import Img from "gatsby-image"
import anime from "animejs"
import { AnimationContext } from "../../contexts/animationContext"

const ProjectHero = ({ topDesc, link, thumbnail, altThumb }) => {
  const { animationsCanRuns } = useContext(AnimationContext)

  const [thumbRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  })

  useEffect(() => {
    if (inView && animationsCanRuns) {
      anime({
        targets: ".project-hero__thumb",
        opacity: 1,
        easing: "easeOutSine",
        duration: 600,
        delay: 400,
      })
    }
  }, [inView, animationsCanRuns])

  return (
    <section className="project-hero" ref={thumbRef}>
      <Img
        fluid={thumbnail.childImageSharp.fluid}
        alt={altThumb}
        className="project-hero__thumb"
      />

      <ProjectContent link={link} text={topDesc} />
    </section>
  )
}

export default ProjectHero
