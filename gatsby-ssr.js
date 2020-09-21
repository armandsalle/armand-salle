/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="promise_DOMEvent_javascript"
      type="text/javascript"
      async
      dangerouslySetInnerHTML={{
        __html: `
        window.loadPromise = new Promise(resolve => {
            window.addEventListener('DOMContentLoaded', resolve)
        })
    `,
      }}
    />,
  ])
}
