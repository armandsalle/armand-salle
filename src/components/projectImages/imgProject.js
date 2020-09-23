import React from "react"
import Img from "gatsby-image"
import cn from "classname"

const ImgProject = ({ image: { col, offset, src, alt } }) => {
  return (
    <div
      className={cn("project-images__item", `col-${col}`, `offset-${offset}`)}
    >
      <Img fluid={src.childImageSharp.fluid} alt={alt} fadeIn={true} />
    </div>
  )
}

export default ImgProject
