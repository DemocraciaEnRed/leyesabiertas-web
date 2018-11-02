import React, { Component, Fragment, createContext } from 'react'
import ModeBar from '../../components/mode-bar/component'
import ModeButton from '../../elements/mode-button/component'
import ProjectHeader from '../../components/project-header/component'
import ProjectBody from '../../components/project-body/component'
import ProjectComments from '../../components/project-comments/component'
import UserEditor from '../../components/user-editor/component'

const ArticlesContext = createContext({
  withComments: false,
  switchComments: null,
  selectedCommentsIds: [],
  isAuthor: false
})

export default class extends Component {
  state = {
    withComments: false,
    selectedCommentsIds: []
  }

  switchComments = () => {
    this.setState((prevState) => ({
      withComments: !prevState.withComments
    }))
  }

  toggleSelectedComment = (id) => () => {
    this.setState(({ selectedCommentsIds }) => {
      let _ids
      if (selectedCommentsIds.includes(id)) {
        _ids = selectedCommentsIds.filter(_id => _id !== id)
      } else {
        _ids = selectedCommentsIds.concat([id])
      }
      return { selectedCommentsIds: _ids }
    })
  }

  render () {
    const { project, section } = this.props
    const { withComments} = this.state
    if (!project) return null
    return (
      <div className='user-container'>
        <ArticlesContext.Provider value={{
          project: project.document,
          withComments: withComments,
          switchComments: this.switchComments,
          isAuthor: project.isAuthor,
          toggleSelectedComment: this.toggleSelectedComment,
          selectedCommentsIds: this.state.selectedCommentsIds
        }}>
          <ProjectHeader project={project.document} section={section} />
          {this.props.section === '/proyecto' &&
          <Fragment>
            <ProjectBody project={project.document} />
            <ProjectComments project={project.document} />
          </Fragment>
          }
          {this.props.section === '/articulado' &&
          <Fragment>
            <ModeBar>
              <ModeButton withComments={false}>Vista lectura</ModeButton>
              <ModeButton withComments >Vista con comentarios</ModeButton>
            </ModeBar>
            <UserEditor
              value={project.document.currentVersion.content.articles}
              isAuthor={project.isAuthor}
              withComments={withComments}
              id={project.document._id} />
          </Fragment>
          }
        </ArticlesContext.Provider>
      </div>
    )
  }
}

export { ArticlesContext }
