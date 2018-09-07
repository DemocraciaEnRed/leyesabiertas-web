import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledNav = styled.nav`
  margin: 2.7rem 8.5rem 5.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`

const Navbar = ({ children }) => (
  <StyledNav>
    { children }
  </StyledNav>
)

Navbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Navbar
