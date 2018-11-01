import React, { Component, Fragment, createRef } from 'react'
import AddComment from './add-comment'
import CommentForm from './comment-form'
import { getVisibleSelectionRect } from 'get-selection-range'
import { Range } from 'slate'
import { thumbsUp } from 'react-icons-kit/feather/thumbsUp';

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
    this.range = null
  }

  handleClick = () => {
    this.props.editor.toggleMark('highlight')
    this.range = Range.fromJSON(this.props.editor.value.selection).toJSON()
    this.setState({ showCommentForm: true })
  }

  onSelect = () => {
    const rect = getVisibleSelectionRect()
    if (!rect) return false
    if (rect.width === 0 && this.state.showAddComment) {
      this.setState(({ showAddComment, showCommentForm }) => {
        if (showCommentForm) this.props.editor.select(this.range).toggleMark('highlight').deselect()
        return { showAddComment: false, showCommentForm: false }
      })
    }
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
        containerBoundTop -
        10
      this.setState({
        showAddComment: true,
        left: left,
        top: top
      })
    }
  }

  render () {
    return (
      <Fragment>
        {
          this.state.showAddComment &&
            <AddComment
              top={this.state.top}
              left={this.state.left}
              onClick={this.handleClick} />
        }

        {
          this.state.showCommentForm &&
            <CommentForm
              id={this.props.id}
              top={this.state.top} />
        }

        <div
          onSelect={this.onSelect}
          ref={this.editor}>
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}
