import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Editor, findRange } from 'slate-react'
import { Value, KeyUtils, Range, Change, Mark } from 'slate'
import { getVisibleSelectionRect } from 'get-selection-range'
import WithUserContext from '../with-user-context/component'
import CommentsGrid from '../comments-grid/component'
import EditorTitle from '../../elements/editor-title/component'
import TitleMark from '../../elements/title-mark/component'
import CommentMark from '../../elements/comment-mark/component'
import CommentCounter from '../../elements/comment-counter/component'
import AddComment from '../../elements/add-comment/component'
const API_URL = process.env.API_URL

const StyledEditorWrapper = styled.div`
  width: 100%;
  padding: 0 100px;
  margin-top: 48px;
  position: relative;
  .editor {
    max-width: 700px;
    span {
      font-size: 1.8rem;
      line-height: 1.89;
      color: #203340;
    }
  }
`

class UserEditor extends Component {
  state = {
    value: null,
    selection: null,
    showAddComment: false,
    top: null,
    left: null,
    commentsIds: []
  }

  schema = {
    marks: {
      comment: {
        isAtomic: true
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.withComments !== this.props.withComments) {
      this.forceUpdate()
    }
  }

  componentDidMount () {
    if (this.props.value) {
      this.setState({
        value: Value.fromJSON(this.props.value)
      })
    }
  }

  componentDidUpdate () {
    const rect = getVisibleSelectionRect()
    if (!rect) { return }
    if (rect.width === 0 && this.state.showToolbar) {
      this.setState({ showAddComment: false })
    }
    if (rect && rect.width > 0 && !this.state.showToolbar) {
      const containerBound = this.myEditor.current.getBoundingClientRect()
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
        30
      this.setState({
        showAddComment: true,
        left: left,
        top: top
      })
    }
  }

  onChange = ({ value }) => {
    this.setState({
      value
    })
  }

  onCommentHoverIn = (id) => (e) => {
    const top = e.clientY - 125
    const left = e.clientX - 100
    this.setState((prevState) => {
      return {
        commentsIds: prevState.commentsIds.concat(id),
        top: top,
        left: left
      }
    })
  }

  onCommentHoverOut = () => (e) => {
    this.setState({
      commentsIds: []
    })
  }

  fetchComments = () => async (e) => {
    e.preventDefault()
    try {
      const comments = await (await fetch(`${API_URL}/api/v1/documents/${this.props.id}/comments?ids=${this.state.commentsIds}`)).json()
      this.setState({
        comments: comments
      })
    } catch (err) {
      console.error(err)
    }
  }

  renderMark = (props) => {
    switch (props.mark.type) {
      case 'title':
        return <TitleMark {...props} />
      case 'comment':
        return <CommentMark
          id={props.mark.toJSON().data['data-id']}
          onMouseEnter={this.onCommentHoverIn}
          onMouseLeave={this.onCommentHoverOut}
          onClick={this.fetchComments}
          {...props} />
      default:
        return false
    }
  }

  render () {
    if (!this.state.value) return null
    return (
      <StyledEditorWrapper>
        {this.props.withComments && this.state.commentsIds.length > 0 &&
          <CommentCounter
            count={this.state.commentsIds.length}
            top={this.state.top}
            left={this.state.left} />
        }
        {this.props.withComments && this.state.comments && this.state.comments.length > 0 &&
          <CommentsGrid comments={this.state.comments} />
        }
        <EditorTitle>Artículos de la propuesta</EditorTitle>
        <Editor
          className='editor'
          schema={this.schema}
          value={this.state.value}
          onChange={this.onChange}
          spellCheck={false}
          renderMark={this.renderMark}
          readOnly />
      </StyledEditorWrapper>
    )
  }
}

export default WithUserContext(UserEditor)
