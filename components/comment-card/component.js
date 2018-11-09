import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import WithUserContext from '../../components/with-user-context/component'
import { thumbsUp, star, square, checkSquare } from 'react-icons-kit/feather'
import UserAvatar from '../../elements/user-avatar/component'
import { ArticlesContext } from '../../containers/user-project-container/component'

const { API_URL } = process.env

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
  color: ${({ active }) => active ? '#ef885d' : '#5c97bc'};
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

    this.state = {
      liked: false,
      resolved: false
    }
  }

  handleLike = () => {
    this.setState((prevState) => {
      return {
        liked: !prevState.liked
      }
    })
  }

  handleResolved = (projectId) => () => {
    this.setState({ resolved: true })
    fetch(`${API_URL}/api/v1/documents/${projectId}/comments/${this.props.comment._id}/resolve`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        console.log('comentario resuelto...')
        this.props.removeComment(this.props.comment._id)
      })
      .catch((err) => {
        console.log(err)
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
          <Icon icon={thumbsUp} onClick={this.handleLike} />
        </StyledLikeWrapper>
        <ArticlesContext.Consumer>
          {
            ({ isAuthor, toggleSelectedComment, editMode, selectedCommentsIds, project }) =>
              <Fragment>
                {(isAuthor &&

                <StyledIconWrapper
                  active={this.state.resolved}
                  onClick={this.handleResolved(project._id)}>
                    {
                      this.state.resolved
                        ?
                          <>
                            <Icon icon={checkSquare} />
                            <SelectCommentText active={this.state.resolved}>
                              Marcado como resuelto
                            </SelectCommentText>
                          </>
                        :
                          <>
                            <Icon icon={square} />
                            <SelectCommentText active={this.state.resolved}>
                              Marcar como resuelto
                            </SelectCommentText>
                          </>
                    }
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

export default WithUserContext(commentCard)
