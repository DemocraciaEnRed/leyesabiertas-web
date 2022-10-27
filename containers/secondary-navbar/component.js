import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import jump from 'jump.js'
import Link from 'next/link'
import LinkBar from '../../components/link-bar/component'
import WithUserContext from '../../components/with-user-context/component'
import UserBar from '../../components/user-bar/component'
import LoggedUserBar from '../../components/logged-user-bar/component'
import Button from '../../elements/navbar-button/component'
import NavbarLogo from '../../elements/navbar-logo/component'



const SecondaryBar = styled.div`
  height:6rem;
  display: flex;
  
  justify-content:center;
  padding: 2rem 5%;
  z-index:1060;
  transition: height 0.4s ease-out;
  @media(max-width:700px){
    transition: height 0.4s ease-out;
   }
  ${(props) => {
    if (props.position >= props.y) {
      return `top: 0!important;
              position: fixed!important;
              box-shadow: 0px 3px 4px 0px #9999996b;
              width: 100%;
              background: #fff;
              height:8rem;
              @media(max-width:700px){
                height:10rem;
               }
               > div {
                width: 30%;
                justify-content: space-around;
              }
              `
    }
  }
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
    hash: '#projects',
    link: '/'
  },
  {
    name: 'Participá',
    hash: '#participate',
    link: '/info?section=como-participar'
  },
  {
    name: 'Sobre LA',
    hash: '#about',
    link: '/info?section=acerca-de'
  }
]

const NavbarLink = ({ name, link }) => (
  <Link href={link}>
    <a>
      { name }
    </a>
  </Link>
)

const SecondaryNavbar = () => {
  const [scroll, setScroll] = useState(0)
  const handleScroll = (position) => setScroll(position)
  const [y, setY] = useState()

  useEffect(() => {
    window.addEventListener('scroll', (e) => handleScroll(e.target.documentElement.scrollTop))
    window.addEventListener('resize', () => setY(document.getElementById('secondaryBar').offsetTop))
    setY(document.getElementById('secondaryBar').offsetTop)
  }, [])

  return (
    <SecondaryBar id='secondaryBar' y={y} position={scroll}>
      {/* <SecondaryLogo>
        <NavbarLogo />
      </SecondaryLogo> */}
      <LinkBar>
        {links.map((li, i) => {
          return <NavbarLink
            key={i}
            name={li.name}
            link={li.link} />
        })}
      </LinkBar>
    </SecondaryBar>
  )
}

export default SecondaryNavbar
