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
import ProjectTextComment from '../../components/project-text-comment'
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





  fetchComments = async (ids) => {
    try {
      const comments = await (await fetch(`${API_URL}/api/v1/documents/${this.props.id}/comments?ids=${ids}`)).json()
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

  renderMark = (props, editor, next) => {
    switch (props.mark.type) {
      case 'title':
        return <TitleMark {...props} />
      case 'highlight':
        return <HighlightMark {...props} />
      default:
        return next()
    }
  }
  
  render () {
    if (!this.state.value) return null
    let plugins = []
    if (this.props.withComments) plugins.push(ProjectTextComment({
      onClick: this.fetchComments,
    }))
    if (this.props.authContext.isAuthor) plugins.push(ProjectTextEdit())
    

    return (
      <StyledEditorWrapper>
        {this.props.withComments && this.state.comments && this.state.comments.length > 0 &&
          <CommentsGrid comments={this.state.comments} />
        }
        <EditorTitle>Artículos de la propuesta</EditorTitle>
        <div ref={this.myEditor}>
          <Editor
            plugins={plugins}
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