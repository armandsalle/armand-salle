import React from "react"
import SEO from "../components/seo"
import HeroTitle from "../components/heroTitle"
import Hero from "../components/hero"
import { graphql } from "gatsby"
import HomeAbout from "../components/homeAbout"
import Resume from "../components/resume"
import Love from "../components/love"

const AboutPage = ({
  data: {
    title: { title, location, year },
    hero: { heroTitle, aboutImagePath },
    content: { about, resume, love },
  },
}) => (
  <>
    <SEO title="About" />
    <HeroTitle title={title} infoFirstLine={location} infoSecondLine={year} />
    <Hero title={heroTitle} imagePath={aboutImagePath} about />
    <HomeAbout about={about} page="about" />
    <Resume resume={resume} />
    <Love love={love} />
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
            fluid(maxWidth: 450, quality: 60) {
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
      resume {
        experiences
        development
        design
      }
      love {
        title
        images {
          src {
            childImageSharp {
              fluid(maxWidth: 450, quality: 60) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default AboutPage
