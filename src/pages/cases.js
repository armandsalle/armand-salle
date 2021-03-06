import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Cases from "../components/cases"

const CasesPage = ({
  data: {
    projects: { projects },
  },
}) => {
  return (
    <>
      <SEO title="Cases" />
      <Cases projects={projects} />
    </>
  )
}

export const casesQuery = graphql`
  query Cases {
    projects: projectsJson {
      projects {
        id
        title
        slug
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 750, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        altThumb
      }
    }
  }
`

export default CasesPage
