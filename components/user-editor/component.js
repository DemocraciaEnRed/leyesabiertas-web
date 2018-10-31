import React, { Component } from 'react'
import styled from 'styled-components'
import { Editor, findDOMRange } from 'slate-react'
import { Value, KeyUtils, Range, Change, Mark } from 'slate'
import { getVisibleSelectionRect } from 'get-selection-range'
import fetch from 'isomorphic-unfetch'
import WithUserContext from '../with-user-context/component'
import CommentsGrid from '../comments-grid/component'
import EditorTitle from '../../elements/editor-title/component'
import TitleMark from '../../elements/title-mark/component'
import HighlightMark from '../../elements/highlight-mark/component'
import ProjectTextEdit from '../../components/project-text-edit'
import ProjectTextComment from '../../components/project-text-comment'
import ProjectTextCreateComment from '../../components/project-text-create-comment'

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
      commentsIds: []
    }
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


  onChange = async (change) => {
    if (this.props.isAuthor) {
      return this.setState({
        value: change.value
      })
    }

    const changesTypes = change.operations.map(o => o.type).filter(o => o !== 'add_mark').count()
    if (changesTypes === 0) {
      this.setState({
        value: change.value
      })
    }
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

  resetEditor = () => {
    this.setState({
      value: Value.fromJSON(this.props.value)
    })
  }
  
  render () {
    if (!this.state.value) return null
    let plugins = []
    if (this.props.withComments) plugins.push(ProjectTextComment({ onClick: this.fetchComments }))
    if (this.props.isAuthor) plugins.push(ProjectTextEdit())
    if (this.props.authContext.authenticated) plugins.push(ProjectTextCreateComment({ reset: this.resetEditor }))
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
            renderMark={this.renderMark} />
        </div>
      </StyledEditorWrapper>
    )
  }
}

export default WithUserContext(UserEditor)