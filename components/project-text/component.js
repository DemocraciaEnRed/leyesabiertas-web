import React from 'react'
import PropTypes from 'prop-types'
import { Value } from 'slate'
import { Editor } from 'slate-react'
import ProjectTextEdit from '../project-text-edit'
import { renderNode, renderMark } from './renders'

class ProjectText extends React.Component {
  static propTypes = {
    editEnabled: PropTypes.bool,
    initialValue: PropTypes.object.isRequired,
    onChange: PropTypes.func
  }

  static defaultProps = {
    editEnabled: false,
    initialValue: { document: {} }
  }

  plugins = [
    ProjectTextEdit()
  ]

  state = {
    value: Value.fromJSON(this.props.initialValue)
  }

  handleChange = ({ value }) => {
    this.setState({ value })
    if (this.props.onChange) this.props.onChange(value)
  }

  render () {
    const { editEnabled } = this.props
    const { value } = this.state

    return (
      <Editor
        plugins={this.plugins}
        readOnly={editEnabled !== true}
        spellCheck={false}
        onChange={this.handleChange}
        renderNode={renderNode}
        renderMark={renderMark}
        value={value} />
    )
  }
}

export default ProjectText
