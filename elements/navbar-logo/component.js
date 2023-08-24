import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'


const StyledLogo = styled.div`
width:33.33%;
display:flex;
justify-content:center;
`

const Logo = styled.div`
  width: 130px;
  height: 98px;
  background-image:url(${'/static/assets/diputados.svg'});
  background-size: cover;
  background-position: center;  
  box-sizing: border-box;
  cursor:pointer;
  @media (max-width: 760px) {
    width: 67px;
    height: 51px;
    margin: auto 0;

  }
  transition: all 0.4s ease-out;
  ${(props) => {
   
    if (props.position > props.y) {
      return ` width: 94px;
              height: 70px;
              `
    }
  }
}
`

const NavbarLogo = ({y, position}) => (

  <StyledLogo>
    <Link href='/'>
      <Logo y={y} position={position}/>
    </Link>
  </StyledLogo>

)

NavbarLogo.propTypes = {
  y: PropTypes.number,
  scroll: PropTypes.number
}

export default NavbarLogo
