import React, { useCallback, useEffect, useRef } from "react"
import { Link } from "gatsby"
import anime from "animejs"

const Nav = () => {
  const navRef = useRef(null)

  const toggleHeader = useCallback(() => {
    const pixels = window.pageYOffset

    if (pixels > 20) {
      navRef.current.classList.add("scrolled")
    } else {
      navRef.current.classList.remove("scrolled")
    }
  }, [])

  useEffect(() => {
    document.addEventListener("scroll", function () {
      toggleHeader()
    })

    return () => {
      document.removeEventListener("scroll", function () {
        toggleHeader()
      })
    }
  }, [toggleHeader])

  useEffect(() => {
    const timeline = anime
      .timeline({
        autoplay: false,
        easing: "easeOutSine",
        duration: 350,
      })
      .add({
        targets: ".nav__item",
        opacity: 1,
        delay: (_, i) => 600 + i * 130,
      })

    timeline.play()
  }, [])

  return (
    <nav className="nav" ref={navRef}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" activeClassName="active">
            HOME
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about/" activeClassName="active">
            ABOUT
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/cases/" activeClassName="active" partiallyActive={true}>
            CASES
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
