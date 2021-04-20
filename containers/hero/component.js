import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeroTitle from '../../elements/hero-title/component'
import HeroSubtitle from '../../elements/hero-subtitle/component'
import HeroVideo from '../../elements/hero-video/component'
import {useMediaQuery} from '@react-hook/media-query'
// const StyledHero = styled.div`
//   min-height: 350px;
//   background-image: url('/static/assets/background-hero.jpg');
//   background-repeat: no-repeat;
//     background-position: right 0px bottom 42%;
//   background-size: 120%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   padding: 0 7rem;
//   @media (max-width: 1060px) {
//     background-position: 46% center;
//     background-size: cover;
//   }
//   @media (max-width:700px){
//       padding: 0 20px;
//     }
// 
const StyledHero = styled.div`
  // min-height: 350px;
`

const Hero = () => {
  const [isMobile, updateSize] = useState(false);  
  
  useEffect(() => {
    updateSize(window.innerWidth <= 768);
    window.addEventListener("resize", () => updateSize(window.innerWidth <= 768));
  }, []);

 return( <StyledHero>
    {/* <HeroTitle>Plataforma de Participación Ciudadana en Propuestas de Ley</HeroTitle>
    <HeroSubtitle>¡Participe haciendo aportes para co-crear mejores leyes!</HeroSubtitle>
    <HeroVideo video='argos.hcdn.gob.ar/DMPARL/tutorial.mp4' /> */}
    <video key={isMobile} style={{}} id="videobcg" className="fill" width="100%" height="100%" preload="auto" autoPlay={true} loop={true} muted={true} volume="0" poster="/static/assets/images/thumbnail-banner-01.jpg" >
        {isMobile && <source src="/static/assets/images/banner-mobile.mp4"  type="video/mp4"/> }
        {!isMobile && <><source src="/static/assets/images/banner-01.webm" type="video/webm" />
        <source src="/static/assets/images/banner-01.mp4"  type="video/mp4" /> </> }
      Sorry, your browser does not support HTML5 video.
    </video>
  </StyledHero>)
}

export default Hero
