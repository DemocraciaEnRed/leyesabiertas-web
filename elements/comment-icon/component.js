import React from 'react'
import styled from 'styled-components'

const CommentIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background-image: url('/static/assets/comment-smiley-icon.svg');
  background-position: center;
  background-repeat:no-repeat;
  background-size: cover;
  @media(max-width:700px){
    display:none;
  }

`

export default CommentIcon
