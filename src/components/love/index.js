import React, { useRef, useEffect } from "react"
import Img from "gatsby-image"
import Text from "../text"

const Love = ({ love: { title, images } }) => {
  const imagesRef = useRef(null)

  useEffect(() => {
    let currentImg = 0
    let currentZindex = 1
    let interval

    const images = imagesRef.current.querySelectorAll(".love__image_wrapper")

    const changeZindex = () => {
      currentZindex++
      currentImg++
      if (currentImg > images.length - 1) {
        currentImg = 0
      }
      images[currentImg].style.zIndex = currentZindex
    }

    imagesRef.current.addEventListener("mouseenter", () => {
      changeZindex()
      interval = setInterval(changeZindex, 150)
    })

    imagesRef.current.addEventListener("mouseleave", () =>
      clearInterval(interval)
    )
  }, [])

  return (
    <section className="love">
      <Text as="h2" splitAndAnime className="love__title" love>
        {title}
      </Text>
      <div className="love__images" ref={imagesRef}>
        {images.map((el, i) => (
          <div className="love__image_wrapper" key={i}>
            <Img fluid={el.src.childImageSharp.fluid} alt={el.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Love
