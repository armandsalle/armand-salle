import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import HeroTitle from "../components/heroTitle"
import Hero from "../components/hero"
import Text from "../components/text"
import CustomLink from "../components/customLink"

const IndexPage = ({
  data: {
    title: { title, location, year },
    hero: { heroTitle, imagePath },
    content: { firstParagraph, secondParagraph },
  },
}) => {
  return (
    <main className="home">
      <SEO title="Home" />
      <HeroTitle title={title} infoFirstLine={location} infoSecondLine={year} />
      <Hero title={heroTitle} imagePath={imagePath} />
      <div className="home-about">
        <Text className="first-p" col={firstParagraph.col} splitAndAnime>
          {firstParagraph.text}
        </Text>
        <CustomLink to="/about" text="Learn more" textLink="about me" />
        <Text className="second-p" col={secondParagraph.col} splitAndAnime>
          {secondParagraph.text}
        </Text>
      </div>
    </main>
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
    content: indexJson {
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
`

export default IndexPage
