import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Editor } from 'slate-react'
import { Value } from 'slate'
import EditorTitle from '../../elements/editor-title/component'

const StyledEditorWrapper = styled.div`
  width: 100%;
  padding: 0 100px;
  margin-top: 48px;
`

export default class extends Component {
  state = {
    value: null
  }

  componentDidMount () {
    if (this.props.value) {
      this.setState({
        value: Value.fromJSON(this.props.value)
      }, () => console.log(this.state.value))
    }
  }

  onChange = ({ value }) => {
    this.setState({
      value
    })
  }

  render () {
    if (!this.state.value) return null
    return (
      <StyledEditorWrapper>
        <EditorTitle>Artículos de la propuesta</EditorTitle>
        <Editor
          value={this.state.value}
          onChange={this.onChange}
          readOnly={true} />
      </StyledEditorWrapper>
    )
  }
}
