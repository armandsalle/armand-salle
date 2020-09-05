import React from "react"
import Text from "../text"
import Things from "./things"
import Contact from "./contact"
import MiniText from "./miniText"

const Love = ({ like }) => {
  return (
    <section className="like">
      <Text className="h2" as="h2" splitAndAnime>
        {like.likeTitle}
      </Text>

      <Things likeList={like.likeList} />

      <MiniText miniText={like.miniText} />

      <Contact contactText={like.contactText} />
    </section>
  )
}

export default Love
