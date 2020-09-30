import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import HeroTitle from "../components/heroTitle"
import ProjectHero from "../components/projectHero"
import ProjectImages from "../components/projectImages"
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
    altThumb,
    link,
    topDesc,
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
      <ProjectHero
        thumbnail={thumbnail}
        link={link}
        topDesc={topDesc}
        altThumb={altThumb}
      />
      <ProjectImages images={images} />
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
          childImageSharp {
            fluid(maxWidth: 1200, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        altThumb
        link
        topDesc
        images {
          id
          src {
            childImageSharp {
              fluid(maxWidth: 450, quality: 60) {
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
