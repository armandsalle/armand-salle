/*
    https://github.com/ClementVion/gatsby-starter
    Clement Vion
*/
import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

import "./index.scss"

const Scroll = ({ children }) => {
  // Scroll variables
  const refScroll = useRef(null)

  // Init scroll
  useEffect(() => {
    import("locomotive-scroll").then(locomotiveModule => {
      new locomotiveModule.default({
        el: refScroll.current,
        smooth: true,
        smoothMobile: false,
      })
    })
  }, [])

  return (
    <>
      <div
        className="Scroll"
        ref={refScroll}
        data-scroll-container
        id="fixed-elements-target"
      >
        {children}
      </div>
    </>
  )
}

Scroll.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Scroll
