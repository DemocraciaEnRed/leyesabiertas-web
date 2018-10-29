import React from 'react'
import PropTypes from 'prop-types'
import { Value } from 'slate'
import { Editor } from 'slate-react'
import { renderNode, renderMark } from './renders'

class ProjectText extends React.Component {
  static propTypes = {
    readOnly: PropTypes.bool,
    initialValue: PropTypes.object.isRequired,
    onChange: PropTypes.func
  }

  static defaultProps = {
    readOnly: true,
    initialValue: { document: {} }
  }

  state = {
    value: Value.fromJSON(this.props.initialValue)
  }

  handleChange = ({ value }) => {
    this.setState({ value })
    if (this.props.onChange) this.props.onChange(value)
  }

  render () {
    const { readOnly } = this.props
    const { value } = this.state

    return (
      <Editor
        readOnly={readOnly}
        spellCheck={false}
        onChange={this.handleChange}
        renderNode={renderNode}
        renderMark={renderMark}
        value={value} />
    )
  }
}

export default ProjectText
