import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledText = styled.div`
  padding: 3.9rem 17.5rem 3.9rem;
  background-color: #5c98bd;
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align: center;
  height: 12.6rem;
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
