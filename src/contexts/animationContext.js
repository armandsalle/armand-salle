import React, { useState, createContext } from "react"

const defaultState = {
  exitAnimation: "opacity",
  enterAnimation: "opacity",
  setExitAnimation: () => {},
  setEnterAnimation: () => {},
}
export const AnimationContext = createContext(defaultState)

export const AnimationProvider = ({ children }) => {
  const [exitAnimation, setExitAnimation] = useState("opacity")
  const [enterAnimation, setEnterAnimation] = useState("opacity")

  return (
    <AnimationContext.Provider
      value={{
        exitAnimation,
        setExitAnimation,
        enterAnimation,
        setEnterAnimation,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}
