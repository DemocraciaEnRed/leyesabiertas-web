import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import WithUserContext from '../with-user-context/component'

const StyledResponsiveVideo = styled.div`
  // overflow:hidden;
  position: relative;
  margin-top: 30px;
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
  height: auto;
  display:block;
  padding-bottom: 56.25%;
  margin-bottom: 40px;
  margin-top: 10px;
  @media (min-width: 500px) and (max-width: 1059px) {
    margin-left: 0;
  }
  @media (min-width: 1060px) and (max-width: 1179px) {
  position: absolute;
  padding-bottom: 0;
  height: 40%;
  width: 28%;
  right: 7rem;
  margin-bottom: 0;
  margin-top: 0;
  }
  @media (min-width: 1180px) {
  position: absolute;
  padding-bottom: 0;
  height: 225px;
  width: 400px;
  right: 7rem;
  margin-bottom: 0;
  margin-top: 0;
  }
`

const StyledIframe = styled.iframe`
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
`

class HeroVideo extends Component {
  render() {
    const { youtubeId } = this.props
    return (
      <StyledResponsiveVideo>
        <StyledIframe width='560' height='315' src={`https://www.youtube.com/embed/${youtubeId}`} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
      </StyledResponsiveVideo>
    )
  }
}

HeroVideo.propTypes = {
  youtubeId: PropTypes.string
}

export default HeroVideo
