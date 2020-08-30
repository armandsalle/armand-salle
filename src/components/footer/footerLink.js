import React from "react"
import { Link } from "gatsby"

const FooterLink = ({ to, text }) => {
  return (
    <Link to={to} className="footer-link">
      <span className="footer-link__first">{text}</span>
      <span className="footer-link__second">{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="96.001"
        height="48"
        viewBox="0 0 96.001 48"
      >
        <path
          d="M-6224,6571v-33.556l-30.027,30.549-.975-.963V6568h-57v-8h54.064l29-29H-6264v-8h48v48Z"
          transform="translate(6312 -6522.999)"
          fill="currentColor"
        />
      </svg>
    </Link>
  )
}

export default FooterLink
