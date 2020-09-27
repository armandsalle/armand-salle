import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import HeroTitle from "../components/heroTitle"
import Hero from "../components/hero"
import Like from "../components/like"
import HomeShowCase from "../components/homeShowCase"
import HomeAbout from "../components/homeAbout"

const IndexPage = ({
  data: {
    title: { title, location, year },
    hero: { heroTitle, imagePath },
    content: { about, like },
    projects: { projects },
  },
}) => {
  return (
    <>
      <SEO title="Home" />
      <HeroTitle title={title} infoFirstLine={location} infoSecondLine={year} />
      <Hero title={heroTitle} imagePath={imagePath} />
      <HomeAbout about={about} />
      <HomeShowCase projects={projects} />
      <Like like={like} />
    </>
  )
}

export const indexQuery = graphql`
  query Index {
    title: heroTitleJson {
      location
      title
      year
    }
    hero: heroJson {
      imagePath {
        src {
          childImageSharp {
            fluid(maxWidth: 710, quality: 50) {
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
    content: indexJson {
      about {
        firstParagraph {
          text
          col
        }
        secondParagraph {
          text
          col
        }
        linkAbout {
          src {
            childImageSharp {
              fixed(width: 200, height: 200, quality: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          alt
        }
      }
      like {
        likeTitle
        likeList
        miniText
        contactText
      }
    }
    projects: projectsJson {
      projects {
        id
        title
        isOnHome
        slug
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 600, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        altThumb
      }
    }
  }
`

export default IndexPage
