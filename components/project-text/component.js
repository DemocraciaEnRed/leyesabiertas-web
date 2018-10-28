import React from 'react'
import PropTypes from 'prop-types'
import { Value } from 'slate'
import { Editor } from 'slate-react'
import { renderNode } from './renders'

class ProjectText extends React.Component {
  static propTypes = {
    readOnly: PropTypes.bool,
    initialValue: PropTypes.object.isRequired
  }

  static defaultProps = {
    readOnly: true
  }

  state = {
    value: Value.fromJSON(this.props.initialValue)
  }

  handleChange = ({ value }) => {
    this.setState({ value })
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
        value={value} />
    )
  }
}

export default ProjectText
