import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CommentItem from '../../elements/comment-item/component'

const API_URL = process.env.API_URL

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
class ProjectComments extends Component {
  state = {
    comments: null
  }
  async componentDidMount () {
    console.log(this.props.project._id)
    try {
      const results = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments`)).json()
      console.log(results)
    } catch (err) {
      console.error(err)
    }
  }
  render () {
    return (
      <StyledProjectComments>
        <StyledTitle>Opiniones generales</StyledTitle>
        <CommentItem />
      </StyledProjectComments>
    )
  }
}

export default ProjectComments
