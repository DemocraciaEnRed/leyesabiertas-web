import React, { Component, createContext } from 'react'
import ProjectHeader from '../../components/project-header/component'
import ModeBar from '../../components/mode-bar/component'
import Editor from '../../components/editor/component'
import ModeButton from '../../elements/mode-button/component'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'

const { publicRuntimeConfig: { API_URL }} = getConfig()

const ArticlesContext = createContext()

class ArticlesContainer extends Component {
  state = {
    project: null,
    isAuthor: false,
    isLoggedIn: true,
    editionMode: false,
    withComments: false
  }

  async componentDidMount () {
    try {
      const result = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project}/`)).json()
      this.setState({
        project: result
      })
    } catch (err) {
      console.error(err)
    }
  }

  switchComments = () => {
    this.setState((prevState) => ({
      withComments: !prevState.withComments
    }))
  }

  switchEdition = () => {
    this.setState((prevState) => ({
      editionMode: !prevState.editionMode
    }))
  }

  render () {
    const {
      project,
      // isAuthor,
      isLoggedIn,
      editionMode,
      withComments
    } = this.state
    if (!project) return null
    return (
      <ArticlesContext.Provider value={{
        project: project.document,
        isAuthor: project.isAuthor,
        isLoggedIn: isLoggedIn,
        editionMode: editionMode,
        withComments: withComments,
        switchComments: this.switchComments,
        switchEdition: this.switchEdition
      }}>
        <ProjectHeader project={project.document} />
        <ModeBar>
          <ModeButton withComments={false}>Vista lectura</ModeButton>
          <ModeButton withComments >Vista con comentarios</ModeButton>
        </ModeBar>
        <Editor
          value={project.document.currentVersion.content.articles}
          withComments={withComments}
          id={project.document._id} />
      </ArticlesContext.Provider>
    )
  }
}

export { ArticlesContainer, ArticlesContext }
