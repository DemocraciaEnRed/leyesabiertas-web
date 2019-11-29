import React, { Component, Fragment } from 'react'
// import WithUserContext from '../with-user-context/component'

// import React, { Component, Fragment } from 'react'
// import WithUserContext from '../with-user-context/component'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import videojs from 'video.js'

const StyledResponsiveVideo = styled.div`
  // overflow:hidden;
  position: relative;
  margin-top: 30px;
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
  height: auto;
  display:block;
  // padding-bottom: 56.25%;
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

export default class HeroVideo extends React.Component {
  state = {
    videoJsOptions: {
      autoplay: false,
      controls: true,
      sources: [{ // DASH
        src: 'https://' + this.props.video + '/manifest.mpd',
        type: 'application/dash+xml',
      },
      { // HLS
        src: 'https://' + this.props.video + '/playlist.m3u8',
        type: 'application/x-mpegURL',
      },
      { // RTMP
        src: 'rtmp://' + this.props.video,
        type: 'rtmp/mp4',
      }]
    }
  }
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.state.videoJsOptions, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <StyledResponsiveVideo>
        <div data-vjs-player>
          <video ref={node => this.videoNode = node} className="video-js vjs-16-9 vjs-big-play-centered" />
        </div>
      </StyledResponsiveVideo>
    )
  }
}

// const StyledResponsiveVideo = styled.div`
//   // overflow:hidden;
//   position: relative;
//   margin-top: 30px;
//   width: 100%;
//   margin: 0 auto;
//   max-width: 500px;
//   height: auto;
//   display:block;
//   padding-bottom: 56.25%;
//   margin-bottom: 40px;
//   margin-top: 10px;
//   @media (min-width: 500px) and (max-width: 1059px) {
//     margin-left: 0;
//   }
//   @media (min-width: 1060px) and (max-width: 1179px) {
//   position: absolute;
//   padding-bottom: 0;
//   height: 40%;
//   width: 28%;
//   right: 7rem;
//   margin-bottom: 0;
//   margin-top: 0;
//   }
//   @media (min-width: 1180px) {
//   position: absolute;
//   padding-bottom: 0;
//   height: 225px;
//   width: 400px;
//   right: 7rem;
//   margin-bottom: 0;
//   margin-top: 0;
//   }
// `

// const StyledIframe = styled.iframe`
//     left:0;
//     top:0;
//     height:100%;
//     width:100%;
//     position:absolute;
// `

// class HeroVideo extends Component {
//   render() {
//     const { youtubeId } = this.props
//     return (
//       <StyledResponsiveVideo>
//         <StyledIframe width='560' height='315' src={`https://www.youtube.com/embed/${youtubeId}`} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
//       </StyledResponsiveVideo>
//     )
//   }
// }

// HeroVideo.propTypes = {
//   youtubeId: PropTypes.string
// }

// export default HeroVideo


