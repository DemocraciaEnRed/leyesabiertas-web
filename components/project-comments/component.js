import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CommentItem from '../../elements/comment-item/component'
import FundationCommentForm from '../fundation-comment-form/component'
import FundationAlertLogin from '../fundation-alert-login/component'
import WithUserContext from '../with-user-context/component'

const API_URL = process.env.API_URL

const StyledProjectComments = styled.div`
  width: 90%;
  padding: 0% 20% 5% 10%;
  margin-left:auto;
  margin-right:auto;
  :before{
    display: inline-block;
    margin: 0 20px 8px 0;
    height: 1px;
    content: " ";
    text-shadow: none;
    background-color: #dae1e7;
    width: 100%;
  }
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
    console.log(this.props.authContext.register)
    console.log(this.props.authContext.authenticated)
    try {
      const results = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments?field=fundation`)).json()
      this.setState({
        comments: results
      })
    } catch (err) {
      console.error(err)
    }
  }
  render () {
    const { authContext } = this.props
    const { comments } = this.state
    return (
      <StyledProjectComments>
        <StyledTitle>Opiniones generales</StyledTitle>
        { comments && comments.map((comment) => (
          <CommentItem comment={comment} key={comment._id} />
        ))}
        {authContext.authenticated
          ? <FundationCommentForm />
          : <FundationAlertLogin />
        }
        
      </StyledProjectComments>
    )
  }
}

export default WithUserContext(ProjectComments)
