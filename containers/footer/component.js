import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Footer = styled.footer`
  width: 100%;
  height: 48.5rem;
  background-color: var(--white);
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
`

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Footer
