import React, { useEffect, useRef, useCallback } from "react"
import { useInView } from "react-intersection-observer"
import Text from "../text"

const Item = React.memo(({ experience }) => {
  const [title, content] = experience

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
    if (inView) {
      itemRef.current
        .querySelector(".resume__title span")
        .classList.remove("translate")
    }
  }, [inView])

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
