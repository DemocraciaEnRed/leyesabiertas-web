import React, { Component } from 'react'
import styled from 'styled-components'
import { Editor } from 'slate-react'
import { Value } from 'slate'
import ProjectTextEdit from '../../components/project-text-edit'

const API_URL = process.env.API_URL

const StyledEditorWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
  .editor {
    max-width: 700px;
    span {
      font-size: 1.8rem;
      line-height: 1.89;
      color: #203340;
    }
  }
`

const H2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  color: #5c97bc;
  padding-bottom:4rem;`

  const P = styled.p`
  font-size: 18px;
  line-height: 1.94;
  padding-bottom:3rem;
  color: #203340;`

export default class extends Component {
 state = {
   value: null
 }

 componentDidMount () {
   if (this.props.value) {
     this.setState({
       value: Value.fromJSON(this.props.value)
     })
   }
 }

  renderMark = (props, editor, next) => {
    switch (props.mark.type) {
      case 'title':
        return <H2 {...props} />
      default:
        return next()
    }
  }

  onChange = async (change) => {
    if (this.props.isAuthor && this.props.editMode) {
      return this.setState({
        value: change.value
      })
    }
  }

  render () {
    if (!this.state.value) return null
    let plugins = []
    if (this.props.isAuthor) {
      plugins.push(ProjectTextEdit({ id: this.props.id, field: 'fundation' }))
    }
    return (
      <StyledEditorWrapper>
        <Editor
          plugins={plugins}
          onChange={this.onChange}
          className='editor'
          value={this.state.value}
          spellCheck={false}
          renderMark={this.renderMark} />
      </StyledEditorWrapper>
    )
  }
}
