import React from "react"
import Item from "./item"

const Resume = ({ resume }) => {
  return (
    <section className="resume">
      {Object.entries(resume).map((el, i) => (
        <Item key={i} experience={el} />
      ))}
    </section>
  )
}

export default Resume
