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
