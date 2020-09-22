import React, { useEffect } from "react"
import ProjectContent from "../projectContent"
import { useInView } from "react-intersection-observer"
import anime from "animejs"

const ProjectHero = ({ topDesc, link, thumbnail }) => {
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
        delay: 1000,
      })
    }
  }, [inView])

  return (
    <section className="project-hero">
      <div
        ref={thumbRef}
        className="project-hero__thumb"
        style={{ backgroundImage: `url(${thumbnail.publicURL})` }}
      ></div>
      <ProjectContent link={link} text={topDesc} />
    </section>
  )
}

export default ProjectHero
