import React, { Component, Fragment, createContext } from 'react'
import Icon from 'react-icons-kit'
import { checkSquareO } from 'react-icons-kit/fa/checkSquareO'
import { squareO } from 'react-icons-kit/fa/squareO'
import ModeBar from '../../components/mode-bar/component'
import ModeButton from '../../elements/mode-button/component'
import ModeBarLinkButton from '../../elements/mode-bar-link-button/component'
import ProjectHeader from '../../components/project-header/component'
import ProjectBody from '../../components/project-body/component'
import ProjectComments from '../../components/project-comments/component'
import UserEditor from '../../components/user-editor/component'
import Versiones from '../versiones/component'


const ArticlesContext = createContext({
  withComments: true,
  switchComments: null,
  selectedCommentsIds: [],
  isAuthor: false,
  editMode: false,
  projectFields: null
})

export default class extends Component {
  state = {
    withComments: true,
    selectedCommentsIds: [],
    editMode: false,
    isPublished: false,
    projectFields: null
  }

  switchComments = (receivedValue) => () => {
    this.setState({
      withComments: receivedValue
    })
  }

  toggleSelectedComment = (id) => () => {
    this.setState(({ selectedCommentsIds }) => {
      let _ids
      if (selectedCommentsIds.includes(id)) {
        _ids = selectedCommentsIds.filter((_id) => _id !== id)
      } else {
        _ids = selectedCommentsIds.concat([id])
      }
      return { selectedCommentsIds: _ids }
    })
  }
  setNewFields = (projectFields) => this.setState({ projectFields: projectFields })

  toggleEditMode = () => this.setState(({ editMode }) => ({ editMode: !editMode }))
  togglePublish = () => this.setState({ isPublished: !this.state.isPublished })
  setPublish = (isPublished) => this.setState({ isPublished: isPublished })

  render() {
    const { project, section, fetchDocument } = this.props
    const { withComments, isPublished } = this.state
    if (!project) return null
    const { isAuthor } = project
    return (
      <div className='user-container'>
        <ArticlesContext.Provider value={{
          project: project.document,
          withComments: withComments,
          switchComments: this.switchComments,
          isAuthor: isAuthor,
          editMode: this.state.editMode,
          toggleSelectedComment: this.toggleSelectedComment,
          toggleEditMode: this.toggleEditMode,
          selectedCommentsIds: this.state.selectedCommentsIds,
          fetchDocument: fetchDocument,
          setNewFields: this.setNewFields,
          projectFields: this.state.projectFields
        }}>
          <ProjectHeader
            project={project.document}
            section={section}
            isPublished={isPublished}
            setPublish={this.setPublish}
            togglePublish={this.togglePublish}
            isAuthor={isAuthor}
            contributorsCount={project.contributorsCount}
            contextualCommentsCount={project.contextualCommentsCount}
            contributionsCount={project.contributionsCount} />
          {this.props.section === '/propuesta' &&
            <Fragment>
              <ModeBar>
                <ModeBarLinkButton active>Fundamentacion</ModeBarLinkButton>
                <ModeBarLinkButton href={{ pathname: '/articulado', query: { id: project.document._id } }}>Articulos</ModeBarLinkButton>
                {/* <ModeBarLinkButton onClick={this.switchComments(false)} href={{ pathname: '/articulado', query: { id: project.document._id } }}>Articulado </ModeBarLinkButton> */}
              </ModeBar>
              <ProjectBody project={project.document} />
              <ProjectComments project={project.document} />
            </Fragment>
          }
          {this.props.section === '/articulado' &&
            <Fragment>
              <ModeBar>
                <ModeBarLinkButton href={{ pathname: '/propuesta', query: { id: project.document._id } }}>Fundamentacion</ModeBarLinkButton>
                <ModeBarLinkButton active>Articulos</ModeBarLinkButton>
                {/* <ModeButton withComments>Articulado</ModeButton> */}
                <ModeButton>
                  {withComments ? <Icon icon={squareO} size={20} /> : <Icon icon={checkSquareO} size={20} />}&nbsp;
                  Modo lectura
                </ModeButton>
              </ModeBar>
              <UserEditor
                value={project.document.currentVersion.content.articles}
                isAuthor={isAuthor}
                editMode={this.state.editMode}
                withComments={withComments}
                id={project.document._id}
                isClosed={project.document.closed} />
            </Fragment>
          }
          {this.props.section === '/versiones' &&
            <Fragment>
              <Versiones
                project={project.document} />
            </Fragment>
          }
        </ArticlesContext.Provider>
      </div>
    )
  }
}

export { ArticlesContext }
