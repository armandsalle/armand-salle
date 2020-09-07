import React from "react"

const SocialLink = ({ link: { url, textLink } }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="social-link">
      <span className="social-link__first">{textLink}</span>
      <span className="social-link__second">{textLink}</span>
    </a>
  )
}
const FooterSocialLinks = ({ socialLinks }) => {
  return (
    <div className="footer__social-links">
      {socialLinks.map((link, i) => (
        <SocialLink link={link} key={i} />
      ))}
    </div>
  )
}

export default FooterSocialLinks
