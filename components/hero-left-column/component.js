import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLeftColumn = styled.div`
  max-width: 62.9rem;
`

const HeroLeftColumn  = ({ children }) => (
  <StyledLeftColumn>
    { children }
  </StyledLeftColumn>
)

HeroLeftColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default HeroLeftColumn
