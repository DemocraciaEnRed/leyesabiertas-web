import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { hasMark, hasBlock } from './utils'
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  TitleIcon
} from './icons'

const Container = styled.div`
  position: sticky;
  top: 0;
  margin-bottom: 48px;
  padding: 10px 15px;
  border-radius: 3px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #101a21;
  z-index: 0;
`

export default class Toolbar extends Component {
  static propTypes = {
    editor: PropTypes.any
  }

  render () {
    return (
      <Container>
        {this.renderMarkButton(BoldIcon, 'bold')}
        {this.renderMarkButton(ItalicIcon, 'italic')}
        {this.renderMarkButton(UnderlineIcon, 'underlined')}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {this.renderBlockButton(TitleIcon, 'title')}
      </Container>
    )
  }

  renderMarkButton = (Button, type) => (
    <Button
      active={hasMark(this.props.editor.value, type)}
      onMouseDown={(evt) => this.handleMarkClick(evt, type)} />
  )

  handleMarkClick = (evt, type) => {
    evt.preventDefault()
    this.props.editor.toggleMark(type)
  }

  renderBlockButton = (Button, type) => {
    const { value } = this.props.editor
    let isActive = hasBlock(value, type)

    if (['ordered-list', 'bulleted-list'].includes(type)) {
      const parent = value.document.getParent(value.blocks.first().key)
      isActive = hasBlock(value, 'list-item') && parent && parent.type === type
    }

    return (
      <Button
        active={isActive}
        onMouseDown={(evt) => this.handleBlockClick(evt, type)} />
    )
  }

  handleBlockClick = (evt, type) => {
    evt.preventDefault()
    const isSetted = hasBlock(this.props.editor.value, type)
    this.props.editor.setBlocks(isSetted ? 'paragraph' : type)
  }
}
