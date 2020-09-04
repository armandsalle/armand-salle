import React from "react"
import SEO from "../components/seo"
import HeroTitle from "../components/heroTitle"
import Hero from "../components/hero"
import { graphql } from "gatsby"
import HomeAbout from "../components/homeAbout"

const AboutPage = ({
  data: {
    title: { title, location, year },
    hero: { heroTitle, aboutImagePath },
    content: { about },
  },
}) => (
  <>
    <SEO title="Home" />
    <HeroTitle title={title} infoFirstLine={location} infoSecondLine={year} />
    <Hero title={heroTitle} imagePath={aboutImagePath} about />
    <HomeAbout about={about} page="about" />
  </>
)

export const aboutQuery = graphql`
  query About {
    title: heroTitleJson {
      location
      title
      year
    }
    hero: heroJson {
      aboutImagePath {
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
    content: aboutJson {
      about {
        firstParagraph {
          text
          col
        }
        secondParagraph {
          text
          col
        }
      }
    }
  }
`

export default AboutPage
