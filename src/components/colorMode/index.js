import React, { useCallback, useState } from "react"

const colors = [
  {
    primary: "#F3D631",
    secondary: "#E65A3E",
    white: "#296783",
    black: "#FFF8F0",
  },
  {
    primary: "#4A4BC7",
    secondary: "#EE9BE4",
    white: "#FFF8F0",
    black: "#00AE91",
  },
  {
    primary: "#EE1B49",
    secondary: "#645E9D",
    white: "#DFDFDF",
    black: "#141414",
  },
]

const ColorMode = () => {
  const [colorIndex, setColorIndex] = useState(0)

  const changeColorMode = useCallback(() => {
    Object.entries(colors[colorIndex]).forEach(el => {
      document.documentElement.style.setProperty(`--color-${el[0]}`, el[1])
    })

    colorIndex + 1 > 2
      ? setColorIndex(0)
      : setColorIndex(prevIndex => prevIndex + 1)
  }, [colorIndex])

  return (
    <button
      type="button"
      aria-label="Change color"
      className="color-mode"
      onClick={changeColorMode}
    >
      <svg className="color-mode__svg">
        <circle className="color-mode__circle" cx="30" cy="30" r="30" />
      </svg>
    </button>
  )
}

export default ColorMode
