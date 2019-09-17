import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledNumber = styled.span`
  font-size: 4.0rem;
  font-weight: 900;
  line-height: 0.85rem;
  color: #5c97bc;
`

const StyledText = styled.p`
  font-size: 1.6rem;
  font-weight: 500; 
  line-height: 1.8rem;
  color: #5c97bc;
  width: 110px;
  margin-left: 1.2rem;
  margin-bottom: 5px;
  align-items: center;
`

const StyledCommentsCounter = styled.div`
  padding: 0 2rem;
  display: flex;
  align-items: center;
`

const ArticlesCommentsCounter = ({ commentsCount }) => (
  <StyledCommentsCounter>
    <StyledNumber>{commentsCount}</StyledNumber>
    <StyledText>aportes de ciudadanos</StyledText>
  </StyledCommentsCounter>
)

ArticlesCommentsCounter.propTypes = {
  commentsCount: PropTypes.number.isRequired
}

export default ArticlesCommentsCounter
