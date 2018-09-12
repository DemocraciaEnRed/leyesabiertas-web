import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledProgressBar = styled.div`
  width:7rem;
  height:7.7rem;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-start;
  margin-top: 2rem;

`
const CircularProgressBar = ({ children }) => (
  <StyledProgressBar>
    { children }
  </StyledProgressBar>
)

CircularProgressBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default CircularProgressBar
