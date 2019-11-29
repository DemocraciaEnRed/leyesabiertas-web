// import React, { Component, Fragment } from 'react'
// import WithUserContext from '../with-user-context/component'

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import videojs from 'video.js'

const StyledResponsiveVideo = styled.div`
  margin-top: 30px;
`

export default class ProjectCustomVideo extends React.Component {
  state = {
    videoJsOptions: {
      autoplay: false,
      controls: true,
      sources: [{ // DASH
        src: 'https://' + this.props.videoId + '/manifest.mpd',
        type: 'application/dash+xml',
      },
      { // HLS
        src: 'https://' + this.props.videoId + '/playlist.m3u8',
        type: 'application/x-mpegURL',
      },
      { // RTMP
        src: 'rtmp://' + this.props.videoId,
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