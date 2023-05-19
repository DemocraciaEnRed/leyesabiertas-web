import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'react-icons-kit/Icon'
import CardHeaderContent from '../../elements/card-header-content/component'
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash'
import UserAvatar from '../user-avatar/component'

const Wrapper = styled.div`
width: 100%;
background-color: #FFF;
background-image: url('${(props) => props.img}');
overflow:hidden;
background-size: cover;
background-position: center;
padding:15px 0 15px 15px ;
// position: relative;
`



const CardUserHeader = ({ userId, name, party }) => (
  <Wrapper>
    <UserAvatar
      userId={userId}
      name={name}
      party={party} 
      cardUser/>

    
  </Wrapper>
)

CardUserHeader.propTypes = {
}
export default CardUserHeader
