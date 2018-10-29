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
import CommentForm from '../../components/comment-form/component'
import ProjectTextEdit from '../../components/project-text-edit'
import UserContext from '../../components/user-context/component'

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
      padding: 6.5px 0px;
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
      showCommentForm: false,
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
    if (!this.props.authContext.authenticated) return false
    const rect = getVisibleSelectionRect()
    if (!rect) return false
    if (rect.width === 0 && this.state.showAddComment) {
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

  handleHighlight = (e) => {
    e.preventDefault()
    const { value } = this.state 
    const change = value.change().toggleMark('highlight')
    this.setState({
      showCommentForm: true,
      comments: null,
      selection: value.selection.toJSON(),
      value: value
    })
  }

  onChange = async ({ value }) => {
    this.setState({
      value: value
    })
  }

  onKeyDown = (e) => {
    e.preventDefault()
    return false
  }

  updateMousePosition = (e) => {
    this.setState({
      top: e.pageY - 740,
      left: e.pageX - 100
    })
  }

  onCommentHoverIn = (id) => (e) => {
    this.setState((prevState) => {
      return {
        showAddComment: false,
        commentsIds: prevState.commentsIds.concat(id)
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

  showForm = (e) => {
    e.preventDefault()
    this.setState({
      showCommentForm: true
    })
  }

  setCommentId = (id) => {
    this.setState({
      showCommentForm: false
    })
    const { value, selection } = this.state
    const range = Range.fromJSON(selection).toJSON()
    const mark = Mark.create({
      data: {
        'data-id': id
      },
      'type': 'comment'
    })
    const change = value
      .change()
      .select(range)
      .toggleMark({ type: 'highlight' })
      .addMark(mark)
    this.handleChange(change)
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
        {this.props.withComments && this.state.commentsIds.length > 0 && !this.state.showAddComment &&
          <CommentCounter
            count={this.state.commentsIds.length}
            top={this.state.top}
            left={this.state.left} />
        }
        {this.props.withComments && this.state.comments && this.state.comments.length > 0 &&
          <CommentsGrid comments={this.state.comments} />
        }
        {this.state.showAddComment &&
          <AddComment
            onClick={this.handleHighlight}
            top={this.state.top}
            left={this.state.left} />
        }
        <EditorTitle>Artículos de la propuesta</EditorTitle>
        <div ref={this.myEditor} onMouseMove={this.updateMousePosition}>
          <UserContext.Consumer>
            {({ isAuthor }) => {
              let plugins = []
              if (true) plugins.push(ProjectTextEdit())
              return <Editor
                plugins={this.plugins}
                className='editor'
                schema={this.schema}
                value={this.state.value}
                onChange={this.onChange}
                spellCheck={false}
                renderMark={this.renderMark}
                onSelect={this.onSelect} />}
            }
          </UserContext.Consumer>
          
        </div>
      </StyledEditorWrapper>
    )
  }
}

export default WithUserContext(UserEditor)
