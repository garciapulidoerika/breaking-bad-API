
import React from 'react'

export const QuoteC = ({quote}) => {
  return (
    <div>
        <p>{quote.text} <br />
      <span>- {quote.author}</span>
    </p>
    </div>
  )
}
