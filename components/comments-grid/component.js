import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CommentCard from '../comment-card/component'

const API_URL = process.env.API_URL

const StyledCommentsGrid = styled.div`
  position: absolute;
  top: 200px;
  right: -4%;
  display: flex;
  flex-direction: column;
  width: 300px;
  z-index: 1;
`

class CommentsGrid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  async componentDidMount () {
    try {
      const comments = await (await fetch(`${API_URL}/api/v1/documents/${this.props.id}/comments?field=articles`)).json()
      this.setState({ comments })
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    const { activeComments = [], top } = this.props
    const { comments } = this.state
    const displayComments = comments
      .filter(comment => activeComments.includes(comment._id))
      .map((comment) => <CommentCard key={comment._id} comment={comment} />)

    return (
      <StyledCommentsGrid style={{ top }}>
        { displayComments }
      </StyledCommentsGrid>
    )
  }
}

export default CommentsGrid
