import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import FundationCommentCard from '../fundation-comment-card/component'
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
  margin:2rem 0;
  `
const StyledSubtitle = styled.div`;
  height: 16px;
  font-size: 14px;
  color: #9b9b9b;
  margin:2rem 0;
`
class ProjectComments extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
    authContext: PropTypes.object.isRequired
  }

  state = {
    comments: null,
    status: null
  }

  async componentDidMount () {
    try {
      const results = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments?field=fundation`, {
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
        }
      })).json()
      this.setState({
        comments: results
      })
    } catch (err) {
      console.error(err)
    }
  }

  handleSubmit = async (comment) => {
    try {
      const newComment = await fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments`, {
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
        },
        'body': JSON.stringify({
          'field': 'fundation',
          'content': comment
        })
      })
      if (!newComment.ok) {
        this.setSuccessFalse()
      } else {
        this.fetchComments()
      }
    } catch (err) {
      console.error(err)
      this.setSuccessFalse()
    }
  }

  fetchComments = async () => {
    try {
      const results = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments?field=fundation`, {
        'headers': {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.props.authContext.keycloak.token
        }
      })).json()
      this.setState({
        comments: results,
        status: 'success'
      }, this.turnOffStatus())
    } catch (err) {
      console.error(err)
    }
  }

  setSuccessFalse = () => {
    this.setState({
      status: 'error'
    }, this.turnOffStatus())
  }

  turnOffStatus = () => {
    setTimeout(() => {
      this.setState({
        status: null
      })
    }, 3000)
  }

  render () {
    const { authContext, project } = this.props
    const { comments, status } = this.state
    return (
      <StyledProjectComments>
        <StyledTitle>Comentarios</StyledTitle>
        <StyledSubtitle>Espacio abierto para comentarios generales.</StyledSubtitle>
        { comments && comments.map((comment) => (
          <FundationCommentCard
            comment={comment}
            key={comment._id}
            project={project._id} />
        ))}
        {authContext.authenticated
          ? <FundationCommentForm
            handleSubmit={this.handleSubmit}
            status={status} />
          : <FundationAlertLogin />
        }
      </StyledProjectComments>
    )
  }
}

export default WithUserContext(ProjectComments)
