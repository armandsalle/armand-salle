import React from "react"
import { LayoutProvider } from "./src/contexts/layoutContext"
import { ProjectHoverProvider } from "./src/contexts/projectHoverContext"
// import imagesLoaded from "imagesloaded"

// window.addEventListener("DOMContentLoaded", () =>
//   console.log("DOMContentLoaded")
// )
// window.addEventListener("load", () => console.log("load"))

// document.fonts.ready.then(function () {
//   console.log("Fonts ready")
// })

// imagesLoaded(document.querySelector("body"), () => {
//   console.log("all images are loaded")
// })

export const wrapRootElement = ({ element }) => {
  return (
    <LayoutProvider>
      <ProjectHoverProvider>{element}</ProjectHoverProvider>
    </LayoutProvider>
  )
}
