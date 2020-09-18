import React, { useCallback, useEffect, useRef } from "react"
import { Link } from "gatsby"

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
      document.addRemoveListener("scroll", function () {
        toggleHeader()
      })
    }
  }, [toggleHeader])

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
