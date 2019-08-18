import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getConfig from 'next/config'
import { Editor, findDOMRange } from 'slate-react'
import { Value } from 'slate'
import WithUserContext from '../../components/with-user-context/component'
import ProjectTextEdit from '../../components/project-text-edit'
import ContributionCard from './contributionCard'

const { publicRuntimeConfig: { API_URL } } = getConfig()

const VersionesContainer = styled.div`
  // min-height: 383px;
  width:90%;
  display: flex;
  flex-direction:column;
  margin-right:auto;
  margin-left:auto;
  // padding:5% 20% 0% 10%;
  padding: 3% 3.5% 0%;
  
  // @media (max-width:769px){
  //   padding:5% 0px;
  // }

`

const OptionChoice = styled.div`
display: inline-block;
margin: 0 5px 5px;
font-size: 1.4rem;
padding: 5px 8px;
border-radius: 4px;
border: 1px solid #2c4c61;
cursor: pointer;
color: #2c4c61;
&:hover{
  background-color: #2c4c61;
  color: #FFF
}
&:first-child{
  // margin-left: 0;
}
&:last-child{
  // margin-right: 0;
}
&.disabled{
  color: #777;
  border-color: #777;
}
&.active{
  color: #FFF;
  border-color: #777;
  background-color: #2c4c61;
  // &:hover {
  //   background-color: #FFF;
  //   border: 1px solid #2c4c61;
  //   color: #2c4c61;
  // }
}
`
const Options = styled.div`
  margin-bottom: 10px
`

const StyledEditorWrapper = styled.div`
  padding: 30px;
  border: 1px solid #D9D9D9;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  position: relative;
  .editor {
    // margin-top:4rem;
    // max-width: 74%;
  //   @media (max-width: 1024px) {
  //   max-width:60%;
  // }
  //   @media (max-width: 700px) {
  //     max-width:100%;
  //   }
    div {
      margin-bottom: 1rem;
    }
    span {
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: #203340;
      padding: 6.5px 0px;
    }
  }
`

const ContributionsListWrapper = styled.div`
  margin-bottom: 50px;
`

const RegularNotice = styled.div`
  background-color: hsl(0, 0%, 90.2%);
  padding: 15px 20px;
  color: #2C4C61;
  font-size: 14px;
  margin-bottom: 2rem;
`
const CustomTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #2c4c61;
  margin: 2.1rem 0;
`

const ContributionsTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #2c4c61;
  margin: 2.1rem 0 0
`
const ContributionsSubtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  color: #757575;
  margin: 0.5rem 0 2.1rem;
`

class Versiones extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      selectedVersion: null,
      versionsArray: [],
      versionContent: null,
      editorValue: null,
      currentContributions: []
    }
    this.editor = null
  }

  schema = {
    marks: {
      comment: {
        isAtomic: true
      }
    }
  }

  componentDidMount() {
    let versionsArray = []
    for (let i = this.props.project.currentVersion.version; i >= 1; i--) {
      versionsArray.push(i)
    }
    this.setState({
      selectedVersion: this.props.project.currentVersion.version,
      versionsArray: versionsArray
    }, () => {
      this.fetchDocumentVersion(this.props.project.currentVersion.version)
    })
  }

  getClass = (version) => {
    if (this.state.selectedVersion === version) {
      return 'active'
    } else {
      return ''
    }
  }

  editorLoad = (editor) => { this.editor = editor }

  fetchDocumentVersion = async (version) => {
    try {
      let response = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/version/${version}`, {
        headers: {
          Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
          'Content-Type': 'application/json'
        }
      })).json()
      let contributionsArray = []
      if (response.retrievedVersion.contributions.length > 0) {
        contributionsArray = await (await fetch(`${API_URL}/api/v1/documents/${this.props.project._id}/comments?ids=${response.retrievedVersion.contributions.join(',')}`, {
          headers: {
            Authorization: `Bearer ${this.props.authContext.keycloak.token}`,
            'Content-Type': 'application/json'
          }
        })).json()
      }
      this.setState({
        versionContent: response.retrievedVersion,
        isLoading: false,
        selectedVersion: version,
        editorValue: Value.fromJSON(response.retrievedVersion.content.articles),
        currentContributions: contributionsArray
      })
    } catch (err) {
      console.error(err)
    }
  }

  changeVersion = async (version) => {
    if (this.state.selectedVersion === version) {
      return
    }
    this.setState({
      isLoading: true
    }, () => {
      this.fetchDocumentVersion(version)
    })
  }

  render() {
    const { project } = this.props
    const { selectedVersion, isLoading, versionsArray, versionContent, editorValue, currentContributions } = this.state
    // if (!project) return null
    // const { isAuthor } = project
    let plugins = []
    plugins.push(ProjectTextEdit({ id: project.id, field: 'articles', isAuthor: false }))
    return (
      <VersionesContainer>
        <CustomTitle>Versiones disponibles</CustomTitle>
        <Options>
          {
            versionsArray.map((i) => {
              return <OptionChoice className={this.getClass(i)} onClick={() => this.changeVersion(i)}>Versión {i}</OptionChoice>
            })
          }
        </Options>
        <CustomTitle>Articulado</CustomTitle>
        {isLoading ?
          <RegularNotice>Cargando documento...</RegularNotice>
          : <StyledEditorWrapper>
            <Editor
              plugins={plugins}
              ref={this.editorLoad}
              className='editor'
              schema={this.schema}
              // onChange={this.onChange}
              value={editorValue} />
          </StyledEditorWrapper>
        }
        <ContributionsListWrapper>
          {!isLoading ? <div>
            <ContributionsTitle>Contribuciones</ContributionsTitle>
            {selectedVersion > 1 ?
              <ContributionsSubtitle>Las siguientes contribuciones son aportes hechos en la versión {selectedVersion - 1} para la construcción de la versión {selectedVersion}</ContributionsSubtitle>
              : <ContributionsSubtitle>NOTA: La versión {selectedVersion} es el articulado original, sin contribuciones de los ciudadanos.</ContributionsSubtitle>
            }
          </div> : null}
          {!isLoading ?
            currentContributions.length > 0 ? currentContributions.map((c) => {
              return <ContributionCard project={project._id} comment={c} key={c._id} canDelete={false} />
            }) : <RegularNotice>Sin contribuciones</RegularNotice>
            : null
          }
        </ContributionsListWrapper>
      </VersionesContainer>
    )
  }
}

Versiones.propTypes = {
  project: PropTypes.object.isRequired,
  authContext: PropTypes.object.isRequired
}

export default WithUserContext(Versiones)
