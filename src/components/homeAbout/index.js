import React, { useEffect, useCallback, useRef } from "react"
import Text from "../text"
import CustomLink from "../customLink"
import FunnyCircle from "../funnyCircle"
import anime from "animejs"

const HomeAbout = ({
  about: { firstParagraph, secondParagraph, linkAbout },
  page,
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
    if (page !== "about") {
      customLinkToAbout.current.addEventListener("mouseenter", enterLink, false)
      customLinkToAbout.current.addEventListener("mouseleave", leaveLink, false)
    }
  }, [enterLink, leaveLink, page])
  return (
    <section className="home-about">
      <Text className="first-p" col={firstParagraph.col} splitAndAnime as="p">
        {firstParagraph.text}
      </Text>

      {page !== "about" && (
        <div className="custom-about-link" ref={customLinkToAbout}>
          <CustomLink to="/about/" text="Learn more" textLink="about me" />

          <img
            src={linkAbout.src.childImageSharp.fixed.src}
            alt={linkAbout.alt}
          />
        </div>
      )}

      <Text className="second-p" col={secondParagraph.col} splitAndAnime as="p">
        {secondParagraph.text}
      </Text>

      {page !== "about" && <FunnyCircle />}
    </section>
  )
}

export default HomeAbout
