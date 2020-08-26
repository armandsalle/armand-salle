import React from "react"
import Line from "./line"

const Text = ({ children, col, className, splitAndAnime }) => {
  return (
    <p className={`${className} ${col ? "col-" + col : ""}`}>
      {splitAndAnime &&
        children.split("<br />").map((text, i) => <Line key={i}>{text}</Line>)}
      {!splitAndAnime && children}
    </p>
  )
}

export default Text
