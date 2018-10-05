import React from 'react'

const HighlightMark = (props) => (
  <span className='highlight'>
    {props.children}
    <style jsx>{`
      .highlight {
        background-color: #e3effa;
      }
    `}</style>
  </span>
)

export default HighlightMark