import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  margin-bottom: 1.5em;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  color: #203340;
`

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.94;
  padding-bottom: 3rem;
  color: #203340;
`

export const renderNode = (props) => {
  const { attributes, children, node } = props

  switch (node.type) {
    case 'title':
      return <Title {...attributes}>{children}</Title>
    case 'paragraph':
      return <Paragraph {...attributes}>{children}</Paragraph>
    default:
      throw new Error('Couldn\'t render node: ', props)
  }
}
