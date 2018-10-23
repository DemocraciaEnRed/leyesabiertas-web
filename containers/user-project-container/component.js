import React, { Component, Fragment, createContext } from 'react'
import ModeBar from '../../components/mode-bar/component'
import ModeButton from '../../elements/mode-button/component'
import ProjectHeader from '../../components/project-header/component'
import ProjectBody from '../../components/project-body/component'
import ProjectComments from '../../components/project-comments/component'
import UserEditor from '../../components/user-editor/component'

const ArticlesContext = createContext({
  withComments: false,
  switchComments: null
})

export default class extends Component {
  state = {
    withComments: false
  }

  switchComments = () => {
    this.setState((prevState) => ({
      withComments: !prevState.withComments
    }))
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
          switchComments: this.switchComments
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
              value={project.document.content.fields.articles}
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
