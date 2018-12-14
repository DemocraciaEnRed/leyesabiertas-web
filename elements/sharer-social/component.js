import React from 'react'
import styled from 'styled-components'
import SocialIcon from '../../elements/social-icon/component'

const SocialWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:6.7rem;
  margin-left:auto;
`
const IconWrapper = styled.div`
  display:flex;
  justify-content:space-between;`

const SocialSpan = styled.span`
  font-size:1.6rem;
  font-family:var(--bold);
  color:#4a5d68;
  margin-bottom:1rem;
  `
export default ({ id }) => {
  const socialLinksUrl = (window.location.origin + '/propuesta?id=' + id)
  const twitterText = encodeURIComponent('Proyecto de ley abierto a colaboración')

  return (
    <SocialWrapper>
      <SocialSpan>Compartir</SocialSpan>
      <IconWrapper>
        <SocialIcon
          img={'/static/assets/facebook-icon.svg'}
          link={`http://www.facebook.com/sharer.php?u=${socialLinksUrl}`}
          target={'_blank'}
          rel={'noopener noreferrer'} />

        <SocialIcon img={'/static/assets/twitter-icon.svg'}
          link={`http://twitter.com/share?text=${twitterText}&url=${socialLinksUrl}`}
          target={'_blank'}
          rel={'noopener noreferrer'} />
      </IconWrapper>
    </SocialWrapper>
  )
}
