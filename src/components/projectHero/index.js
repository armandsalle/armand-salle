import React, { useEffect } from "react"
import ProjectContent from "../projectContent"
import { useInView } from "react-intersection-observer"
import Img from "gatsby-image"
import anime from "animejs"

const ProjectHero = ({ topDesc, link, thumbnail, altThumb }) => {
  const [thumbRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  })

  useEffect(() => {
    if (inView) {
      anime({
        targets: ".project-hero__thumb",
        opacity: 1,
        easing: "easeOutSine",
        duration: 600,
        delay: 400,
      })
    }
  }, [inView])

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
