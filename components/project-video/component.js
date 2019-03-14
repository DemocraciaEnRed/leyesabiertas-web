import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import WithUserContext from '../with-user-context/component'

const StyledResponsiveVideo = styled.div`
  overflow:hidden;
  // padding-bottom: 56.25%;
  padding-bottom: 56.25%;
  position:relative;
  height:0;
  margin-top: 30px;
`

const StyledIframe = styled.iframe`
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
`

class ProjectVideo extends Component {
  render () {
    const { youtubeId } = this.props
    return (
      <div>
        <StyledResponsiveVideo>
          <StyledIframe width='560' height='315' src={`https://www.youtube.com/embed/${youtubeId}`} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        </StyledResponsiveVideo>
      </div>
    )
  }
}

ProjectVideo.propTypes = {
  youtubeId: PropTypes.string
}

export default ProjectVideo
