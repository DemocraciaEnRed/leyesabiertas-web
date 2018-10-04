import React from 'react'

export default (props) => (
  <button
    onPointerDown={props.function}
    className='toolbar-button'>
    {props.children}
    <style jsx>{`
      button {
        border: 0;
        background-color: #203340;
        color: #FFF;
      }
    `}</style>
  </button>
)