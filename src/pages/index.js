import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import HeroTitle from "../components/heroTitle"
import Hero from "../components/hero"

const IndexPage = ({
  data: {
    title: { title, location, year },
    hero: { heroTitle, imagePath },
  },
}) => {
  return (
    <>
      <SEO title="Home" />
      <HeroTitle title={title} infoFirstLine={location} infoSecondLine={year} />
      <Hero title={heroTitle} imagePath={imagePath} />
      {/* <Intro /> */}
    </>
  )
}
export const indexQuery = graphql`
  query HeroTitle {
    title: heroTitleJson {
      location
      title
      year
    }
    hero: heroJson {
      imagePath {
        src {
          childImageSharp {
            fluid(maxWidth: 710, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
      heroTitle: title {
        text
        variant
      }
    }
  }
`

export default IndexPage
