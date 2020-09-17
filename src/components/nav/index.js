import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav className="nav">
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
