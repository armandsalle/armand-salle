import React from "react"
import Word from "./word"

const Title = React.memo(({ word, variant }) => {
  const wordToArr = word.split(" ")

  return (
    <>
      <div>
        {variant ? (
          <>
            <div>
              <span className="variant">
                <span className="bar"></span>
                {wordToArr[0]}
              </span>
            </div>
            {wordToArr.length > 0 && (
              <>
                {" "}
                <Word word={wordToArr[1]} />
              </>
            )}
          </>
        ) : (
          <Word word={word} />
        )}
      </div>
      <br />
    </>
  )
})

export default Title
