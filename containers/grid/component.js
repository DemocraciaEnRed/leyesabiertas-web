import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4.8rem 0 1.6rem;
  > div {
    margin-bottom: 56px;
  }
  @media (max-width: 1400px) {
    justify-content: space-around;
  }
`

const Grid = ({ children }) => (
  <StyledGrid>
    { children }
  </StyledGrid>
)

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Grid
