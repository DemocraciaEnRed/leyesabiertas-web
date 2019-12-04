import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Wrapper = styled.div`
  @media (max-width:700px){
    display: none;
  }
`

const StyledNumber = styled.span`
  font-size: 32px;
  font-family: var(--black);
  // line-height: ;
  color: #2d4b5e;
  line-height: 28px;
`

const StyledText = styled.p`
  font-size: 12px;
  color: #2d4b5e;
  // width: 110px;
  margin-left: 8px;
  // margin-bottom: 5px;
  align-items: center;
`

const StyledCommentsCounter = styled.div`
  // padding: 0 2rem;
  padding-bottom: 3px;
  display: flex;
  align-items: flex-start;
`


const ProjectHeaderVersionLink = styled.p`
  font-size:12px;
  color: #5c97bc;
  text-transform: uppercase;
  // height:35px;
`

const ArticlesCommentsCounter = ({ commentsCount, project }) => (
  <Wrapper>
    <StyledCommentsCounter>
      <StyledNumber>{commentsCount}</StyledNumber>
      <StyledText>Aportes<br/>realizados</StyledText>
    </StyledCommentsCounter>
    <ProjectHeaderVersionLink>
      <Link href={{ pathname: '/versiones', query: { id: project } }}>Articulado ➔</Link>
    </ProjectHeaderVersionLink>
  </Wrapper>
)

ArticlesCommentsCounter.propTypes = {
  commentsCount: PropTypes.number.isRequired
}

export default ArticlesCommentsCounter
