import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CardHeader from '../../elements/card-header/component'
import CardContent from '../../elements/card-content/component'
import CardSocial from '../../elements/card-social/component'
import WithDocumentTagsContext from '../../components/document-tags-context/component'

const CardContainer = styled.div`
margin: 0 1% 30px;
width: 23%;
box-shadow: 0 4px 20px 0 rgba(0,0,0,0.05);
background-color: #ffffff;
border: solid 1px #e9e9e9;
background: #fff;
box-sizing: border-box;
cursor: pointer;
display: block;
position: relative;
@media (max-width: 1408px) {
  width: 31%;
  }
@media (max-width: 1216px) {
  width: 48%;
  }
@media (max-width: 600px) {
  width: 100%;
  }
`

const Card = ({ project, tags }) => (
  <CardContainer>
    <Link href={{ pathname: '/propuesta', query: { id: project._id } }}>
      <a>
        {/* <CardHeader img={project.currentVersion.content.imageCover} published={project.published} /> */}
        <CardHeader hasImage={project.currentVersion.content.tags && project.currentVersion.content.tags.length > 0} img={`/static/assets/images/${tags && project.currentVersion.content.tags && project.currentVersion.content.tags.length > 0 ? tags.find(x => project.currentVersion.content.tags[0] == x.value).key : 'trama-default'}.jpg`} published={project.published} />
        <CardContent
          title={project.currentVersion.content.title}
          authorId={project.author._id}
          userId={project.author._id}
          name={project.author.fullname}
          // hasImage={!!project.currentVersion.content.imageCover}
          hasImage={project.currentVersion.content.tags && project.currentVersion.content.tags.length > 0}
          party={project.author.fields && project.author.fields.party ? project.author.fields.party : ''} />
        <CardSocial commentaries={project.commentsCount}
          closed={project.closed}
          apoyosCount={project.apoyosCount} />
      </a>
    </Link>
  </CardContainer>
)

Card.propTypes = {
  project: PropTypes.object.isRequired
}

export default WithDocumentTagsContext(Card)
