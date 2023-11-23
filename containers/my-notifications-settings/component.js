import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import Link from 'next/link'
import getConfig from 'next/config'
import Masonry from 'react-masonry-component'
import { clockO } from 'react-icons-kit/fa'
import { plus, download } from 'react-icons-kit/feather'
import { times } from 'react-icons-kit/fa'
import Section from '../section/component'
import Card from '../../components/card/component'
import CardNewProject from '../../components/card-new-project/component'
import WithUserContext from '../../components/with-user-context/component'
import TitleH2 from '../../elements/title-h2/component'
import Alert from '../../elements/alert/component'
import ProjectTableItem from '../../components/project-table-item/component'
// import Icon from 'react-icons-kit'
import WithDocumentTagsContext from '../../components/document-tags-context/component'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${(props) => `/static/assets/${props.icon}`});
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;
  @media(max-width:700px){
filter:grayscale(100%) brightness(54%) sepia(100%) hue-rotate(-180deg) saturate(700%) contrast(0.8);
}
`
const IconLoading = styled(Icon)`
width:20px;
height:20px;
filter:grayscale(100%);
animation: rotation 2s infinite linear;

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  text-align: justify;
  margin-bottom: 5px;
  margin.top: 5px;
`

const TagDiv = styled.div`
  border: solid 1px #dae1e7;
  background-color: #ffffff;
  padding: 2px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-right: 3px;
  margin-left: 3px;
  cursor: pointer

  &.selected {
    background-color: #5c97bc;
    border-color: #5c97bc;
    color: white;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const MyNotificationsWrapper = styled.div`
  font-size: 14px;
  // border: 1px solid #eaeaea;
  // padding: 15px;
`

const SegmentTitle = styled.div`
  font-size: 1.3em;
  font-weight: 800;
  color: #5c97bc;
  margin-bottom: 10px;
  margin-top: 15px;
  font-family: var(--bold);
`

const SegmentDescription = styled.div`
  font-size: 1em;
  margin-bottom: 10px;
  font-family: var(--italic);
  color: #777;
`

const AuthorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  text-align: justify;
  margin-bottom: 20px;
`

const AuthorDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #eaeaea;
  padding: 10px;
`

const AuthorAvatar = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid #eaeaea;
  background-image: url('${(props) => props.userId ? `${API_URL}/api/v1/users/${props.userId}/avatar` : '/static/assets/userdefault.png'}');
  background-size: cover;
  background-position: center;
`

const AuthorName = styled.div`
  font-size: 1em;
  font-weight: 800;
  font-family: var(--bold);
  color: #5c97bc;
  margin-bottom: 5px;
`

const AuthorUnsubscribeButton = styled.button`
  background-color: #5c97bc;
  font-size: 0.8em;
  color: #FFF;
  border: none;
  padding: 3px 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #2c4c61;
  }
`

const TagsNotificationCheckboxDiv = styled.div`
  display: flex;
  & > input {
    margin-right: 7px;
    margin-bottom: auto;
  }
`

class MyNotificationsSettings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      tagsNotification: false,
      popularNotification: false,
      availableTags: [],
      userSubscribedTags: [],
      userSubscribedAuthors: []
    }
  }

  async componentDidMount () {
    // console.log('HELP ME')
    // if (this.props.authContext && this.props.authContext.user && this.props.authContext.user._id) {
    //   await this.fetchData()
    // }

    // when component initiates, this.props.authContext might not be fullfiled, we need to
    // set an interval to check if it is already there
    const interval = setInterval(() => {
      // console.log('Is it loaded?')
      if (this.props.authContext && this.props.authContext.user && this.props.authContext.user._id) {
        // console.log('Yes it is')
        clearInterval(interval)
        this.fetchData()
      } else {
        // console.log('Not yet')
      }
    }, 1000)
  }

  // async componentWillUpdate (props) {
  //   console.log('HELP ME but this time component will update')
  //   if (this.props.authContext && this.props.authContext.user && this.props.authContext.user._id) {
  //     await this.fetchData()
  //   }
  // }

  async fetchData () {
    const token = this.props.authContext && this.props.authContext.keycloak && this.props.authContext.keycloak.token
    const data = await (await fetch(`${API_URL}/api/v1/users/notifications/settings`, {
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })).json()
    console.log(data)
    this.setState({
      isLoading: false,
      availableTags: data.availableDocumentTags,
      tagsNotification: data.tagsNotification,
      popularNotification: data.popularNotification,
      userSubscribedTags: data.userSubscribedTags,
      userSubscribedTagsIds: data.userSubscribedTagsIds,
      userSubscribedAuthors: data.userSubscribedAuthors
    })
  }

  async handleTagClick (tag) {
    const token = this.props.authContext && this.props.authContext.keycloak && this.props.authContext.keycloak.token
    const data = await (await fetch(`${API_URL}/api/v1/users/notifications/settings/tags/${tag}`, {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })).json()
    this.setState({
      userSubscribedTagsIds: data.userTags
    })
  }

  async handleAuthorUnsubscribeClick (authorId) {
    const token = this.props.authContext && this.props.authContext.keycloak && this.props.authContext.keycloak.token
    const data = await (await fetch(`${API_URL}/api/v1/users/notifications/settings/authors/${authorId}`, {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })).json()
    if(data.added === false) {
      // remove the author from the list
      this.setState((prevState) => ({
        userSubscribedAuthors: prevState.userSubscribedAuthors.filter((author) => author._id !== authorId)
      }))
    }
  }

  async toggleTagsCheckboxChange () {
    const token = this.props.authContext && this.props.authContext.keycloak && this.props.authContext.keycloak.token
    const data = await (await fetch(`${API_URL}/api/v1/users/notifications/settings/tagsNotification`, {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })).json()
    this.setState({
      tagsNotification: data.tagsNotification
    })
  };

  async togglePopularCheckboxChange () {
    const token = this.props.authContext && this.props.authContext.keycloak && this.props.authContext.keycloak.token
    const data = await (await fetch(`${API_URL}/api/v1/users/notifications/settings/popularNotification`, {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })).json()
    this.setState({
      popularNotification: data.popularNotification
    })
  };

  render () {
    if (!this.props.authContext || !this.props.authContext.authenticated) return null

    
    if (this.props.userId && this.props.userId !== this.props.authContext.user._id) {
      return null
    }

    if (this.state.isLoading) {
      return (
        <MyNotificationsWrapper>
          <Section id='mynotifications' noMargin >
            <TitleH2>Mis notificaciones</TitleH2>
            <LoadingContainer>
              <IconLoading>
                <Icon icon='circular-bar.svg' />
              </IconLoading>&nbsp;Cargando
            </LoadingContainer>
          </Section>
        </MyNotificationsWrapper>
      )
    }

    return (
      <MyNotificationsWrapper>
        <Section id='mynotifications' noMargin >
          <TitleH2>Mis notificaciones</TitleH2>
          <br />
          <SegmentTitle>Suscripción a etiquetas</SegmentTitle>
          <TagsNotificationCheckboxDiv>
            <input
              type="checkbox"
              name="tagsNotification"
              checked={this.state.tagsNotification}
              onChange={() => this.toggleTagsCheckboxChange()}
            />Deseo recibir notificaciones de proyectos de las etiquetas que me interesan.
          </TagsNotificationCheckboxDiv>
          <SegmentTitle>Etiquetas disponibles</SegmentTitle>
          <SegmentDescription>Seleccione las etiquetas a las que desea suscribirse para recibir notificaciones de nuevos proyectos asociados a las mismas</SegmentDescription>
          <TagsWrapper>
            {
              this.state.availableTags.map((tag) => (
                <TagDiv
                  key={tag._id}
                  className={this.state.userSubscribedTags && this.state.userSubscribedTagsIds.includes(tag._id) ? 'selected' : 'not-selected'}
                  onClick={() => this.handleTagClick(tag._id)}>
                  {tag.name}
                </TagDiv>
              ))
            }
          </TagsWrapper>
          <br />
          <SegmentTitle>Suscripción a proyectos populares</SegmentTitle>
          <TagsNotificationCheckboxDiv>
            <input
              type="checkbox"
              name="popularNotification"
              checked={this.state.popularNotification}
              onChange={() => this.togglePopularCheckboxChange()}
            />Haga clic en el checkbox para recibir notificaciones cada vez que un proyecto se vuelva popular
          </TagsNotificationCheckboxDiv>
          <SegmentTitle>Suscripción a autores de propuestas</SegmentTitle>
          <SegmentDescription>Puede suscribirse a un autor ingresando a una propuesta o al perfil del mismo. La siguiente lista muestra aquellos a los que  se ha suscripto. Para desuscribirse a las notificaciones, haga clic en el botón "Desuscribirse".</SegmentDescription>
          <AuthorsWrapper>
            {
              this.state.userSubscribedAuthors.map((author) => (
                <AuthorDiv key={author._id}>
                  <AuthorAvatar userId={author._id} />
                  <div>
                    <AuthorName><a href={`/userprofile?id=${author._id}`}>{author.name}</a></AuthorName>
                    <AuthorUnsubscribeButton onClick={() => this.handleAuthorUnsubscribeClick(author._id)}>
                      Desuscribirse
                    </AuthorUnsubscribeButton>
                  </div>
                </AuthorDiv>
              ))
            }
            {
              this.state.userSubscribedAuthors.length === 0 &&
              <SegmentDescription>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&times; <i>No se ha suscripto a ningún autor</i>
              </SegmentDescription>
            }
          </AuthorsWrapper>
          <br />
          <br />
        </Section>
      </MyNotificationsWrapper>
    )
  }
}

export default WithUserContext(MyNotificationsSettings)
