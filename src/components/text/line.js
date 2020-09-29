import React from "react"
import cn from "classname"

const Line = React.memo(({ children, className }) => {
  return (
    <span className={cn("hide", className)}>
      <span className="line">{children}</span>
    </span>
  )
})

export default Line
