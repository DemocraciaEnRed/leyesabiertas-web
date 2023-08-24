import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  min-width: 125px;
  max-width: 230px;
  height: 39px;
  background-color: var(--white);
  font-size: 1.4rem;
  color: #5c97bc;
  border-radius:5px
  cursor: pointer;
  padding: 0 2rem;
  font-family: var(--bold);
/* primary = blue background, secondary = white background */
  background-color: ${(props) => props.primary ? '#5c97bc' : 'var(--white)'};
  color: ${(props) => props.primary ? 'var(--white)' : '#2c4c61'};
  border: ${(props) => props.withBorder ? 'solid 2px #5c97bc' : 'none'};
  align-self: ${(props) => props.center ? 'center' : 'auto'};
  &:hover{
    background-color: ${(props) => props.primary ? 'var(--white)' : '#5c97bc'};
    color: ${(props) => props.primary ? '#5c97bc' : 'var(--white)'};
    border: ${(props) => props.withBorder ? 'none' : 'solid 2px #5c97bc'};
  }
`

const styledButton = (props) => (
  <StyledButton {...props} />
)

styledButton.propTypes = {
  primary: PropTypes.bool,
  withBorder: PropTypes.bool,
  center: PropTypes.bool
}

export default styledButton
