import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { thumbsUp, star } from 'react-icons-kit/feather'
import UserAvatar from '../../elements/user-avatar/component'
import { ArticlesContext } from '../../containers/user-project-container/component'

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
const StyledLikeWrapper = styled.div`
  display:none;
  margin-top: 11px;
  color: ${({ liked }) => liked ? '#ef885d' : '#5c97bc'};
  cursor: pointer;
`

const StyledIconWrapper = styled.div`
  margin-top: 11px;
  color: ${({ active }) => active ? '#ef885d' : '#5c97bc'};
  cursor: pointer;
  display: flex;
  align-items: center;
`

const SelectCommentText = styled.span`
  color: ${({ active }) => active ? '#ef885d' : '#4a5d68'};
  margin-left: 5px;
  font-size: 14px;
`
const StyledCheckbox = styled.input`
  margin-left:2px;
  margin-right:2px;
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
          name={this.props.comment.user.fullname} />
        <p>{this.props.comment.content}</p>
        <StyledLikeWrapper liked={this.state.liked} >
          <Icon icon={thumbsUp} onClick={this.handleClick} />
        </StyledLikeWrapper>
        <ArticlesContext.Consumer>
          {
            ({ isAuthor, toggleSelectedComment, editMode, selectedCommentsIds }) =>
              <Fragment>
                {(isAuthor &&

                <StyledIconWrapper
                  active={''}
                  onClick={''}>
                  <StyledCheckbox type='checkbox' />
                  <SelectCommentText active={''}>
                    { /*
                      selectedCommentsIds.includes(this.props.comment._id)
                        ? 'Marcado como resuelto'
                        : 'Marcar como resuelto'
                        */
                    }
                  </SelectCommentText>
                </StyledIconWrapper>
                )}

                { (editMode &&

                <StyledIconWrapper
                  active={selectedCommentsIds.includes(this.props.comment._id)}
                  onClick={toggleSelectedComment(this.props.comment._id)}>
                  <Icon icon={star} />
                  <SelectCommentText active={selectedCommentsIds.includes(this.props.comment._id)}>
                    {
                      selectedCommentsIds.includes(this.props.comment._id)
                        ? 'Marcado como un aporte'
                        : 'Marcar como un aporte'
                    }
                  </SelectCommentText>
                </StyledIconWrapper>
                )}
              </Fragment>
          }
        </ArticlesContext.Consumer>
      </StyledCommentCard>
    )
  }
}

commentCard.propTypes = {
  comment: PropTypes.object.isRequired
}

export default commentCard
