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
  border-style: none;
  border-radius: 3px;
  cursor: pointer;

/* primary = blue background, secondary = white background */
  background-color: ${(props) => props.primary ? '#5c97bc' : 'var(--white)'};
  color: ${(props) => props.primary ? 'var(--white)' : '#2c4c61'};
  border: ${(props) => props.withBorder ? 'solid 2px #5c97bc' : 'none'};
  align-self: ${(props) => props.center ? 'center' : 'auto'};
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
