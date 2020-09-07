import React, { useContext, useEffect, useRef } from "react"
import { navigate } from "gatsby"
import { LayoutContext } from "../../contexts/layoutContext"
import ProjectThumb from "../projectThumb"
import { CreateSlider } from "butter-slider"

import CustomCursor from "../customCursor"

const Cases = ({ projects }) => {
  const { setFooter } = useContext(LayoutContext)

  const navigateOrSlide = useRef(element => {
    let startTimer, link

    element.addEventListener(
      "click",
      e => {
        e.preventDefault()
      },
      false
    )

    element.addEventListener(
      "mousedown",
      e => {
        link = e.target.getAttribute("href")
        startTimer = new Date()
      },
      false
    )

    element.addEventListener(
      "mouseup",
      e => {
        const endTimer = new Date()
        if (endTimer - startTimer < 100) {
          navigate(link)
        }
      },
      false
    )
  })

  useEffect(() => {
    setFooter(false)
    return () => setFooter(true)
  }, [setFooter])

  useEffect(() => {
    const progressBar = document.querySelector(".progress__value")

    const slider = new CreateSlider({
      container: ".cases",
      slider: ".cases__container",
      smoothAmount: 0.08,
      dragSpeed: 2,
      hasTouchEvents: true,
      getScrollPercent: e => {
        progressBar.style.strokeDashoffset = `${-94 - (e * -94) / 100}`
      },
    })

    document
      .querySelectorAll(".project-thumb")
      .forEach(element => navigateOrSlide.current(element))

    return () => slider.destroy()
  }, [])

  return (
    <section className="cases">
      <CustomCursor />
      <div className="cases__wrapper">
        <div className="cases__container">
          {projects.map((project, i) => (
            <ProjectThumb
              key={i}
              title={project.title}
              thumbnail={project.thumbnail.publicURL}
              url={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases
