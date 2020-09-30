import React, { useContext } from "react"
import BackToTop from "./backToTop"
import FooterSocialLinks from "./footerSocialLinks"
import FooterLink from "./footerLink"
import { LayoutContext } from "../../contexts/layoutContext"

const Footer = React.memo(({ footer: { text, socialLinks } }) => {
  const { hasFooter } = useContext(LayoutContext)

  return (
    <footer
      className="footer"
      style={{ display: !hasFooter ? "none" : "block" }}
    >
      <div className="footer__wrapper">
        <BackToTop />
        <div className="footer__content">
          <p>{text}</p>
          <div className="footer__links">
            <FooterLink to="/" text="Index" />
            <FooterLink to="/about/" text="About" />
            <FooterLink to="/cases/" text="Cases" />
          </div>
        </div>
        <FooterSocialLinks socialLinks={socialLinks} />
      </div>
    </footer>
  )
})

export default Footer
