import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import HeroTitle from "../components/heroTitle"
import ProjectHero from "../components/projectHero"
import ProjectImages from "../components/projectImages"
import ProjectContent from "../components/projectContent"
import NextProject from "../components/nextProject"

const ProjectTemplate = ({
  data: {
    projectsJson: { projects },
  },
  pageContext: { slug },
}) => {
  const {
    title,
    year,
    type,
    thumbnail,
    link,
    topDesc,
    bottomDesc,
    images,
    id,
  } = projects.find(p => p.slug === slug)

  const projectIds = projects.map(project => project.id)
  const maxId = Math.max(...projectIds)
  const nextProjectId = id + 1 > maxId ? 1 : id + 1
  const nextProject = projects.find(p => p.id === nextProjectId)

  return (
    <>
      <SEO title={title} />
      <HeroTitle title={title} infoFirstLine={type} infoSecondLine={year} />
      <ProjectHero thumbnail={thumbnail} link={link} topDesc={topDesc} />
      <ProjectImages images={images} />
      <ProjectContent link={link} text={bottomDesc} />
      <NextProject project={nextProject} />
    </>
  )
}

export const projectQuery = graphql`
  query Project {
    projectsJson {
      projects {
        id
        title
        slug
        year
        type
        thumbnail {
          publicURL
        }
        link
        topDesc
        bottomDesc
        images {
          id
          src {
            childImageSharp {
              fluid(maxWidth: 710, quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          col
          offset
          alt
        }
      }
    }
  }
`
export default ProjectTemplate
