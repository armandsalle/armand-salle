import React, { useState, createContext } from "react"

const defaultState = {
  hasFooter: true,
  setFooter: () => {},
}
export const LayoutContext = createContext(defaultState)

export const LayoutProvider = ({ children }) => {
  const [hasFooter, setFooter] = useState(true)

  return (
    <LayoutContext.Provider
      value={{
        hasFooter,
        setFooter,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
