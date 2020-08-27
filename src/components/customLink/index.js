import React from "react"
import { Link } from "gatsby"

const CustomLink = ({ to, text, textLink }) => {
  return (
    <Link className="link" to={to}>
      <span className="link__text">{text}</span>
      <span className="link__text-link">
        <span className="link__text-link__normal">{textLink}</span>
        <span className="link__text-link__italic">{textLink}</span>
      </span>
    </Link>
  )
}

export default CustomLink
