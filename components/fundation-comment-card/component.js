import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { thumbsUp } from 'react-icons-kit/feather'
import WithUserContext from '../../components/with-user-context/component'

const { API_URL } = process.env

const StyledCommentItem = styled.div`
  min-height:15rem;
  border: solid 1px #dae1e7;
  padding:1.6rem;
  display:flex;
  margin-bottom:2rem;
  `
const Comment = styled.div`
  font-size: 1.4rem;
  line-height: 1.57;
  color: #181818;
`

const Date = styled.div`
  height: 16px;
  font-size: 1.4rem;
  color: #9b9b9b;
  padding-top:2rem;
  margin-top:auto;
  margin-bottom:1.5rem;

`
const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius:50%;
  background-image: url('${(props) => props.avatarImg}');
  background-size: cover;
  background-position: center;
  `

const Username = styled.div`
  color: #2d4b5e;
  font-size: 1.4rem;
  font-family:var(--bold);
  padding-bottom:0.5rem;`

const Charge = styled.div`
  font-size:1.2rem;
  color:  #5c97bc;
  text-transform:uppercase;
  padding-bottom:1rem;`

const TextWrapper = styled.div`
  margin-left:2rem;
  width:90%;
`

const StyledLikeWrapper = styled.div`
  padding-top: 20px;
  color: ${({ liked }) => liked ? '#ef885d' : '#5c97bc'};
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
`

class FundationCommentCard extends Component {
  state = {
    liked: false
  }

  componentDidMount () {
    this.setState({
      liked: this.props.comment.isLiked
    })
  }

  handleLike = () => {
    this.setState((prevState) => {
      return {
        liked: !prevState.liked
      }
    })
    fetch(`${API_URL}/api/v1/documents/${this.props.project}/comments/${this.props.comment._id}/like`, {
      headers: {
        Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    const { comment } = this.props
    return (
      <StyledCommentItem>
        <UserAvatar avatarImg={comment.user.avatar} />
        <TextWrapper>
          <Username>{comment.user.fullname}</Username>
          <Charge>{(comment.user.fields && comment.user.fields.occupation) ? comment.user.fields.occupation : '' }</Charge>
          <Comment>{comment.content}</Comment>
          <Date>{`Hace ${comment.when}`}</Date>
          <StyledLikeWrapper liked={this.state.liked} onClick={this.handleLike}>
            <Icon icon={thumbsUp} style={{ marginRight: '5px' }} /> { comment.likes }
          </StyledLikeWrapper>
        </TextWrapper>
      </StyledCommentItem>
    )
  }
}

FundationCommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
  authContext: PropTypes.object.isRequired,
  project: PropTypes.string.isRequired
}

export default WithUserContext(FundationCommentCard)
