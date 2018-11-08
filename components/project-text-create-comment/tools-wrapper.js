import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'

class AddComment extends Component {
  handleClickOutside = evt => {
    this.props.clearTools()
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default onClickOutside(AddComment)
