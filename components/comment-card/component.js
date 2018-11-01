import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { thumbsUp } from 'react-icons-kit/feather/thumbsUp'
import UserAvatar from '../../elements/user-avatar/component'

const StyledCommentCard = styled.div`
  width: 300px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  margin-bottom: 27px;
  padding: 23px 18px 18px;
  > p {
    width: 270px;
    font-size: 1.4rem;
    line-height: 1.57;
    color: #181818;
  }
`
const StyledIconWrapper = styled.div`
  display:none;
  margin-top: 11px;
  color: ${(props) => props.liked ? '#ef885d' : '#5c97bc'};
  cursor: pointer;
`

class commentCard extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      liked: true
    }
  }

  handleClick () {
    this.setState((prevState) => {
      return {
        liked: !prevState.liked
      }
    })
  }

  render () {
    return (
      <StyledCommentCard>
        <UserAvatar
          avatarImg={this.props.comment.user.avatar}
          name={this.props.comment.user.fullname}
          party={this.props.comment.user.fields.occupation || ''} />
        <p>{this.props.comment.content}</p>
        <StyledIconWrapper liked={this.state.liked} >
          <Icon icon={thumbsUp} onClick={this.handleClick} />
        </StyledIconWrapper>
      </StyledCommentCard>
    )
  }
}

commentCard.propTypes = {
  comment: PropTypes.object.isRequired
}

export default commentCard
