import React from "react"

const Word = React.memo(({ word }) => {
  return (
    <div>
      <span className="word">{word}</span>
    </div>
  )
})

export default Word
