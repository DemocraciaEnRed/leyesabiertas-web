import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ArticlesContext } from '../../containers/user-project-container/component'
import WithDocumentTagsContext from '../../components/document-tags-context/component'

const ProjectTagsContainer = styled.div`
  // min-height: 383px;
  width:90%;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  margin-right:auto;
  margin-left:auto;
  // padding:5% 20% 0% 10%;
  padding: 15px 20% 0% 3.5%;
  margin-bottom: 20px;

  @media (max-width:769px){
    padding:5% 0px;
  }

`
export const ProjectTag = styled.span`
  font-size: 15px;
  background-color: #eee;
  padding: 8px 15px;
  margin-bottom: 5px;
  margin-right: 5px;
`


class ProjectTags extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  state = {
    allTags: []
  }

  async componentDidMount() {
    this.setState({ allTags: await this.props.fetchDocumentTags() })
  }

  render() {
    const { project } = this.props
    const { allTags } = this.state
    const projectTags = project.currentVersion.content.tags || []
    return (
      <ProjectTagsContainer>
        { allTags.length > 0 && projectTags.length > 0 &&
          <ArticlesContext.Consumer>
            {
              ({ isAuthor, editMode, setYoutubeId, editedYoutubeId, newYoutubeId, setNewFields }) => (
                projectTags.map(tagId =>
                  <ProjectTag key={tagId}>
                    { allTags.find(documentTag => documentTag._id == tagId).name }
                  </ProjectTag>
                )
              )
            }
          </ArticlesContext.Consumer>
        }
      </ProjectTagsContainer>
    )
  }
}

export default WithDocumentTagsContext(ProjectTags)
