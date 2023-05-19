import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import jump from 'jump.js'
import Link from 'next/link'
import LinkBar from '../../components/link-bar/component'
import router from 'next/router'
import { hash } from 'react-icons-kit/feather'

// import NavbarLogo from '../../elements/navbar-logo/component'

const SecondaryBar = styled.div`
  height:6rem;
  display: flex;
  
  justify-content:center;
  padding: 2rem 2rem;
  @media (max-width: 930px){
    height:auto
  }
  a {
    &:last-child{
      padding-right:20px;
    }
    &:first-child{
      height:auto;
    }
  }

`
/* const SecondaryLogo = styled.div`
> * {
  >*{
    height: 30px;
    width:100px;
  }
}
` */

const links = [
  {
    name: 'Inicio',
    hash: '#__next',
    link: '/'
  },
  {
    name: 'Participá',
    hash: '#projects',
    link: '/'
  },
  {
    name: 'Sobre LA',
    hash: '#__next',
    link: '/info?section=acerca-de'
  }
]

const NavbarLink = ({ name, link, hash }) => {
  const move = async () => {
    await router.push(link)
    jump(hash)
  }

  return (
    <a onClick={() => move()}>
      { name }
    </a>
  )
}

NavbarLink.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  hash: PropTypes.string
}

const SecondaryNavbar = () => {

  return (
    <SecondaryBar >
      {/* <SecondaryLogo>
        <NavbarLogo />
      </SecondaryLogo> */}
      <LinkBar>
        {links.map((li, i) => {
          return <div key={i}>
            <NavbarLink
              name={li.name}
              link={li.link}
              hash={li.hash} />

          </div>
        })}
      </LinkBar>
    </SecondaryBar>
  )
}

export default SecondaryNavbar
