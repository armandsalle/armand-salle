import React from "react"
import PropTypes from "prop-types"
import "../../styles/main.scss"
import Nav from "../nav"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../footer"

const Layout = ({ children }) => {
  const {
    layoutJson: { footer },
  } = useStaticQuery(graphql`
    {
      layoutJson {
        footer {
          socialLinks {
            textLink
            url
          }
          text
        }
      }
    }
  `)

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer footer={footer} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
