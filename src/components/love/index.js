import React from "react"
import Text from "../text"
import Things from "./things"
import Contact from "./contact"
import MiniText from "./miniText"

const Love = ({ love }) => {
  return (
    <section className="love">
      <Text className="h2" as="h2" splitAndAnime>
        {love.loveTitle}
      </Text>

      <Things loveList={love.loveList} />

      <MiniText miniText={love.miniText} />

      <Contact contactText={love.contactText} />
    </section>
  )
}

export default Love
