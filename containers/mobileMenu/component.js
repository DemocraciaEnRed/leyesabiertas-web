import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import jump from 'jump.js'
import Link from 'next/link'
import LinkBar from '../../components/link-bar/component'
import router from 'next/router'
import Icon from 'react-icons-kit'
import {plus} from 'react-icons-kit/fa/plus'
import {document_download} from 'react-icons-kit/ikons/document_download'


// import NavbarLogo from '../../elements/navbar-logo/component'

const SecondaryBar = styled.div`
  height:6rem;
  display: flex;
  
  justify-content:center;
  @media(max-width:760px){

    justify-content: flex-start;
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

const SubMenuDiv = styled.div`
display:flex;
list-style:none;
padding-left:0;
white-space: nowrap;
flex-direction: column;
font-size: 2.6rem;
align-items: flex-start;
width:100%;
max-height:${(props) => props.showSubMenu ? '500px': '0'};
overflow:hidden;
transition: all 0.6s ease-in;

    > a {
     color: #203340;
     display: inline-block;
     font-size: 2.4rem;
     padding-left: 25%;
     padding-bottom: 10px
     width:100%
     &:first-child{
       padding-top:10px
       margin-left: 0;
       border-top:1px solid #D6D6D6;
    }
     &:last-child{
       padding-right:0px;
     }

   }
   > i {
    padding-right:6px
    cursor:pointer
  }
  
`

const DownloadButton = styled.div`
color: #203340;
     display: flex;
     font-size: 2.4rem;
     padding-left: 25%;
     padding-bottom: 10px;
     width:100%;
     justify-content: space-between;
     > i {
      padding-right: 16px;
     }
`

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
    link: '',
    subMenu:[
      {
        'name': 'Acerca de',
        'value': 'acerca-de',
        'link': '/info?section=acerca-de'
      },
      {
        'name': 'Cómo participar',
        'value': 'como-participar',
        'link': '/info?section=como-participar'
      },
      {
        'name': 'Preguntas frecuentes',
        'value': 'faq',
        'link': '/info?section=faq'
      },
      {
        'name': 'Sobre el sitio',
        'value': 'sobre-el-sitio',
        'link': '/info?section=sobre-el-sitio'
      },
      {
        'name': 'Contacto',
        'value': 'contacto',
        'link': '/info?section=contacto'
      }
    ]
  },
  {
    name: 'Términos y condiciones',
    hash: '#__next',
    link: '/terminos-y-condiciones'
  },
  {
    name: 'Políticas de privacidad',
    hash: '#__next',
    link: '/politicas-de-privacidad'
  }
]

const NavbarLink = ({ name, link, hash, handleShowSubMenu }) => {

  const move = async () => {
    if(link){
      await router.push(link)
      jump(hash)
    }
    if(name === 'Sobre LA'){
      handleShowSubMenu()
    }
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

const MobileMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false)

  const handleShowSubMenu =()=>{
    setShowSubMenu(!showSubMenu)
  }

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
            hash={li.hash}
            handleShowSubMenu={handleShowSubMenu} />
            {li.subMenu && <Icon icon={plus} size={16} onClick={handleShowSubMenu}/>}
            {li.subMenu && <SubMenuDiv showSubMenu={showSubMenu}>
              {li.subMenu.map((menu, idx) =>
              <NavbarLink
                key={idx}
                name={menu.name}
                link={menu.link}
                hash={menu.hash} /> 
              )}
              <DownloadButton onClick={() => window.open('/static/files/congreso_manual_de_usuario.pdf', '_blank')}>
                Manual de usuario
                <Icon icon={document_download} size={16} /> 
              </DownloadButton>
              
            </SubMenuDiv>}
          </div> 
        })}
      </LinkBar>
    </SecondaryBar>
  )
}

export default MobileMenu
