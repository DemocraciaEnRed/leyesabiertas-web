import React from 'react'

export default ({ onMarkClick, type, children }) => (
  <button
    onPointerDown={onMarkClick(type)}
    className='style-button'>
    {children}
    <style jsx>{`
      .style-button {
        border: 0;
        background-color: #203340;
        color: #FFF;
      }
    `}</style>
  </button>
)