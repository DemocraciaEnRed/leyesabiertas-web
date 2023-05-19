import React from 'react'
import styled from 'styled-components'
import SocialIcon from '../../elements/social-icon/component'

const SocialWrapper = styled.div`
  display:flex;
  flex-direction:column;
  flex: 0 0 auto;
  padding: 1.2em
  border-right: 1px solid #CACACA;
  z-index: 2
  position: absolute
  right: 0
  background-color: white
  box-shadow: 0px 2px 4px #cac7c7
  margin-top:7px;
  @media(max-width:700px){
    padding-right: 0px;
    border-right: 0px;
    margin-right: 0;
    padding-left: 10px
    border-left: 1px solid #CACACA;
    margin-left: 10px;
  }
  & > a:first-child {
  margin-bottom: 2px;
  }
  & > a > div {
    height: 25px;
    width: 25px;
  }
`

// const SocialIconWrapper = styled.div`
//   display: flex;
//   flex: 0 0 auto;
//   flex-direction: row;
// `

const IconWrapper = styled.div`
  `

const SocialSpan = styled.span`
  font-size:1.6rem;
  font-family:var(--bold);
  color:#4a5d68;
  margin-bottom:1rem;
  text-align: center;
  `
export default ({ id }) => {
  const socialLinksUrl = (window.location.origin + '/propuesta?id=' + id)
  const twitterText = encodeURIComponent('Proyecto de ley abierto a colaboración')

  return (
    <SocialWrapper>
      {/* <SocialSpan>Compartir</SocialSpan> */}
        <SocialIcon
          img={'/static/assets/facebook-icon.svg'}
          link={`http://www.facebook.com/sharer.php?u=${socialLinksUrl}`}
          target={'_blank'}
          rel={'noopener noreferrer'}
        />
        <SocialIcon img={'/static/assets/twitter-icon.svg'}
          link={`http://twitter.com/share?text=${twitterText}&url=${socialLinksUrl}`}
          target={'_blank'}
          rel={'noopener noreferrer'} />
    </SocialWrapper>
  )
}
