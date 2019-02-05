import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import jump from 'jump.js'
import Link from 'next/link'
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
  @media(max-width:700px){
    height:5rem;
  }
`

const links = [
  {
    name: 'Propuestas',
    hash: '#projects',
    link: '/#projects'
  },
  {
    name: 'Cómo participar',
    hash: '#participate',
    link: '/info?section=como-participar'
  },
  {
    name: 'Acerca de',
    hash: '#about',
    link: '/info?section=acerca-de'
  }
]

const scroll = (target) => (e) => {
  jump(target)
}

const LandingLink = ({ name, value}) => (
  <a onClick={scroll(value)}>{name}</a>
)

const NavbarLink = ({ name, link}) => (
  <Link href={link}>
    <a>
      { name }
    </a>
  </Link>
)

const SecondaryNavbar = ({ isLanding }) => (
  <SecondaryBar>
    <StyledSecondaryNavbarTitle />
    <LinkBar>
      {links.map((li, i) => {
        return isLanding
          ? <LandingLink
            key={i}
            name={li.name}
            value={li.hash} />
          : <NavbarLink
            key={i}
            name={li.name}
            link={li.link} />
      })}
    </LinkBar>
  </SecondaryBar>
)

SecondaryNavbar.propTypes = {
  isLanding: PropTypes.bool
}

export default SecondaryNavbar
