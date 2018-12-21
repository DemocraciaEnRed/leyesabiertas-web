import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { thumbsUp, star, square, checkSquare } from 'react-icons-kit/feather'
import getConfig from 'next/config'
import WithUserContext from '../../components/with-user-context/component'
import CommentReply from '../../components/comment-reply/component'
import UserAvatar from '../../elements/user-avatar/component'
import { ArticlesContext } from '../../containers/user-project-container/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()

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
  border-top: 1px solid #dae1e7;
  padding-top: 15px;
  color: ${({ liked }) => liked ? '#ef885d' : '#5c97bc'};
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
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

const ReplyComment = styled.p`
  font-size: 1.2em !important;
`

class commentCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      likes: null,
      liked: false,
      resolved: false
    }
  }

  componentDidMount () {
    this.setState({
      liked: this.props.comment.isLiked,
      likes: this.props.comment.likes ? this.props.comment.likes : 0
    })
  }

  handleLike = (projectId) => () => {
    if (!this.props.authContext.authenticated) {
      window.location = this.props.authContext.keycloak.createRegisterUrl()
    }
    fetch(`${API_URL}/api/v1/documents/${projectId}/comments/${this.props.comment._id}/like`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then((res) => {
        this.setState((prevState) => {
          return {
            liked: !prevState.liked,
            likes: prevState.liked ? prevState.likes - 1 : prevState.likes + 1
          }
        })
      })
      .catch((err) => {
        console.error(err)
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
        this.props.removeComment(this.props.comment._id)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render () {
    return (
      <StyledCommentCard>
        <UserAvatar
          userId={this.props.comment.user._id}
          name={this.props.comment.user.fullname}
          party={this.props.comment.user.party ? this.props.comment.user.party : (this.props.comment.user.occupation ? this.props.comment.user.occupation : '')} />
        <p>{this.props.comment.content}</p>
        <ArticlesContext.Consumer>
          {
            ({ isAuthor, toggleSelectedComment, editMode, selectedCommentsIds, project }) =>
              <Fragment>
                <CommentReply isAuthor={isAuthor} reply={this.props.comment.reply} comment={this.props.comment._id} token={this.props.authContext.keycloak.token} project={project} attachReply={this.props.attachReply} />
                <StyledLikeWrapper liked={this.state.liked} onClick={this.handleLike(project._id)}>
                  <Icon icon={thumbsUp} style={{ marginRight: '5px' }} /> {this.state.likes }
                </StyledLikeWrapper>
                {(isAuthor &&

                <StyledIconWrapper
                  active={this.state.resolved}
                  onClick={this.handleResolved(project._id)}>
                  {
                    this.state.resolved
                      ? <>
                        <Icon icon={checkSquare} />
                        <SelectCommentText active={this.state.resolved}>
                              Marcado como resuelto
                        </SelectCommentText>
                          </>
                      : <>
                        <Icon icon={square} />
                        <SelectCommentText active={this.state.resolved}>
                              Marcar como resuelto
                        </SelectCommentText>
                          </>
                  }
                </StyledIconWrapper>
                )}

                {(editMode && !(project.closed) &&
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
