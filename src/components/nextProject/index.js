import React from "react"
import ProjectThumb from "../projectThumb"

const NextProject = ({ project: { title, thumbnail, slug } }) => {
  return (
    <section className="next-project">
      <ProjectThumb title={title} thumbnail={thumbnail.publicURL} url={slug} />
    </section>
  )
}

export default NextProject
