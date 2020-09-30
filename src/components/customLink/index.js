import React from "react"
import { Link } from "gatsby"

const CustomLink = React.memo(({ to, text, textLink, native, blank }) => {
  const inner = (
    <>
      <span className="link__text">{text}</span>
      <span className="link__text-link">
        <span className="link__text-link__normal">{textLink}</span>
        <span className="link__text-link__italic">{textLink}</span>
      </span>
    </>
  )

  return (
    <>
      {native ? (
        <a
          className="link"
          href={to}
          target={blank && "_blank"}
          rel="noreferrer"
        >
          {inner}
        </a>
      ) : (
        <Link className="link" to={to}>
          {inner}
        </Link>
      )}
    </>
  )
})

export default CustomLink
