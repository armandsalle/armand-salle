import React, { useContext } from "react"
import PropTypes from "prop-types"
import "../../styles/main.scss"
import Nav from "../nav"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../footer"
import { LayoutContext } from "../../contexts/layoutContext"

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

  const { hasFooter } = useContext(LayoutContext)

  return (
    <>
      <Nav />
      <main>{children}</main>
      {hasFooter && <Footer footer={footer} />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
