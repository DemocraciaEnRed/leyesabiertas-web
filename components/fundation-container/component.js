import React, { Component } from 'react'
import styled from 'styled-components'
import { Editor } from 'slate-react'
import { Value } from 'slate'
import getConfig from 'next/config'
import ProjectTextEdit from '../../components/project-text-edit'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const StyledEditorWrapper = styled.div`
  width: 100%;
  margin-top: 3em;
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
    plugins.push(ProjectTextEdit({ id: this.props.id, field: 'fundation', isAuthor: this.props.isAuthor }))
    return (
      <StyledEditorWrapper>
        <Editor
          plugins={plugins}
          onChange={this.onChange}
          className='editor'
          value={this.state.value}
          spellCheck={false} />
      </StyledEditorWrapper>
    )
  }
}
