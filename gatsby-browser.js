import React from "react"
import { LayoutProvider } from "./src/contexts/layoutContext"
import { ProjectHoverProvider } from "./src/contexts/projectHoverContext"

export const wrapRootElement = ({ element }) => {
  return (
    <LayoutProvider>
      <ProjectHoverProvider>{element}</ProjectHoverProvider>
    </LayoutProvider>
  )
}
