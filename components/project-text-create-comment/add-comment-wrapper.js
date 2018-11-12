import React, { Component, Fragment, createRef } from 'react'
import AddComment from './add-comment'
import CommentForm from './comment-form'
import { getVisibleSelectionRect } from 'get-selection-range'
import ToolsWrapper from './tools-wrapper'

export default class AddCommentWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      top: 0,
      left: 0,
      showAddComment: false,
      showCommentForm: false
    }
    this.editor = createRef()
    this.decoration = null
  }

  handleClickAdd = () => {
    this.setState({ showCommentForm: true })
    let decoration = {
      focus: this.props.editor.value.selection.focus.toJSON(),
      anchor: this.props.editor.value.selection.anchor.toJSON(),
      mark: {
        type: 'comment',
        data: {
          preview: true
        }
      }
    }
    const decorations = this.props.editor.value.decorations.push(decoration)
    this.props.editor.setDecorations(decorations)
    decoration.mark.data = {}
    this.decoration = decoration
  }

  onSelect = () => {
    const rect = getVisibleSelectionRect()

    if (rect && rect.width > 0 && !this.state.showToolbar) {
      const containerBound = this.editor.current.getBoundingClientRect()
      const {
        left: containerBoundLeft,
        top: containerBoundTop
      } = containerBound
      const left =
        rect.left +
        rect.width / 2 -
        containerBoundLeft -
        150 / 2
      const top =
        rect.top -
        containerBoundTop + 70
      this.setState({
        showAddComment: true,
        left: left,
        top: top
      })
    }
  }

  clearTools = () => {
    const decorations = this.props.editor.value.decorations.filter(d => !d.mark.data.get('preview'))
    this.props.editor.setDecorations(decorations)
    this.setState({ showAddComment: false, showCommentForm: false })
  }

  render () {
    return (
      <Fragment>
        <ToolsWrapper clearTools={this.clearTools}>
          {
            this.state.showAddComment &&
              <AddComment
                top={this.state.top}
                left={this.state.left}
                onClick={this.handleClickAdd} />
          }
          {
            this.state.showCommentForm &&
              <CommentForm
                decoration={this.decoration}
                editor={this.props.editor}
                id={this.props.id}
                top={this.state.top} />
          }
        </ToolsWrapper>
        <div
          onSelect={this.onSelect}
          ref={this.editor}>
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}
