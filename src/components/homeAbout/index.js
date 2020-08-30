import React, { useEffect, useCallback, useRef } from "react"
import Text from "../text"
import CustomLink from "../customLink"
import FunnyCircle from "../funnyCircle"
import anime from "animejs"

const HomeAbout = ({
  about: { firstParagraph, secondParagraph, linkAbout },
}) => {
  const customLinkToAbout = useRef(null)

  const enterLink = useCallback(() => {
    anime.remove(customLinkToAbout.current.querySelector("img"))
    anime({
      targets: customLinkToAbout.current.querySelector("img"),
      opacity: 1,
      translateY: "110%",
      rotate: "-10deg",
      easing: "easeOutSine",
      duration: 300,
    })
  }, [])

  const leaveLink = useCallback(() => {
    anime.remove(customLinkToAbout.current.querySelector("img"))
    anime({
      targets: customLinkToAbout.current.querySelector("img"),
      opacity: 0,
      translateY: "50%",
      rotate: "0deg",
      easing: "easeOutSine",
      duration: 400,
    })
  }, [])

  useEffect(() => {
    customLinkToAbout.current.addEventListener("mouseenter", enterLink, false)
    customLinkToAbout.current.addEventListener("mouseleave", leaveLink, false)
  }, [enterLink, leaveLink])
  return (
    <section className="home-about">
      <Text className="first-p" col={firstParagraph.col} splitAndAnime as="p">
        {firstParagraph.text}
      </Text>

      <div className="custom-about-link" ref={customLinkToAbout}>
        <CustomLink to="/about" text="Learn more" textLink="about me" />

        <img
          src={linkAbout.src.childImageSharp.fixed.src}
          alt={linkAbout.alt}
        />
      </div>

      <Text className="second-p" col={secondParagraph.col} splitAndAnime as="p">
        {secondParagraph.text}
      </Text>

      <FunnyCircle />
    </section>
  )
}

export default HomeAbout
