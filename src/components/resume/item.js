import React, { useEffect, useRef, useCallback, useContext } from "react"
import { useInView } from "react-intersection-observer"
import { AnimationContext } from "../../contexts/animationContext"
import Text from "../text"

const Item = React.memo(({ experience }) => {
  const [title, content] = experience
  const { animationsCanRuns } = useContext(AnimationContext)

  const [itemViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "0px",
  })

  const itemRef = useRef(null)

  const setRefs = useCallback(
    node => {
      itemRef.current = node
      itemViewRef(node)
    },
    [itemViewRef]
  )

  useEffect(() => {
    if (inView && animationsCanRuns) {
      itemRef.current
        .querySelector(".resume__title span")
        .classList.remove("translate")
    }
  }, [inView, animationsCanRuns])

  return (
    <div className="resume__item" ref={setRefs}>
      <div className="resume__title">
        <span className="translate">{title}</span>
      </div>
      <Text as="p" className="resume__content">
        {content}
      </Text>
    </div>
  )
})

export default Item
