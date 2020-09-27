import React from "react"
import { LayoutProvider } from "./src/contexts/layoutContext"
import { ProjectHoverProvider } from "./src/contexts/projectHoverContext"
import { AnimationProvider } from "./src/contexts/animationContext"

export const wrapRootElement = ({ element }) => {
  return (
    <LayoutProvider>
      <ProjectHoverProvider>
        <AnimationProvider>{element}</AnimationProvider>
      </ProjectHoverProvider>
    </LayoutProvider>
  )
}

export const shouldUpdateScroll = () => {
  return false
}

export const onRouteUpdate = () => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 250)
}
