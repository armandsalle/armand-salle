import React from "react"
import Text from "../text"
import CustomLink from "../customLink"

const Contact = ({ contactText }) => {
  return (
    <div className="like__contact">
      <Text as="p" splitAndAnime className="like__contact__text">
        {contactText}
      </Text>
      <CustomLink to="/about/" text="Contact" textLink="me" />
    </div>
  )
}

export default Contact
