import React from "react"
import CustomLink from "../customLink"
import Text from "../text"

const ProjectContent = ({ link, text }) => {
  return (
    <div className="project-content">
      <CustomLink to={link} text="Launch" textLink="site" native blank />
      <Text as="p" className="project-content__text" splitAndAnime>
        {text}
      </Text>
    </div>
  )
}

export default ProjectContent
