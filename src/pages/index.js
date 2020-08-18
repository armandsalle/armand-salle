import React from "react"
import SEO from "../components/seo"
import HeroTitle from "../components/heroTitle"
import Hero from "../components/hero"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HeroTitle
      title="ARMAND SALLÉ"
      infoFirstLine="NANTES, FRANCE"
      infoSecondLine="2020"
    />
    <Hero />
  </>
)

export default IndexPage
