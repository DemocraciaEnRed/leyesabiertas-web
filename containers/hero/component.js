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
position: relative;
overflow:hidden;

  // min-height: 350px;
`

const BannerImg = styled.div`
background-image: url(${props => props.srcImg});
background-position: center; 
background-repeat: no-repeat;
background-size: cover;
@media (max-width:700px){
  background-position: center; 
  
  }
`

const ContentBackground = styled.div`
position:absolute;
top:0;
width:100%;
height:102%;
backdrop-filter: blur(5px);
background:#ffffffbf;
/* transform: skewX(-29deg);
@media (max-width:700px){
left:0;
width:100%;
transform: skewX(0deg);
  
} */
`

const BannerContent = styled.div`

padding:50px 80px;  
z-index:10;
position:relative;
color:#4C4C4E
@media (max-width:700px){
  width:100%;
  padding:27px
}
}
`

const BannerTitle = styled.div`
font-family: var(--medium);
font-size:4.3em;
text-transform: uppercase;
letter-spacing: 0.5px;
@media (max-width:700px){
  text-align:center;
}
`


const BannerSubtitles = styled.ul`
margin-top:35px;;
margin-left:20px
`

const Subtitle = styled.li`
font-size:1.6em;
margin:15px 0
letter-spacing: 0.5px;
font-family: var(--medium);
@media (max-width:700px){
  color:#4C4C4E;
  font-size:1.5em;
}

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
    <BannerImg srcImg="/static/assets/images/foto_banner_02.jpg">
      <BannerContent>
      <BannerTitle>Plataforma de leyes abiertas</BannerTitle>
      <BannerSubtitles>
        <Subtitle>Recibí novedades de los proyectos en los temas de tu interés</Subtitle>
        <Subtitle>Paticipá de la co-creación de leyes</Subtitle>
        <Subtitle>Comentá, aportá y apoyá proyectos de ley</Subtitle>
      </BannerSubtitles>

      </BannerContent>
      <ContentBackground />
    </BannerImg>
   {/*  <video key={isMobile} style={{}} id="videobcg" className="fill" width="100%" height="100%" preload="auto" autoPlay={true} loop={true} muted={true} volume="0" poster="/static/assets/images/foto_banner_01.jpg" >
        {isMobile && <source src="/static/assets/images/banner-mobile.mp4"  type="video/mp4"/> }
        {!isMobile && <><source src="/static/assets/images/banner-01.webm" type="video/webm" />
        <source src="/static/assets/images/banner-01.mp4"  type="video/mp4" /> </> }
      Sorry, your browser does not support HTML5 video.
    </video> */}
  </StyledHero>)
}

export default Hero
