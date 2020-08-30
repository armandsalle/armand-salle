import React, { useRef, useEffect, useCallback } from "react"
import { Link } from "gatsby"
import anime from "animejs"

const ProjectThumb = ({ title, thumbnail }) => {
  const projectThumbRef = useRef(null)

  const enterProjectLink = useCallback(() => {
    anime.remove(projectThumbRef.current.querySelector(".arrow"))

    anime({
      targets: projectThumbRef.current.querySelector(".arrow"),
      translateY: 0,
      easing: "easeOutSine",
      duration: 300,
    })
  }, [])

  const leaveProjectLink = useCallback(() => {
    anime.remove(projectThumbRef.current.querySelector(".arrow"))

    anime({
      targets: projectThumbRef.current.querySelector(".arrow"),
      translateY: "-115%",
      easing: "easeOutSine",
      duration: 300,
    })
  }, [])

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
    <Link to="/about" className="project-thumb" ref={projectThumbRef}>
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
