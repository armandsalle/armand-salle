import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import HeroTitle from "../components/heroTitle"

const ProjectTemplate = ({
  data: {
    projectsJson: { projects },
  },
  pathContext: { slug },
}) => {
  const { title, year, type } = projects.find(p => p.slug === slug)
  return (
    <>
      <SEO title={title} />
      <HeroTitle title={title} infoFirstLine={type} infoSecondLine={year} />
    </>
  )
}

export const projectQuery = graphql`
  query Project {
    projectsJson {
      projects {
        title
        slug
        year
        type
      }
    }
  }
`
export default ProjectTemplate
