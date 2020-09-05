import React, { useContext, useEffect } from "react"
import { graphql, navigate } from "gatsby"
import SEO from "../components/seo"
import { LayoutContext } from "../contexts/layoutContext"
import ProjectThumb from "../components/projectThumb"
import { CreateSlider } from "butter-slider"

const CasesPage = ({
  data: {
    projects: { projects },
  },
}) => {
  const { setFooter } = useContext(LayoutContext)

  useEffect(() => {
    setFooter(false)

    return () => setFooter(true)
  }, [setFooter])

  useEffect(() => {
    const slider = new CreateSlider({
      container: ".cases",
      slider: ".cases__container",
      smoothAmount: 0.1,
      dragSpeed: 2,
      hasTouchEvents: true,
    })

    slider.init()

    document.querySelectorAll(".project-thumb").forEach(element => {
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
          console.log(endTimer - startTimer)
          if (endTimer - startTimer < 100) {
            navigate(link)
          }
        },
        false
      )
    })

    return () => slider.destroy()
  }, [])

  return (
    <>
      <SEO title="Cases" />
      <section className="cases">
        <div className="cases__container">
          {projects.map((project, i) => (
            <ProjectThumb
              key={i}
              title={project.title}
              thumbnail={project.thumbnail.publicURL}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export const casesQuery = graphql`
  query Cases {
    projects: projectsJson {
      projects {
        id
        title
        thumbnail {
          publicURL
        }
      }
    }
  }
`

export default CasesPage
