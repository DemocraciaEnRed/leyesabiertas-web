import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UserAvatar from '../../elements/user-avatar/component'
import Icon from 'react-icons-kit'
import { thumbsUp } from 'react-icons-kit/feather/thumbsUp'

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
  margin-top: 11px;
  color: #5c97bc;
  cursor: pointer;
`

const commentCard = ({ comment }) => (
  <StyledCommentCard>
    <UserAvatar
      avatarImg={comment.user.avatar}
      name={comment.user.fields.name}
      party={comment.user.fields.occupation} />
    <p>{comment.content}</p>
    <StyledIconWrapper>
      <Icon icon={thumbsUp} />
    </StyledIconWrapper>
  </StyledCommentCard>
)

commentCard.propTypes = {
  comment: PropTypes.object.isRequired
}

export default commentCard
