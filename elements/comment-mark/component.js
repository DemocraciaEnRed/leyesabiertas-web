import React from 'react'

const CommentMark = (props) => (
  <span
    className='comment'
    data-id={props.id}
    onMouseEnter={props.onMouseEnter(props.id)}
    onMouseLeave={props.onMouseLeave(props.id)}
    onClick={props.onClick(props.id)}>
    {props.children}
    <style jsx>{`
      .comment {
        background-color: rgba(92, 151, 188, .4);
        cursor: pointer;
      }
    `}</style>
  </span>
)

export default CommentMark