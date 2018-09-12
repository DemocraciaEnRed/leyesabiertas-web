import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCircle = styled.div`
  width:5.5rem;
  height:5.5rem;
  background-image:  url('/static/assets/circular-bar.svg');
  background-size: cover;
  background-position: center;  
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 14px;
  font-family:var(--bold);
  color: #4f81a1;

`

const CircularBar = ({ progress }) => (
  <StyledCircle>
    { progress }
  </StyledCircle>
)

CircularBar.propTypes = {
  progress: PropTypes.number.isRequired
}

export default CircularBar
