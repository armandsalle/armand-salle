import React from "react"
import ImgProject from "./imgProject"

const ProjectImages = ({ images }) => {
  return (
    <section className="project-images">
      {images.map(image => (
        <ImgProject key={image.id} image={image} />
      ))}
    </section>
  )
}

export default ProjectImages
