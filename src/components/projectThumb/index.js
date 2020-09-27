import React, { useRef, useEffect, useCallback, useContext } from "react"
import { Link } from "gatsby"
import anime from "animejs"
import { ProjectHoverContext } from "../../contexts/projectHoverContext"
import Img from "gatsby-image"

const ProjectThumb = ({ title, thumbnail, url, altThumb }) => {
  const projectThumbRef = useRef(null)
  const { setHover } = useContext(ProjectHoverContext)

  const enterProjectLink = useCallback(() => {
    setHover(true)
    anime.remove(projectThumbRef.current.querySelector(".arrow"))

    anime({
      targets: projectThumbRef.current.querySelector(".arrow"),
      translateY: 0,
      easing: "easeOutSine",
      duration: 300,
    })
  }, [setHover])

  const leaveProjectLink = useCallback(() => {
    setHover(false)
    anime.remove(projectThumbRef.current.querySelector(".arrow"))

    anime({
      targets: projectThumbRef.current.querySelector(".arrow"),
      translateY: "-115%",
      easing: "easeOutSine",
      duration: 300,
    })
  }, [setHover])

  useEffect(() => {
    anime.set(projectThumbRef.current.querySelector(".arrow"), {
      translateY: "-115%",
    })

    projectThumbRef.current.addEventListener(
      "mouseenter",
      enterProjectLink,
      false
    )
    projectThumbRef.current.addEventListener(
      "mouseleave",
      leaveProjectLink,
      false
    )
  }, [enterProjectLink, leaveProjectLink])

  return (
    <Link to={`/cases/${url}`} className="project-thumb" ref={projectThumbRef}>
      <Img
        fluid={thumbnail.childImageSharp.fluid}
        alt={altThumb}
        objectFit="cover"
        objectPosition="50% 50%"
        className="project-thumb__img"
      />

      <div className="project-thumb__info">
        <h3>{title}</h3>
        <div className="arrow"></div>
      </div>
    </Link>
  )
}

export default ProjectThumb
