import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UserAvatar from '../user-avatar/component'

const Wrapper = styled.div`
  width:90%;
  margin-top:-70px;
  background-color:#fff;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:autos;
  padding:12px;
  box-sizing: border-box;
`
const TagTitle = styled.div`
font-size:1.2rem;
text-transform:uppercase;
text-align:left;
color:#5c97bc;
padding-bottom:1rem;
`

const Title = styled.div`
  font-size:2.4rem;
  color:#000;
  text-align:left;
  font-family: var(--bold);
  padding-bottom:2rem;
`

const TextWrapper = styled.div`
`

const croppedTitle = (title) => title.slice(0, 42).concat('...')

const CardContent = ({ authorId, tagTitle, title, userId, name, party }) => (
  <Wrapper>
    <TextWrapper>
      { tagTitle &&
        <TagTitle>{tagTitle}</TagTitle>
      }
      <Title>{title} </Title>
    </TextWrapper>
    <UserAvatar
      userId={userId}
      name={name}
      party={party}
      authorId={authorId} />
  </Wrapper>
)

CardContent.propTypes = {
  title: PropTypes.string.isRequired,
  tagTitle: PropTypes.string,
  userId: PropTypes.string,
  name: PropTypes.string.isRequired,
  party: PropTypes.string.isRequired,
  authorId: PropTypes.string.isRequired
}

export default CardContent
