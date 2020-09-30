import React, { useCallback } from "react"
import anime from "animejs"

const BackToTop = React.memo(() => {
  const getBackToTopWithACoolEffect = useCallback(() => {
    const scrollPos = { y: window.scrollY }

    anime
      .timeline()
      .add({
        targets: ".back-to-top",
        rotate: "720deg",
        easing: "easeOutSine",
        duration: 500,
        complete: () => {
          anime.set(".back-to-top", {
            rotate: "0deg",
          })
        },
      })
      .add(
        {
          targets: scrollPos,
          y: 0,
          easing: "easeOutSine",
          duration: 1000,
          update: e => {
            window.scrollTo(0, e.animations[0].currentValue)
          },
        },
        "-=100"
      )
  }, [])

  return (
    <button className="back-to-top" onClick={getBackToTopWithACoolEffect}>
      Back to top
    </button>
  )
})

export default BackToTop
