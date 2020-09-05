import React from "react"
import { LayoutProvider } from "./src/contexts/layoutContext"

export const wrapRootElement = ({ element }) => {
  return <LayoutProvider>{element}</LayoutProvider>
}
