import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import WithUserContext from '../../components/with-user-context/component'
import BetaLabel from '../../elements/beta-label/component'
import NavbarLogo from '../../elements/navbar-logo/component'
import UserBar from '../../components/user-bar/component'
import LoggedUserBar from '../../components/logged-user-bar/component'
import Button from '../../elements/navbar-button/component'
import LoggedUser from '../../components/logged-user/component'
import Notifications from '../../components/notifications-bar/component'
import UserMenu from '../../components/user-menu/component'
import Tooltip from '../../components/tooltip/component'
import StyledNavbarTitle from '../../elements/styled-navbar-title/component'
import SecondaryNavbar from '../secondary-navbar/component'
import Link from 'next/link'
import MobileMenu from '../mobileMenu/component'
import SocialBar from '../../components/social-bar/component'
import SocialIcon from '../../elements/social-icon/component'

import Icon from 'react-icons-kit'

import {timesCircle} from 'react-icons-kit/fa/timesCircle'
import {bars} from 'react-icons-kit/fa/bars'



const StyledNav = styled.nav`
  height:12rem;
  display: flex;
  padding:1rem 4.4%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom:1px solid #dae1e7;
  z-index:1060;
  transition: height 0.4s ease-out;
  @media(max-width:700px){
    transition: height 0.4s ease-out;
   }
   &:after {
    display: ${(props) => props.cover ? 'block':'none'};
    opacity:${(props) => props.cover ? '0.9':'0'};
    content: " ";
    position: absolute;
    height:100vh;
    width:100%;
    top:0;
    right:0;
    z-index:998
    backdrop-filter: blur(3px);
    transition: opacity 0.3s linear 2s;
  
  }
  ${(props) => {
    if (props.position > props.y) {
      return `top: 0!important;
              position: fixed!important;
              box-shadow: 0px 3px 4px 0px #9999996b;
              width: 100%;
              background: #fff;
              height:9rem;
              @media(max-width:700px){
                height:10rem;
               }
              
              `
    }
  }
}
`

const LinksNavBar = styled.div`
width:40%
display: flex;
align-items: center;
justify-content: flex-end;
@media(max-width:760px){
  display:none;
 }
`

const MobileLinks = styled.div`
height:100vh;
width:75%;
background-color:#fff
position:fixed;
right:${(props)=> !props.show ? '-75%': '0'};
top:0;
z-index:999
box-shadow:${(props)=> props.show && '-3px 3px 4px 0px #9999996b'}; 
transition: all 0.4s ease-in;

@media(min-width:760px){
  display:none;
 }

`
const HeaderMobileMenu = styled.div`
height:10rem;
display:flex;
align-items:center;
justify-content:flex-end
padding-top:14px
padding-right:16px
color: #6CAAE4
cursor:pointer
`

const StyledNavMenuIcon = styled.div`
margin-top: auto;
margin-bottom: auto;
display: flex;
align-items: center;
justify-content: flex-end;
@media(min-width:760px){
  display:none;
 }
`

const MenuIcon = styled.div`
background: #6CAAE4;
color: #fff;

height: 30px;
width: 30px;
display: flex;
align-items: center;
justify-content: center;
border-radius:50%
cursor:pointer
`


class NavBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      menu: false,
      showTooltip: false,
      showTagsTooltip: false,
      scroll:0,
      y:0,
      showMenuMobile:false
    }
  }

  componentDidMount () {
    const hideTooltips = localStorage.getItem('hide-tooltips') || false
    if (window.location.pathname === '/articulado' && !this.props.authContext.authenticated && !hideTooltips) {
      this.setState({
        showTooltip: true
      })
    }

    const hideTagsTooltip = localStorage.getItem('hide-tagstooltips') || false
    if (!hideTagsTooltip){
      this.setState({
        showTagsTooltip: true
      })
    }

    window.addEventListener('scroll', (e) => this.handleScroll(e.target.documentElement.scrollTop))
    // window.addEventListener('resize', () => setY(document.getElementById('secondaryBar').offsetTop))
    this.setState({y:document.getElementById('toFixedNavBar').offsetTop})

  }

  handleMenu = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  handleShowMobileMenu = ()=>{
    this.setState({
      showMenuMobile: !this.state.showMenuMobile
    })
  }

  handleScroll = (position) => {this.setState({scroll:position})}

  render () {
    if (!this.props.authContext) return null
    const { y, scroll, showMenuMobile } = this.state

    let hasTags;
    try { hasTags = this.props.authContext.user.fields.tags.length > 0 }
    catch (e) { hasTags = false }

    return (
      <StyledNav id='toFixedNavBar' y={y} position={scroll} cover={showMenuMobile}>
        <StyledNavbarTitle />
        <NavbarLogo y={y} position={scroll}/>
        <StyledNavMenuIcon style={{width:'33%'}}>
          <MenuIcon>
              <Icon icon={bars} size={20} onClick={this.handleShowMobileMenu}/>
          </MenuIcon>

        </StyledNavMenuIcon>
        <LinksNavBar>
        <SecondaryNavbar/>
        {this.props.authContext.authenticated
          ? (
            <LoggedUserBar>
              <LoggedUser onClick={this.handleMenu} user={this.props.authContext.user} />
              {this.state.menu &&
              <UserMenu logout={this.props.authContext.logout} user={this.props.authContext.user} create={this.createProject} isAuthor={this.props.authContext.isAuthor} />
              }
            </LoggedUserBar>
          ) : (
            <UserBar>
              <Button primary bigger onClick={this.props.authContext.login}>Ingresar</Button>
              {/*<Button primary onClick={this.props.authContext.register}>Registrarse</Button>*/}
            </UserBar>
          )}
        </LinksNavBar>
        <MobileLinks show={showMenuMobile}>
          <HeaderMobileMenu>
            <Icon icon={timesCircle} size={30} onClick={this.handleShowMobileMenu}/>
          </HeaderMobileMenu>
        {this.props.authContext.authenticated
          ? (
            <LoggedUserBar>
              <LoggedUser onClick={this.handleMenu} user={this.props.authContext.user} />
              {this.state.menu &&
              <UserMenu logout={this.props.authContext.logout} user={this.props.authContext.user} create={this.createProject} isAuthor={this.props.authContext.isAuthor} />
              }
            </LoggedUserBar>
          ) : (
            <UserBar>
              <Button primary bigger onClick={this.props.authContext.login}>Ingresar</Button>
              {/*<Button primary onClick={this.props.authContext.register}>Registrarse</Button>*/}
            </UserBar>
          )}
          <MobileMenu/>
              <SocialBar style={{bottom:'0', position:'absolute', width:'100%'}}>
                <SocialIcon
                  img={'/static/assets/facebook-icon.svg'}
                  link={'https://www.facebook.com/diputados.argentina'} />
                <SocialIcon img={'/static/assets/twitter-icon.svg'}
                  link={'https://twitter.com/DiputadosAR'} />
              </SocialBar>
        </MobileLinks>
        { !this.props.authContext.authenticated && this.state.showTooltip &&
          <Tooltip top={'110px'} right={'20px'} localStorageHideKey='hide-tooltips'>
            Para agregar aportes debe estar registrado.
            Ingrese a la sección y complete el formulario
          </Tooltip>
        }
        { this.props.authContext.authenticated && !hasTags && this.state.showTagsTooltip &&
          <Tooltip top={'110px'} right={'20px'} localStorageHideKey='hide-tagstooltips'>
            ¡Complete su perfil con los temas que le interesan!
          </Tooltip>
        }
        
      </StyledNav>
    )
  }
}

NavBar.propTypes = {
  authContext: PropTypes.object.isRequired
}

export default WithUserContext(NavBar)
