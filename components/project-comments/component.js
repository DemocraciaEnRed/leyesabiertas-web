import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CommentItem from '../../elements/comment-item/component'

const StyledProjectComments = styled.div`
  width:60%;
  margin-left:auto;
  margin-right:auto;
  border-top: solid 1px #dae1e7;
  `
const StyledTitle = styled.div`
  width: 136px;
  height: 16px;
  font-size: 14px;
  font-family:var(--bold);
  color: #2c4c61;
  margin:3rem 0;
  `

const ProjectComments = () => (
  <StyledProjectComments>
    <StyledTitle>Opiniones generales</StyledTitle>
    <CommentItem />
  </StyledProjectComments>

)

export default ProjectComments
