import React, { useState, createContext } from "react"

const defaultState = {
  exitAnimation: { name: "opacity" },
  enterAnimation: { name: "opacity" },
  setExitAnimation: () => {},
  setEnterAnimation: () => {},
}
export const AnimationContext = createContext(defaultState)

export const AnimationProvider = ({ children }) => {
  const [exitAnimation, setExitAnimation] = useState({ name: "opacity" })
  const [enterAnimation, setEnterAnimation] = useState({ name: "opacity" })

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
