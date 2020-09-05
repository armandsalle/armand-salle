import React from "react"
import Line from "./line"

const Text = ({ children, col, className, splitAndAnime, as, love }) => {
  const inner = children.split("<br />").map((text, i) =>
    love && i === 0 ? (
      <Line key={i} className="color-primary">
        {text}
      </Line>
    ) : (
      <Line key={i}>{text}</Line>
    )
  )

  switch (as) {
    case "p":
      return (
        <p className={`${className} ${col ? "col-" + col : ""}`}>
          {splitAndAnime && inner}
          {!splitAndAnime && children}
        </p>
      )
    case "h2":
      return (
        <h2 className={`${className} ${col ? "col-" + col : ""}`}>
          {splitAndAnime && inner}
          {!splitAndAnime && children}
        </h2>
      )
    default:
      return (
        <p className={`${className} ${col ? "col-" + col : ""}`}>
          {splitAndAnime && inner}
          {!splitAndAnime && children}
        </p>
      )
  }
}

export default Text
