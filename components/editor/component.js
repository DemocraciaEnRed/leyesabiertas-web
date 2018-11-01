import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { Editor, findDOMRange } from 'slate-react'
import { Value, KeyUtils, Range, Change, Mark } from 'slate'
import { getVisibleSelectionRect } from 'get-selection-range'
import WithUserContext from '../with-user-context/component'
import CommentsGrid from '../comments-grid/component'
import EditorTitle from '../../elements/editor-title/component'
import TitleMark from '../../elements/title-mark/component'
import CommentMark from '../../elements/comment-mark/component'
import CommentCounter from '../../elements/comment-counter/component'
import HighlightMark from '../../elements/highlight-mark/component'
import AddComment from '../../elements/add-comment/component'
const API_URL = process.env.API_URL

const StyledEditorWrapper = styled.div`
  width: 50%;
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
  constructor (props) {
    super(props)
    this.state = {
      value: null,
      selection: null,
      showAddComment: false,
      top: null,
      left: null,
      commentsIds: []
    }
    this.myEditor = createRef()
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

  onSelect = (e) => {
    const selection = this.state.value.selection.toJSON()
    if (selection.isFocused && (selection.anchor.offset !== selection.focus.offset) & !this.state.showAddComment) {
      const s = findDOMRange(this.state.value.selection).getBoundingClientRect()
      this.setState({
        showAddComment: true,
        commentsIds: [],
        left: s.left,
        top: s.top
      })
    }
  }

  handleHighlight = (e) => {
    e.preventDefault()
    const { value } = this.state
    const change = value.change().toggleMark('highlight')
    this.setState({
      showCommentForm: true,
      comments: null,
      selection: value.selection.toJSON()
    })
    this.handleChange(change)
  }

  onChange = async ({ value }) => {
    this.setState({
      value: value
    })
  }

  onCommentHoverIn = (id) => (e) => {
    const top = e.clientY - 125
    const left = e.clientX - 100
    this.setState((prevState) => {
      return {
        showAddComment: false,
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
      case 'highlight':
        return <HighlightMark {...props} />
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
        {this.state.showAddComment &&
          <AddComment top={this.state.top} left={this.state.left} />
        }
        <EditorTitle>Artículos de la propuesta</EditorTitle>
        <div ref={this.myEditor}>
          <Editor
            className='editor'
            schema={this.schema}
            value={this.state.value}
            onChange={this.onChange}
            spellCheck={false}
            renderMark={this.renderMark}
            onSelect={this.onSelect} />
        </div>
      </StyledEditorWrapper>
    )
  }
}

export default WithUserContext(UserEditor)
