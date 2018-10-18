import React, { Component } from 'react'

export default class extends Component {
  state = {
    project: null
  }

  render () {
    const { project } = this.state
    if (!project) return null
    return (
      <div>
      </div>
    )
  }
}

