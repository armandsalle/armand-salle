import React, { useRef, useEffect, useCallback, useContext } from "react"
import { Link } from "gatsby"
import anime from "animejs"
import { ProjectHoverContext } from "../../contexts/projectHoverContext"

const ProjectThumb = ({ title, thumbnail, url }) => {
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
    <Link to={`/case/${url}`} className="project-thumb" ref={projectThumbRef}>
      <div
        className="project-thumb__img"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
      <div className="project-thumb__info">
        <h3>{title}</h3>
        <div className="arrow"></div>
      </div>
    </Link>
  )
}

export default ProjectThumb
