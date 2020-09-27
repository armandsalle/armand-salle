import React, { useState, createContext } from "react"

const defaultState = {
  exitAnimation: { name: "opacity" },
  enterAnimation: { name: "opacity" },
  setExitAnimation: () => {},
  setEnterAnimation: () => {},
  animationsCanRuns: false,
  setAnimationsCanRuns: () => {},
}
export const AnimationContext = createContext(defaultState)

export const AnimationProvider = ({ children }) => {
  const [exitAnimation, setExitAnimation] = useState({ name: "opacity" })
  const [enterAnimation, setEnterAnimation] = useState({ name: "opacity" })
  const [animationsCanRuns, setAnimationsCanRuns] = useState(false)

  return (
    <AnimationContext.Provider
      value={{
        exitAnimation,
        setExitAnimation,
        enterAnimation,
        setEnterAnimation,
        animationsCanRuns,
        setAnimationsCanRuns,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}
