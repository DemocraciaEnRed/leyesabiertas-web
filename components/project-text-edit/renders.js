import React from 'react'
import styled from 'styled-components'

const nodes = {
  title: styled.h2`
    margin-bottom: 1.5em;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.42;
    letter-spacing: normal;
    color: #203340;
  `,

  paragraph: styled.p`
    font-size: 18px;
    line-height: 1.94;
    padding-bottom: 3rem;
    color: #203340;
  `,

  'ordered-list': styled.ol``,

  'bulleted-list': styled.ul``,

  'list-item': styled.li`
    font-size: 18px;
    line-height: 1.94;
    padding-bottom: 3rem;
    color: #203340;
  `
}

const marks = {
  bold: styled.strong`font-weight: bold`,

  italic: styled.em`font-style: italic`,

  underlined: styled.u`font-decoration: underline`,

  comment: styled.span`` // don't render anything for now
}

export const renderNode = (props) => {
  const { attributes, children, node } = props

  if (!nodes.hasOwnProperty(node.type)) {
    throw new Error(`Couldn't render node of type ${node.type}.`, props)
  }

  const Node = nodes[node.type]
  return <Node {...attributes}>{children}</Node>
}

export const renderMark = (props, editor, next) => {
  const { children, mark, attributes } = props

  if (!marks.hasOwnProperty(mark.type)) {
    return next()
  }

  const Mark = marks[mark.type]
  return <Mark {...attributes}>{children}</Mark>
}
