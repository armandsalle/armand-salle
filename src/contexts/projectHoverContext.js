import React, { useState, createContext } from "react"

const defaultState = {
  isHover: false,
  setHover: () => {},
}
export const ProjectHoverContext = createContext(defaultState)

export const ProjectHoverProvider = ({ children }) => {
  const [isHover, setHover] = useState(false)

  return (
    <ProjectHoverContext.Provider
      value={{
        isHover,
        setHover,
      }}
    >
      {children}
    </ProjectHoverContext.Provider>
  )
}
