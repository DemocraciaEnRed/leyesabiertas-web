import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
// import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
// import CommentItem from '../../elements/comment-item/component'
// import FundationCommentForm from '../fundation-comment-form/component'
// import FundationAlertLogin from '../fundation-alert-login/component'
import WithUserContext from '../with-user-context/component'
import getConfig from 'next/config'

const { publicRuntimeConfig: { API_URL }} = getConfig()

const StyledResponsiveVideo = styled.div`
  overflow:hidden;
  padding-bottom: 56.25%;
  position:relative;
  height:0;
`

const ProfileInput = styled.input`
  width: 100%;
  height: 40px;
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  font-size: 1.4rem;
  line-height: 2.5rem;
  color: #203340;
  margin-top: 10px;
  padding: 14px;
  &:read-only,
  &:disabled '9 {
    cursor: not-allowed;
    background-color: #f7f7f7
  }
`

const ProfileLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  line-height: 2.5rem;
  color: #203340;
  margin: 19px 0;
`

const ProfileButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 85px 0 119px;
`

const SubmitInput = styled.input`
  min-width: 125px;
  max-width: 230px;
  height: 39px;
  background-color: #5c97bc;
  font-size: 1.4rem;
  color: var(--white);
  border-style: none;
  cursor: pointer;
  padding: 0 2rem;
  font-family: var(--bold);
`

const StyledIframe = styled.iframe`
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
`

// const StyledProjectComments = styled.div`
//   width: 90%;
//   padding: 0% 20% 5% 10%;
//   margin-left:auto;
//   margin-right:auto;
//   :before{
//     display: inline-block;
//     margin: 0 20px 8px 0;
//     height: 1px;
//     content: " ";
//     text-shadow: none;
//     background-color: #dae1e7;
//     width: 100%;
//   }
//   `
// const StyledTitle = styled.div`
//   width: 136px;
//   height: 16px;
//   font-size: 14px;
//   font-family:var(--bold);
//   color: #2c4c61;
//   margin:3rem 0;
//   `
class ProjectVideo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videoURL: 'https://www.youtube.com/watch?v=' + (props.youtubeId || '???')
    }
    this.props.setYoutubeId(props.youtubeId)
  }
  // handleSubmit = async (comment) => {
  //   try {
  //     const newComment = await fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments`, {
  //       'method': 'POST',s
  //       'headers': {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
  //       },
  //       'body': JSON.stringify({
  //         'field': 'fundation',
  //         'content': comment
  //       })
  //     })
  //     if (!newComment.ok) {
  //       this.setSuccessFalse()
  //     } else {
  //       this.fetchComments()
  //     }
  //   } catch (err) {
  //     console.error(err)
  //     this.setSuccessFalse()
  //   }
  // }

  // fetchComments = async () => {
  //   try {
  //     const results = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments?field=fundation`)).json()
  //     this.setState({
  //       comments: results,
  //       status: 'success'
  //     }, this.turnOffStatus())
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // setSuccessFalse = () => {
  //   this.setState({
  //     status: 'error'
  //   }, this.turnOffStatus())
  // }

  // turnOffStatus = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       status: null
  //     })
  //   }, 3000)
  // }

  //   var video_id = window.location.search.split('v=')[1];
  // var ampersandPosition = video_id.indexOf('&');
  // if(ampersandPosition != -1) {
  //   video_id = video_id.substring(0, ampersandPosition);
  // }

  parseVideoId = () => {
    let videoID = this.state.videoURL.split('v=')[1] || null
    if (videoID) {
      let ampersandPosition = videoID.indexOf('&')
      if (ampersandPosition !== -1) {
        videoID = videoID.substring(0, ampersandPosition)
      }
    }
    this.props.setYoutubeId(videoID)
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    }, () => {
      this.parseVideoId()
    })
  }

  render () {
    const { authContext, isAuthor, editMode, projectId, youtubeId } = this.props
    const { videoURL } = this.state
    return (
      <div>
        {editMode
          ? <div>
            <ProfileLabel htmlFor='username'>
              Ingrese el link del video de Youtube (Opcional)
              <ProfileInput
                type='text'
                name='videoURL'
                value={videoURL}
                onChange={this.handleChange} />
            </ProfileLabel>
          </div>
          : (youtubeId ? <StyledResponsiveVideo>
            <StyledIframe width='560' height='315' src={`https://www.youtube.com/embed/${youtubeId}`} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
          </StyledResponsiveVideo>
            : null)
        }
      </div>
    )
  }
}

ProjectVideo.propTypes = {
  youtubeId: PropTypes.string,
  setYoutubeId: PropTypes.func.isRequired
}

export default WithUserContext(ProjectVideo)
