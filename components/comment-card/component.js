import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { thumbsUp, star, square, checkSquare, trash2 } from 'react-icons-kit/feather'
import { times } from 'react-icons-kit/fa/times'
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
  color: ${({ liked }) => liked ? '#ef885d' : '#5c97bc'};
  cursor: pointer;
  font-size: 14px;
  display: inline-block;
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

const StyledDeleteWrapper = styled.div`
  float: right;
  margin-left: 10px;
  color: #5c97bc;
  &:hover{
    color: #ef885d;
    cursor: pointer;
  }
  font-size: 14px;
  position: relative;
`
const StyledErrorWrapper = styled.span`
  float: right;
  margin-left: 10px;
  color: #bf3019;
  font-size: 14px;
  position: relative;
`

const ReplyComment = styled.p`
  font-size: 1.2em !important;
`

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #dae1e7;
  margin:8px 0;
`
const StyledNoticeDeleted = styled.div`
  background-color: hsl(124.6, 47.4%, 48.4%);
  padding: 8px 5px;
  color: #FFF;
  font-size: 13px;
  // margin-bottom:2rem;
`

class commentCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      likes: null,
      liked: false,
      resolved: false,
      errorDelete: false,
      deleted: false
    }
  }

  componentDidMount() {
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
        this.props.updateComments()
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleDelete = (projectId) => () => {
    fetch(`${API_URL}/api/v1/documents/${projectId}/comments/${this.props.comment._id}`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
      .then((res) => {
        if (res.ok) {
          this.setState((prevState) => {
            return {
              deleted: true
            }
          }, () => {
            window.setTimeout(() => {
              this.props.removeComment(this.props.comment._id)
            }, 3000)
          })
        } else {
          this.setState((prevState) => {
            return {
              errorDelete: true
            }
          })
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleResolved = (projectId) => () => {
    this.setState({ resolved: true })
    fetch(`${API_URL}/api/v1/documents/${projectId}/comments/{this.props.comment._id}/resolve`, {
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

  canDelete = (comment, isAuthor) => {
    const { authContext } = this.props
    if (isAuthor) {
      // Is the author of the project?
      return true
    } else if (comment.user._id === (authContext.user && authContext.user._id)) {
      // Is the author of the comment?
      return true
    }
    return false
  }

  render () {
    let { deleted } = this.state
    if (!deleted) {
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
                  <Separator />
                  <div>
                    <StyledLikeWrapper liked={this.state.liked} onClick={this.handleLike(project._id)}>
                      <Icon icon={thumbsUp} style={{ marginRight: '5px' }} /> {this.state.likes}
                    </StyledLikeWrapper>
                    {this.canDelete(this.props.comment, isAuthor) && !this.state.errorDelete &&
                      <StyledDeleteWrapper onClick={this.handleDelete(project._id)}>
                        <Icon icon={trash2} style={{ marginRight: '5px' }} />
                      </StyledDeleteWrapper>
                    }
                    {this.canDelete(this.props.comment, isAuthor) && this.state.errorDelete &&
                      <StyledErrorWrapper>
                        Error<Icon icon={times} style={{ marginLeft: '5px' }} />
                      </StyledErrorWrapper>
                    }
                  </div>
                  {(isAuthor &&
                    <>
                      <Separator />
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
                    </>
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
    return (
      <StyledCommentCard>
        <UserAvatar
          userId={this.props.comment.user._id}
          name={this.props.comment.user.fullname}
          party={this.props.comment.user.party ? this.props.comment.user.party : (this.props.comment.user.occupation ? this.props.comment.user.occupation : '')} />
          <StyledNoticeDeleted>
          <Icon size="16" icon={trash2} style={{ marginRight: '4px' }} /> El comentario ha sido eliminado
          </StyledNoticeDeleted>
      </StyledCommentCard>
    )
  }
}

commentCard.propTypes = {
  comment: PropTypes.object.isRequired,
  updateComments: PropTypes.func.isRequired
}

export default WithUserContext(commentCard)
