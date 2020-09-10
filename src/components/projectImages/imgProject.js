import React, { useEffect, useCallback, useRef } from "react"
import { useInView } from "react-intersection-observer"
import anime from "animejs"
import Img from "gatsby-image"
import cn from "classname"

const ImgProject = ({ image: { col, offset, src, alt } }) => {
  const [imgProjectRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  })

  const imgRef = useRef(null)

  const setRefs = useCallback(
    node => {
      imgRef.current = node
      imgProjectRef(node)
    },
    [imgProjectRef]
  )

  useEffect(() => {
    if (inView) {
      anime({
        targets: imgRef.current,
        opacity: [0, 1],
        duration: 1200,
        easing: "easeOutSine",
      })
    }
  }, [inView])

  return (
    <div
      className={cn("project-images__item", `col-${col}`, `offset-${offset}`)}
      ref={setRefs}
    >
      <Img fluid={src.childImageSharp.fluid} alt={alt} fadeIn={false} />
    </div>
  )
}

export default ImgProject
