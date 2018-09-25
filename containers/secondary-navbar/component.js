import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import jump from 'jump.js'
import StyledSecondaryNavbarTitle from '../../elements/secondary-navbar-title/component'
import LinkBar from '../../components/link-bar/component'

const SecondaryBar = styled.div`
  height:4rem;
  display: flex;
  justify-content:space-between;
  margin-bottom: 2rem;
  padding-left:5%;
  padding-right:5%;
  padding-top:2rem;
  }
`

const links = [
  {
    name: 'Proyectos',
    value: '#projects'
  },
  {
    name: 'Cómo participar',
    value: '#participate'
  },
  {
    name: 'La propuesta',
    value: '#about'
  }
]

const scroll = (target) => (e) => {
  jump(target)
}

const SecondaryNavbar = ({ children }) => (
  <SecondaryBar>
    <StyledSecondaryNavbarTitle />
    <LinkBar>
      {links.map((li, i) => (
        <a onClick={scroll(li.value)}>{li.name}</a>
      ))}
    </LinkBar>
  </SecondaryBar>
)

SecondaryNavbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default SecondaryNavbar
