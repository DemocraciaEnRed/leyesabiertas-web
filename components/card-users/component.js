import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CardUserHeader from '../../elements/card-user-header/component'
import CardUserActions from '../../elements/card-user-actions/component'
import router from 'next/router'

const CardContainer = styled.div`
margin: 0 1% 30px;
width: 23%;
box-shadow: 0 4px 20px 0 rgba(0,0,0,0.05);
background-color: #FFF;
border: solid 1px #e9e9e9;
box-sizing: border-box;
display: flex;
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
@media (max-width: 1408px) {
  width: 31%;
  }
@media (max-width: 1216px) {
  width: 48%;
  }
@media (max-width: 600px) {
  width: 100%;
  }
`

const CardUser = ({ user }) => {
  const edit = ()=>{
    console.log(user.fullname);
  }  
  const projects = ()=>{
    router.push(`/admin?section=projects&user=${user._id}`)
  }  
  return (
  <CardContainer>
    
        <CardUserHeader userId={user._id} name={user.fullname} party={user.fields.party}/>
        <CardUserActions edit={edit} projects={projects}/>
  </CardContainer>
  )
}

CardUser.propTypes = {
  user: PropTypes.object.isRequired,
  
}

export default CardUser
