import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledText = styled.div`
  background-color: #5c98bd;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  height: 126px;
  text-align: center;
`
const FooterText = ({ children }) => (
  <StyledText>
    { children }
  </StyledText>

)

FooterText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default FooterText
