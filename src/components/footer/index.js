import React from "react"
import BackToTop from "./backToTop"
import FooterSocialLinks from "./FooterSocialLinks"
import FooterLink from "./footerLink"

const Footer = ({ footer: { text, socialLinks } }) => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <BackToTop />
        <div className="footer__content">
          <p>{text}</p>
          <div className="footer__links">
            <FooterLink to="/about" text="About" />
            <FooterLink to="/cases" text="Cases" />
          </div>
        </div>
        <FooterSocialLinks socialLinks={socialLinks} />
      </div>
    </footer>
  )
}

export default Footer
