import React from "react"
import PropTypes from "prop-types"
import "../../styles/main.scss"
import Nav from "../nav"
import Scroll from "../scroll"
// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Nav />
      <Scroll>
        <div className="Layout">
          <main>{children}</main>
          <footer></footer>
        </div>
      </Scroll>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
