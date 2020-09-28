import React from "react"
import { LayoutProvider } from "./src/contexts/layoutContext"
import { ProjectHoverProvider } from "./src/contexts/projectHoverContext"
import { AnimationProvider } from "./src/contexts/animationContext"
import Loaded from "./src/components/loaded"

export const wrapRootElement = ({ element }) => {
  return (
    <LayoutProvider>
      <ProjectHoverProvider>
        <AnimationProvider>
          <Loaded>{element}</Loaded>
        </AnimationProvider>
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
