import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CardHeader from '../../elements/card-header/component'
import CardContent from '../../elements/card-content/component'
import CardSocial from '../../elements/card-social/component'

const CardContainer = styled.div`
width: 370px;
height: 340px;
box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
background-color: #ffffff;
border: solid 1px #e9e9e9;
display:flex;
flex-direction:column;
justify-content:space-between;
background: #fff;
box-sizing: border-box;
cursor: pointer;
margin-bottom: 2rem;
`

const Card = ({ project }) => (
  <Link href={{ pathname: '/propuesta', query: { id: project._id } }}>
    <a>
      <CardContainer>
        { project.currentVersion.content.imageCover &&
        <CardHeader img={project.currentVersion.content.imageCover} published={project.published} />
        }
        <CardContent
          title={project.currentVersion.content.title}
          authorId={project.author._id}
          userId={project.author._id}
          name={project.author.fullname}
          party={project.author.fields && project.author.fields.party ? project.author.fields.party : ''} />
        <CardSocial commentaries={project.commentsCount}
          limitDate={project.currentVersion.content.limitDate} />
      </CardContainer>
    </a>
  </Link>
)

Card.propTypes = {
  project: PropTypes.object.isRequired
}

export default Card
